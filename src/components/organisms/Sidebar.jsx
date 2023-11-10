'use client';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { FcBullish } from 'react-icons/fc';
import { HiOutlineLogout } from 'react-icons/hi';
import {
  DASHBOARD_SIDEBAR_LINKS,
  DASHBOARD_SIDEBAR_BOTTOM_LINKS
} from '../../../utils/consts';
import GenerateCode from './GenerateCode';

const Sidebar = () => {
  return (
    <div className='h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between'>
      <div className='flex flex-col gap-2'>
        <div className='flex items-center gap-2 px-1 py-3'>
          <FcBullish fontSize={24} />
          <span className={'text-neutral-700 text-lg'}>Auxie Admin</span>
        </div>
        <div className='flex flex-col gap-0.5 pt-2 border-t border-neutral-900'>
          {DASHBOARD_SIDEBAR_LINKS.map((item) => {
            return (
              <SideBarLink
                key={item.key}
                item={item}
              />
            );
          })}
          <div className='pt-2 flex'></div>
        </div>
      </div>
      <div className='flex flex-col gap-0.5 pt-2 border-t border-neutral-900'>
        {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => {
          return (
            <SideBarLink
              key={item.key}
              item={item}
            />
          );
        })}
        <div className='flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-100 hover:no-underline active-neutral-600 rounded-sm text-base text-red-600 cursor-pointer'>
          <span className='text-xl'>
            <HiOutlineLogout />
          </span>
          Logout
        </div>
      </div>
    </div>
  );
};

function SideBarLink({ item }) {
  const pathname = usePathname();
  const [showDiscountMenu, setShowDiscountMenu] = useState(false);

  if (item.key === 'generate-code') {
    return (
      <div>
        <button
          className={
            item.path === 'generate-code'
              ? 'text-left text-md transition-all flex items-center gap-2 font-light px-1 py-2 hover:bg-neutral-100 hover:no-underline active-neutral-600 rounded-sm bg-gray-200'
              : 'text-left text-md transition-all hover:bg-gray-200 flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-100 hover:no-underline active-neutral-600 rounded-sm'
          }
          onClick={() => setShowDiscountMenu(!showDiscountMenu)}
        >
          <span className='text-xl'>{item.icon}</span>
          {item.label}
        </button>
        {showDiscountMenu && <GenerateCode setShowDiscountMenu={setShowDiscountMenu} />}
      </div>
    );
  }

  return (
    <Link
      className={
        pathname === item.path
          ? 'text-md transition-all flex items-center gap-2 font-light px-1 py-2 hover:bg-neutral-100 hover:no-underline active-neutral-600 rounded-sm bg-gray-200'
          : 'text-md transition-all hover:bg-gray-200 flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-100 hover:no-underline active-neutral-600 rounded-sm'
      }
      target={item.path.includes('http') ? '_blank' : '_self'}
      href={item.path}
    >
      <span className='text-xl'>{item.icon}</span>
      {item.label}
    </Link>
  );
}

export default Sidebar;
