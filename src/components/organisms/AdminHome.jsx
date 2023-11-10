import Header from '@/components/atoms/Header';
import TopCards from '@/components/molecules/TopCards';
import BarChart from '@/components/molecules/BarChart';
import PopularProducts from '@/components/molecules/PopularProducts';
import RecentOrders from '@/components/molecules/RecentOrders';

const AdminHome = () => {
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

export default AdminHome;
