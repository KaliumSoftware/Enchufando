'use client';
import Sidebar from '@/admin-components/Sidebar';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const layout = ({ children }) => {
  const loggedUser = useSelector((state) => state.user.loggedUser);

  useEffect(() => {
    if (loggedUser.id) {
      if (!loggedUser.isAdmin) {
        window.location.href = '/';
      }
    }
  }, []);

  return (
    <>
      {loggedUser.isAdmin && (
        <div className='flex flex-row h-screen'>
          <Sidebar />
          <div className=' w-full'>{children}</div>
        </div>
      )}
    </>
  );
};

export default layout;
