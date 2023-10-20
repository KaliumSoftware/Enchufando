import Header from '@/admin-components/Header';
import TopCards from '@/admin-components/TopCards';
import BarChart from '@/admin-components/BarChart';
import PopularProducts from '@/admin-components/PopularProducts';

const page = () => {
  return (
    <div className='min-h-full bg-gray-100'>
      <Header />
      <TopCards />
      <div className='h-[22rem] px-4 py-2 flex justify-between'>
        <div>
          <BarChart />
        </div>
        <div>
          <PopularProducts />
        </div>
      </div>
    </div>
  );
};

export default page;
