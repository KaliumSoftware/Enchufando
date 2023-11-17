'use client';
import axios from 'axios';
import { HiOutlineSearch } from 'react-icons/hi';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers, filterUsersByName } from '../../redux/slices/userSlice';
import { BsPersonFill, BsThreeDotsVertical } from 'react-icons/bs';
import Pagination from '@/components/molecules/Pagination';
import usePagination from '@/hooks/usePagination';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const discountToPorcentage = (number) => {
  const porcentage = number * 100;
  return porcentage + '%';
};

const Clients = () => {
  const { loggedUser } = useSelector((state) => state.user);
  const allUsers = useSelector((state) => state.user.allUsers);
  const allClients = allUsers.filter((user) => user.isAdmin === false);
  const dispatch = useDispatch();
  const { currentPageData } = usePagination(8, allClients);

  useEffect(() => {
    const allUsers = async () => {
      const { data } = await axios(`${apiUrl}/user?userId=${loggedUser.id}`);
      dispatch(getAllUsers(data));
    };

    if (!allUsers || !allUsers.length) allUsers();
  }, []);

  const filterByName = (e) => {
    dispatch(filterUsersByName(e.target.value));
  };

  return (
    <div className='bg-gray-100 min-h-screen'>
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
            <span>Name</span>
            <span className='sm:text-left text-right'>Email</span>
            <span className='hidden md:grid'>Last Order</span>
            <span className='hidden sm:grid'>Descuento</span>
          </div>
          <ul>
            {allClients.map((client, id) => (
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
                <p className='text-gray-600 sm:text-left text-right'>{client.email}</p>
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
              data={currentPageData}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
