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
    <div>
      <h3 className='md:mt-4 mb-3 text-xl'>Categorías</h3>
      <aside id="default-sidebar" class="hidden md:block md:top-0 left-0 z-40 w-64" aria-label="Sidebar">
        <div class=" px-3 py-4 overflow-y-auto bg-white rounded-lg">
          <ul class="space-y-2 font-medium">
            <li>
              {category.map((item) => (
                <a class="flex items-center p-1 text-gray-900 rounded-lg hover:bg-gray-300 group"
                  key={item}
                  value={item}
                  onClick={handleCategory}>

                  <span class="ml-3">
                    {item}
                  </span>
                </a>
              ))}
            </li>
          </ul>
        </div>
      </aside>
      <select
        className='none md:hidden scrollbar-hide focus:ring-2 focus:ring-blueDark font-medium rounded-lg py-2.5 inline-flex items-center'
        onChange={(e) => setSelectValue(e.target.value)}
        value={selectValue}
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