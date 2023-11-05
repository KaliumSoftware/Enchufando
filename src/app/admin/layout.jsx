'use client';
import Sidebar from '@/admin-components/Sidebar';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const layout = ({ children }) => {
  const [access, setAccess] = useState(false);
  const loggedUser = useSelector((state) => state.user.loggedUser);
  const router = useRouter();

  useEffect(() => {
    const authUser = async () => {
      try {
        const response = await axios(
          `${process.env.NEXT_PUBLIC_API_URL}/user/${loggedUser.id}`
        );

        if (!response.data.isAdmin) {
          router.push('/');
          setAccess(false);
        } else {
          setAccess(true);
        }
      } catch (error) {
        router.push('/');
      }
    };

    authUser();
  }, []);

  return (
    <>
      {access && (
        <div className='flex flex-row h-screen'>
          <Sidebar />
          <div className=' w-full'>{children}</div>
        </div>
      )}
    </>
  );
};

export default layout;
