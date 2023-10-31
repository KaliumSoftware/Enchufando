import { filterByType } from '@/redux/slices/productSlice';
import { useDispatch } from 'react-redux';
import { types } from '@/../utils/consts';

const OrderByType = () => {
  const dispatch = useDispatch();

  const handleType = (e) => {
    dispatch(filterByType(e.target.value));
  };

  return (
    <article className='flex flex-col mr-6 md:mr-0 lg:flex-row gap-2'>
      <h3 className='mb-2 text-xl md:text-md'>Ordenar por</h3>
      <select
        className='mr-3'
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
