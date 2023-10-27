import { filterByCategory } from '@/redux/slices/productSlice';
import { useDispatch } from 'react-redux';
import { category } from '@/../utils/consts';

const OrderByCategory = () => {
  const dispatch = useDispatch();

  const handleCategory = (e) => {
    dispatch(filterByCategory(e.target.textContent));
  };
  return (
    <article>
      <h3 className='mt-4 mb-2 text-xl'>Categorías</h3>
      <ul className='flex flex-col gap-1'>
        {category.map((item) => (
          <li
            className='w-fit cursor-pointer'
            key={item}
            value={item}
            onClick={handleCategory}
          >
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
};

export default OrderByCategory;
