import OrderByCategory from '../atoms/OrderByCategory';
import OrderByType from '../atoms/OrderByType';

const FilterStore = () => {
  return (
    <div className='w-1/4 pl-8 py-4'>
      <OrderByType />
      <OrderByCategory />
    </div>
  );
};

export default FilterStore;
