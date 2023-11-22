'use client';
import axios from 'axios';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setOrder } from '@/redux/slices/orderSlice';
import { HiOutlineSearch } from 'react-icons/hi';
import { BsPersonFill } from 'react-icons/bs';

import Pagination from '../molecules/Pagination';
import usePagination from '@/hooks/usePagination';

const AdminTransactions = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.user.loggedUser.id);
  const allOrders = useSelector((state) => state.order.orderProducts);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    const getAllOrders = async () => {
      try {
        const { data } = await axios.get(`${apiUrl}/order?userId=${userId}`);
        dispatch(setOrder(data));
      } catch (error) {
        console.error(error);
      }
    };
    if (!allOrders || !allOrders.length) getAllOrders();
  }, []);

  function formatNumber(number) {
    const roundedNumber = Math.round(number);
    const formattedNumber = roundedNumber.toLocaleString('en-US');

    return formattedNumber;
  }

  function formatDate(inputDate) {
    const date = new Date(inputDate);
    const day = date.getDate();
    const month = date.toLocaleString('es-ES', { month: 'short' });
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  }

  const { currentPageData } = usePagination(6, allOrders);

  return (
    <div className='ml-52 lg:mr-0 pr-2 min-h-screen bg-gray-100'>
      <div className='p-4'>
        <div className='w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto'>
          <div className='relative mx-2'>
            <HiOutlineSearch
              fontSize={20}
              className='text-gray-400 absolute top-1/2 -translate-y-1/2 left-3'
            />
            <input
              type='text'
              placeholder='Buscar...'
              onChange={(e) => filterByName(e)}
              className='text-sm focus:outline-none text-black active:outline:none h-10 w-[24rem] border border-gray-300 rounded-sm px-4 pl-11'
            />
          </div>

          <div className='my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
            <span>Nombre del usuario</span>
            <span className='sm:text-left text-right'>Productos</span>
            <span className='hidden md:grid'>Fecha</span>
            <span className='hidden sm:grid'>Total</span>
          </div>
          {
            <ul>
              {allOrders.map((order, id) => (
                <li
                  key={id}
                  className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'
                >
                  <div className='flex items-center'>
                    <div className='bg-black/90 p-3 rounded-lg'>
                      <BsPersonFill className='text-white' />
                    </div>
                    <p className='pl-4'>{order.userName}</p>
                  </div>
                  <p className='text-gray-600 sm:text-left text-right'>
                    {order.products.length}
                  </p>
                  <p className='hidden md:flex'>{formatDate(order.createdAt)}</p>
                  <div className='sm:flex hidden justify-between items-center'>
                    <p>{formatNumber(order.totalPrice)}</p>
                  </div>
                </li>
              ))}
            </ul>
          }
          <div className='flex justify-center py-4'>
            <Pagination
              num={8}
              data={currentPageData}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminTransactions;
