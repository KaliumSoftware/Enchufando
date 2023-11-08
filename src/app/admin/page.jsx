import Header from '@/admin-components/Header';
import TopCards from '@/admin-components/TopCards';
import BarChart from '@/admin-components/BarChart';
import PopularProducts from '@/admin-components/PopularProducts';
import RecentOrders from '@/admin-components/RecentOrders';

const page = () => {
  return (
    <div className='min-h-screen bg-gray-100'>
      <Header />
      <TopCards />
      <div className='h-[22rem] px-4 py-2 flex justify-between'>
        <BarChart />
        <PopularProducts />
      </div>
      <div className='px-4 py-2'>
        <RecentOrders />
      </div>
    </div>
  );
};

export default page;
