import OrderByCategory from '../atoms/OrderByCategory';
import OrderByType from '../atoms/OrderByType';

const FilterStore = () => {
  return (
    <div className='w-full pb-4 flex gap-2 justify-center items-center'>
      <OrderByType />
      <OrderByCategory />
    </div>
  );
};

export default FilterStore;
