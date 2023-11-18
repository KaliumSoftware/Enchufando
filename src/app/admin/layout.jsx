'use client';
// components
import Sidebar from '@/components/organisms/Sidebar';
import AdminMobile from '@/components/molecules/AdminMobile';
// hooks
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const Layout = ({ children }) => {
  const [access, setAccess] = useState(false);
  const [screenSmall, setIsScreenSmall] = useState(
    typeof window !== 'undefined' && window.innerWidth < 768
  );
  const loggedUser = useSelector((state) => state.user.loggedUser);
  const userId = loggedUser.id;
  const router = useRouter();

  const authUser = async () => {
    try {
      const response = await axios(`${process.env.NEXT_PUBLIC_API_URL}/user/${userId}`);
      if (!response.data.isAdmin) {
        throw new Error('User is not an admin');
      }
      setAccess(true);
      return true;
    } catch (error) {
      console.error('Authentication error:', error);
      setAccess(false);
      router.push('/');
      return false;
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsScreenSmall(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const checkAccess = async () => {
      if (loggedUser.id) {
        const access = await authUser();
        if (!access) {
          router.push('/');
        }
      } else {
        router.push('/');
      }
    };

    checkAccess();
  }, [loggedUser]);

  return (
    <>
      {access &&
        (screenSmall ? (
          <AdminMobile />
        ) : (
          <div className='flex flex-row h-screen'>
            <Sidebar />
            <div className='w-full'>{children}</div>
          </div>
        ))}
    </>
  );
};

export default Layout;
