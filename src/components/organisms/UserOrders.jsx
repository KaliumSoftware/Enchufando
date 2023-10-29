'use client';
import React, { useEffect, useState } from 'react';
import { BsThreeDotsVertical, BsFillCartFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import Pagination from '@/components/molecules/Pagination';
import axios from 'axios';
import Swal from 'sweetalert2';
import OrderDetail from '@/components/molecules/OrderDetail';

const UserOrders = () => {
  const [allUserOrders, setAllUserOrders] = useState([]);
  const [detail, setDetail] = useState({ show: false, index: null });
  const userId = useSelector((state) => state.user.loggedUser.id);
  const loggedUser = useSelector((state) => state.user.loggedUser);

  useEffect(() => {
    const getAllOrders = async () => {
      try {
        const { data } = await axios.get(`/api/order/${userId}`);

        setAllUserOrders(data);
      } catch (error) {
        Swal.fire({
          icon: 'warning',
          title: 'Ups...',
          text: 'No se encontraron pedidos registrados'
        });
      }
    };

    if (!allUserOrders || !allUserOrders.length) getAllOrders();
  }, []);

  const dateTransform = (date) => {
    const formattedDate = new Date(date);

    return formattedDate.toLocaleDateString('es-AR', {
      weekday: 'long',
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const priceTransform = (price) => {
    return price.toLocaleString('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 2
    });
  };

  return (
    <div className='h-[60vh]'>
      <div className='mt-24 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between'>
        <span>Fecha de pedido</span>
        <span className='sm:text-left text-right'>
          Cantidad de productos
        </span>
        <span className='hidden md:grid'>Descuento ($)</span>
        <span className='hidden sm:grid'>Total final</span>
      </div>
      <ul>
        {allUserOrders?.map((order, index) => (
          <li
            key={order.id}
            className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'
            onClick={() => setDetail({ show: true, index })}
          >
            <div className='flex items-center'>
              <div className='bg-black/90 p-3 rounded-lg'>
                <BsFillCartFill className='text-white' />
              </div>
              <p className='pl-4'>{dateTransform(order.createdAt)}</p>
            </div>
            <p className='text-gray-600 sm:text-left text-right'>
              {order.products.length}
            </p>
            <p className='hidden md:flex'>
              {priceTransform(order.totalPrice * loggedUser.discount)}
            </p>
            <div className='sm:flex hidden justify-between items-center'>
              <p>{priceTransform(order.totalPrice)}</p>
              <BsThreeDotsVertical />
            </div>
          </li>
        ))}
      </ul>
      <div className='flex justify-center py-4'>
        <Pagination
          num={6}
          data={allUserOrders}
        />
      </div>

      {detail.show && (
        <OrderDetail
          setDetail={setDetail}
          products={allUserOrders[detail.index].products}
          discount={loggedUser.discount}
          totalPrice={allUserOrders[detail.index].totalPrice}
        />
      )}
    </div>
  );
};

export default UserOrders;
