'use client';
import React, { useEffect, useState } from 'react';
import { BsFillCartFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import Pagination from '@/components/molecules/Pagination';
import axios from 'axios';
import Swal from 'sweetalert2';
import OrderDetail from '@/components/molecules/OrderDetail';
import usePagination from '@/hooks/usePagination';


const UserOrders = () => {
  const [allUserOrders, setAllUserOrders] = useState([]);
  const [detail, setDetail] = useState({ show: false, index: null });
  const userId = useSelector((state) => state.user.loggedUser.id);
  const loggedUser = useSelector((state) => state.user.loggedUser);
  const { currentPageData } = usePagination(6, allUserOrders);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://enchufando-production.up.railway.app/api';

  useEffect(() => {
    const getAllOrders = async () => {
      try {
        const { data } = await axios.get(`${apiUrl}/order/${userId}`);

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
    <div className='md:min-h-[56vh] h-full'>
      <div className='mt-24 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between'>
        <span className='flex justify-center'>Fecha de pedido</span>
        <span className='hidden md:flex justify-center'>Cantidad de productos</span>
        <span className='hidden md:flex justify-center'>Descuento ($)</span>
        <span className='flex justify-center'>Total final</span>
      </div>
      <ul>
        {currentPageData?.map((order, index) => (
          <li
            key={order.id}
            className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'
            onClick={() => setDetail({ show: true, index })}
          >
            <div className='flex justify-center items-center'>
              <div className='bg-black/90 p-3 rounded-lg'>
                <BsFillCartFill className='text-white' />
              </div>
              <p className='pl-4'>{dateTransform(order.createdAt)}</p>
            </div>
            <div className='hidden md:flex justify-center items-center'>
              <p className='text-gray-600'>{order.products.length}</p>
            </div>
            <div className='hidden md:flex justify-center items-center'>
              <p className='flex'>
                {priceTransform(order.totalPrice * loggedUser.discount)}
              </p>
            </div>
            <div className='flex justify-center items-center'>
              <p>{priceTransform(order.totalPrice)}</p>
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
