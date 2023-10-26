'use client';
import React, { useEffect } from 'react';
import { BsPersonFill, BsThreeDotsVertical } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUserOrders } from '@/redux/slices/orderSlice';
import Pagination from '../molecules/Pagination';

const UserOrders = () => {
  const allUserOrders = useSelector(
    (state) => state.order.allUserOrders
  );
  const userId = useSelector((state) => state.user.loggedUser.id);
  const dispatch = useDispatch();

  useEffect(() => {
    if (userId) {
      dispatch(getAllUserOrders(userId));
    }
  }, []);

  useEffect(() => {
    console.log(allUserOrders);
  }, [allUserOrders]);

  return (
    <div>
      <div className='my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
        <span>Name</span>
        <span className='sm:text-left text-right'>Email</span>
        <span className='hidden md:grid'>Last Order</span>
        <span className='hidden sm:grid'>Descuento</span>
      </div>
      <ul>
        {allUserOrders?.map((client, id) => (
          <li
            key={id}
            className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'
          >
            <div className='flex items-center'>
              <div className='bg-black/90 p-3 rounded-lg'>
                <BsPersonFill className='text-white' />
              </div>
              <p className='pl-4'>{client.name}</p>
            </div>
            <p className='text-gray-600 sm:text-left text-right'>
              {client.email}
            </p>
            <p className='hidden md:flex'>{client.date}</p>
            <div className='sm:flex hidden justify-between items-center'>
              <p>{discountToPorcentage(client.discount)}</p>
              <BsThreeDotsVertical />
            </div>
          </li>
        ))}
      </ul>
      <div className='flex justify-center py-4'>
        <Pagination
          num={8}
          data={allUserOrders}
        />
      </div>
    </div>
  );
};

export default UserOrders;
