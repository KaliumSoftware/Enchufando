import OrderByCategory from '../atoms/OrderByCategory';
import OrderByType from '../atoms/OrderByType';

const FilterStore = () => {
  return (
    <div className='md:w-1/4 md:pl-8 pb-4 flex gap-2 justify-center md:justify-start md:flex-col'>
      <OrderByType />
      <OrderByCategory />
    </div>
  );
};

export default FilterStore;
