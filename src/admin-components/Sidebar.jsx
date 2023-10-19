'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { RxSketchLogo, RxDashboard, RxPerson } from 'react-icons/rx';
import { HiOutlineReceiptPercent } from 'react-icons/hi2';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { FiSettings } from 'react-icons/fi';
import GenerateCode from './GenerateCode';

const Sidebar = ({ children }) => {
  const [showDiscountMenu, setShowDiscountMenu] = useState(false);

  const router = useRouter();

  return (
    <div className='flex'>
      <div className='fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-start'>
        <div className='flex flex-col items-center '>
          <div
            onClick={() => router.push('/admin')}
            className='cursor-pointer'
          >
            <div className='bg-purple-800 text-white p-3 rounded-lg inline-block'>
              <RxSketchLogo size={20} />
            </div>
          </div>
          <span className='border-b-[1px] border-gray-200 w-full p-2'></span>
          <div
            onClick={() => router.push('/admin')}
            className='cursor-pointer'
          >
            <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
              <RxDashboard size={20} />
            </div>
          </div>
          <div
            onClick={() => router.push('/admin/clients')}
            className='cursor-pointer'
          >
            <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
              <RxPerson size={20} />
            </div>
          </div>
          <div
            onClick={() => router.push('/admin/orders')}
            className='cursor-pointer'
          >
            <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
              <HiOutlineShoppingBag size={20} />
            </div>
          </div>
          <div
            className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'
            onClick={() => setShowDiscountMenu(!showDiscountMenu)}
          >
            <HiOutlineReceiptPercent size={20} />
          </div>
          <div
            onClick={() => router.push('/admin/settings')}
            className='cursor-pointer'
          >
            <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
              <FiSettings size={20} />
            </div>
          </div>
        </div>
      </div>
      <main className='ml-20 w-full'>{children}</main>

      {showDiscountMenu && (
        <GenerateCode setShowDiscountMenu={setShowDiscountMenu} />
      )}
    </div>
  );
};

export default Sidebar;
