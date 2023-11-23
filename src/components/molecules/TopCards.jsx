'use client';
import axios from 'axios';
import { IoBagHandle, IoPieChart, IoCart, IoPeople } from 'react-icons/io5';
import BoxWrapper from '../atoms/BoxWrapper';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setDailySales, setOrder, setAllSales } from '../../redux/slices/orderSlice';
import { getAllUsers } from '../../redux/slices/userSlice';

const spanStyle = 'text-sm text-gray-500 font-light';
const strongStyle = 'text-xl text-gray-700 font-semibold';

const TopCards = () => {
  const loggedUser = useSelector((state) => state.user.loggedUser);
  const dispatch = useDispatch();
  const dailySales = useSelector((state) => state.order.dailySales);
  const totalSales = useSelector((state) => state.order.totalSales);
  const allOrders = useSelector((state) => state.order.orderProducts);
  const allUsers = useSelector((state) => state.user.allUsers);
  const allClients = allUsers.filter((user) => user.isAdmin === false);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://enchufando-production.up.railway.app/api';
  useEffect(() => {
    const getAllOrders = async () => {
      try {
        const { data } = await axios.get(`${apiUrl}/order?userId=${loggedUser.id}`);
        dispatch(setOrder(data));
        dispatch(setAllSales());
        dispatch(setDailySales());
      } catch (error) {
        console.error(error);
      }
    };
    if (!allOrders || !allOrders.length) getAllOrders();
  }, []);

  useEffect(() => {
    const allUsers = async () => {
      const { data } = await axios(`${apiUrl}/user?userId=${loggedUser.id}`);
      dispatch(getAllUsers(data));
    };

    if (!allUsers || !allUsers.length) allUsers();
  }, []);

  function formatNumber(number) {
    const roundedNumber = Math.round(number);
    const formattedNumber = roundedNumber.toLocaleString('en-US');

    return formattedNumber;
  }

  return (
    <div className='px-4 py-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full'>
      <BoxWrapper>
        <div className='rounded-full bg-blue-500 h-12 w-12 flex items-center justify-center bg-sky-500'>
          <IoBagHandle className='text-2xl text-white' />
        </div>
        <div className='pl-4'>
          <span className={spanStyle}>Ventas del día</span>
          <div className='flex items-center'>
            <strong className={strongStyle}>{`$${formatNumber(
              dailySales.sales
            )}`}</strong>
            <span className='text-sm text-green-500 pl-2'>{`+${dailySales.orders}`}</span>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className='rounded-full h-12 w-12 flex items-center justify-center bg-orange-600'>
          <IoPieChart className='text-2xl text-white' />
        </div>
        <div className='pl-4'>
          <span className={spanStyle}>Usuarios nuevos</span>
          <div className='flex items-center'>
            <strong className={strongStyle}>{allClients.length}</strong>
            <span className='text-sm text-green-500 pl-2'>+{allClients.length}</span>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className='rounded-full h-12 w-12 flex items-center justify-center bg-yellow-400'>
          <IoPeople className='text-2xl text-white' />
        </div>
        <div className='pl-4'>
          <span className={spanStyle}> Usuarios nuevos</span>
          <div className='flex items-center'>
            <strong className={strongStyle}>15320</strong>
            <span className='text-sm text-green-500 pl-2'>+1543</span>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className='rounded-full h-12 w-12 flex items-center justify-center bg-green-600'>
          <IoCart className='text-2xl text-white' />
        </div>
        <div className='pl-4'>
          <span className={spanStyle}>Ventas totales</span>
          <div className='flex items-center'>
            <strong className={strongStyle}>{`$${formatNumber(totalSales)}`}</strong>
            <span className='text-sm text-green-500 pl-2'>
              +{`${formatNumber(dailySales.sales)}`}
            </span>
          </div>
        </div>
      </BoxWrapper>
    </div>
  );
};

export default TopCards;
