import Header from '@/admin-components/Header';
import TopCards from '@/admin-components/TopCards';
import BarChart from '@/admin-components/BarChart';
import RecentOrders from '@/admin-components/RecentOrders';

const page = () => {
  return (
    <div className='min-h-full bg-gray-100'>
      <Header />
      <TopCards />
      <div className='p-4 grid md:grid-cols-3 grid-cols-1 gap-4'>
        <BarChart />
        <RecentOrders />
      </div>
    </div>
  );
};

export default page;
