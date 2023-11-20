import { filterByType, handleFilter } from '@/redux/slices/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import { types } from '@/../utils/consts';

const OrderByType = () => {
  const resetFilter = useSelector((state) => state.product.handleFilter);
  const dispatch = useDispatch();

  console.log(resetFilter);
  const handleType = (e) => {
    dispatch(filterByType(e.target.value));

    dispatch(handleFilter({ ...resetFilter, type: true }));
    if (resetFilter.category) {
      dispatch(handleFilter({ ...resetFilter, category: false }));
    }
  };

  return (
    <article className='px-3 py-4 flex flex-col md:flex-row gap-4'>
      <h3 className='md:mt-4 mb-3 text-xl'>Tipo</h3>
      <select
        className='mr-3 focus:ring-2 focus:ring-blueDark font-medium rounded-lg py-2.5 inline-flex items-center'
        onChange={handleType}
        name=''
        id=''
      >
        {types.map((item) => (
          <option
            value={item}
            key={item}
          >
            {item}
          </option>
        ))}
      </select>
    </article>
  );
};

export default OrderByType;
