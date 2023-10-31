import { useState, useEffect } from 'react';
import { filterByCategory } from '@/redux/slices/productSlice';
import { useDispatch } from 'react-redux';
import { category } from '@/../utils/consts';

const OrderByCategory = () => {
  const [selectValue, setSelectValue] = useState('Ver todas');
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectValue) {
      dispatch(filterByCategory(selectValue));
    }
  }, [selectValue]);

  const handleCategory = (e) => {
    dispatch(filterByCategory(e.target.textContent));
  };

  return (
    <article>
      <h3 className='md:mt-4 mb-3 text-xl'>Categorías</h3>
      <ul className='hidden md:flex flex-col gap-1'>
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

      <select
        className='none md:hidden'
        onChange={(e) => setSelectValue(e.target.value)}
        value={selectValue}
      >
        {category.map((item) => (
          <option
            className='w-fit cursor-pointer'
            key={item}
            value={item}
          >
            {item}
          </option>
        ))}
      </select>
    </article>
  );
};

export default OrderByCategory;
