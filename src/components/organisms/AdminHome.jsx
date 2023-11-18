'use client';
import { useState } from 'react';
import Header from '@/components/atoms/Header';
import TopCards from '@/components/molecules/TopCards';
import BarChart from '@/components/molecules/BarChart';
import PopularProducts from '@/components/molecules/PopularProducts';
import RecentOrders from '@/components/molecules/RecentOrders';

const AdminHome = () => {
  return (
    <div className='ml-52 lg:mr-0 min-h-screen bg-gray-100'>
      <Header />
      <TopCards />
      <div className='mb-4 px-4 py-2 flex sm:gap-4 md:flex-col md:justify-between xl:flex-row '>
        <BarChart />
        <PopularProducts />
      </div>
      <div className='px-4 py-2 flex sm:gap-4'>
        <RecentOrders />
      </div>
    </div>
  );
};

export default AdminHome;
