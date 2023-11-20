import { useState, useEffect } from 'react';
import { filterByCategory } from '@/redux/slices/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import { handleFilter } from '@/redux/slices/productSlice';
import { category } from '@/../utils/consts';

const OrderByCategory = () => {
  const resetFilter = useSelector((state) => state.product.handleFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleFilter({ ...resetFilter, category: false }));
    dispatch(handleFilter({ ...resetFilter, type: false }));
  }, []);

  const handleCategory = (e) => {
    dispatch(filterByCategory(e.target.value));
    dispatch(handleFilter({ ...resetFilter, category: true }));
    if (resetFilter.type) {
      dispatch(handleFilter({ ...resetFilter, type: false }));
    }
  };

  return (
    <div className='px-3 py-4 flex flex-col md:flex-row gap-4'>
      <h3 className='md:mt-4 mb-3 text-xl'>Categorías</h3>

      <select
        className='none scrollbar-hide focus:ring-2 focus:ring-blueDark font-medium rounded-lg py-2.5 inline-flex items-center'
        onChange={handleCategory}
      >
        {category.map((item) => (
          <option
            className='w-fit cursor-pointer '
            key={item}
            value={item}
          >
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default OrderByCategory;
