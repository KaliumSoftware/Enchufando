import Header from '@/admin-components/Header';
import TopCards from '@/admin-components/TopCards';
import BarChart from '@/admin-components/BarChart';
import PopularProducts from '@/admin-components/PopularProducts';
import RecentOrders from '@/admin-components/RecentOrders';
import { useSelector } from 'react-redux';

const page = () => {
  const user = useSelector((state) => state.user.isAdmin);
  return (
    <div className=' min-h-full bg-gray-100'>
      {user.isAdmin ? (
        <>
          <Header />
          <TopCards />
          <div className='h-[22rem] px-4 py-2 flex justify-between'>
            <BarChart />
            <PopularProducts />
          </div>
          <div className='px-4 py-2'>
            <RecentOrders />
          </div>
        </>
      ) : (
        'no es admin'
      )}
    </div>
  );
};

export default page;
