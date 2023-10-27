import { filterByType } from '@/redux/slices/productSlice';
import { useDispatch } from 'react-redux';
import { types } from '@/../utils/consts';

const OrderByType = () => {
  const dispatch = useDispatch();

  const handleType = (e) => {
    console.log(e.target.value);
    dispatch(filterByType(e.target.value));
  };

  return (
    <article className='flex gap-2'>
      <p>Ordenar por</p>
      <select
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
