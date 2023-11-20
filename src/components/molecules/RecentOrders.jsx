'use client';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setAllUserOrders, setRecentOrders } from '@/redux/slices/orderSlice';
import axios from 'axios';
import { FaShoppingBag } from 'react-icons/fa';

const RecentOrders = () => {
  const dispatch = useDispatch();
  const loggedUser = useSelector((state) => state.user.loggedUser);
  const userId = loggedUser.id;
  const recentOrders = useSelector((state) => state.order.recentOrders);

  useEffect(() => {
    const getAllOrders = async () => {
      try {
        const { data } = await axios.get(`/api/order?userId=${userId}`);
        dispatch(setAllUserOrders(data));
        dispatch(setRecentOrders(data));
      } catch (error) {
        console.error(error);
      }
    };
    getAllOrders();
  }, []);

  function formatAndRoundNumber(number) {
    const roundedNumber = Math.round(number);
    return roundedNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }

  function formatDate(inputDate) {
    const date = new Date(inputDate);
    const day = date.getDate();
    const month = date.toLocaleString('es-ES', { month: 'short' });
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  }
  return (
    <div className='md:min-h-[30rem] rounded-xl p-4 w-full col-span-1 relative lg:h-[40vh] h-[30vh] m-auto border bg-white overflow-y-scroll'>
      <strong className='text-gray-700 font-medium'>Ordenes Recientes</strong>
      <ul>
        {recentOrders.map((order, id) => (
          <li
            key={id}
            className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer'
          >
            <div className='bg-purple-100 rounded-lg p-3'>
              <FaShoppingBag className='text-purple-800' />
            </div>
            <div className='pl-4'>
              <p className='text-gray-400 text-sm'>{order.userName}</p>
              <p className='text-gray-800 font-bold'>
                ${formatAndRoundNumber(order.totalPrice)}
              </p>
            </div>
            <p className='lg:flex absolute right-6 text-sm'>
              {formatDate(order.createdAt)}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentOrders;
