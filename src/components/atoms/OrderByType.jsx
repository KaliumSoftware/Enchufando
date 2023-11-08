import { filterByType } from '@/redux/slices/productSlice';
import { useDispatch } from 'react-redux';
import { types } from '@/../utils/consts';

const OrderByType = () => {
  const dispatch = useDispatch();

  const handleType = (e) => {
    dispatch(filterByType(e.target.value));
  };

  return (
    <article className='flex flex-col mr-6 md:mr-0 lg:flex-row gap-1'>
      <h3 className='mb-2 text-xl md:text-md'>Ordenar por</h3>
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
