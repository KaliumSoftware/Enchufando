'use client';
import Sidebar from '@/admin-components/Sidebar';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const layout = ({ children }) => {
  const [access, setAccess] = useState(false);
  const loggedUser = useSelector((state) => state.user.loggedUser);
  const userId = loggedUser.id;

  const router = useRouter();
  useEffect(() => {
    const authUser = async () => {
      try {
        const response = await axios(`${process.env.NEXT_PUBLIC_API_URL}/user/${userId}`);
        if (!response.data.isAdmin) {
          router.push('/');
          setAccess(false);
          return false;
        } else {
          setAccess(true);
          return true;
        }
      } catch (error) {
        router.push('/');
        return false;
      }
    };

    loggedUser.id &&
      authUser()
        .then((res) => {
          res && setAccess(true);
        })
        .catch(() => {
          setAccess(false);
          router.push('/');
        });
  }, [loggedUser]);

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
