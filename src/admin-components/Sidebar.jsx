'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { RxSketchLogo, RxDashboard, RxPerson } from 'react-icons/rx';
import { HiOutlineReceiptPercent } from 'react-icons/hi2';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { FiSettings } from 'react-icons/fi';
import GenerateCode from './GenerateCode';

const Sidebar = ({ children }) => {
  const [showDiscountMenu, setShowDiscountMenu] = useState(false);

  return (
    <div className='flex'>
      <div className='fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-start'>
        <div className='flex flex-col items-center '>
          <Link href='/admin'>
            <div className='bg-purple-800 text-white p-3 rounded-lg inline-block'>
              <RxSketchLogo size={20} />
            </div>
          </Link>
          <span className='border-b-[1px] border-gray-200 w-full p-2'></span>
          <Link href='/admin'>
            <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
              <RxDashboard size={20} />
            </div>
          </Link>
          <Link href='/admin/clients'>
            <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
              <RxPerson size={20} />
            </div>
          </Link>
          <Link href='/admin/orders'>
            <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
              <HiOutlineShoppingBag size={20} />
            </div>
          </Link>
          <div
            className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'
            onClick={() => setShowDiscountMenu(!showDiscountMenu)}
          >
            <HiOutlineReceiptPercent size={20} />
          </div>
          <Link href='/admin/settings'>
            <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
              <FiSettings size={20} />
            </div>
          </Link>
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
