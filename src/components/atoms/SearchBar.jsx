'use client';
//hooks
import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
//redux
import { useDispatch } from 'react-redux';
import { filterProductsByName, restoreProducts } from '../../redux/slices/productSlice';
import { setCurrentPage } from '../../redux/slices/paginationSlice';
//icon
import { AiOutlineSearch } from 'react-icons/ai';

const SearchBar = () => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const router = useRouter();
  const pathname = usePathname();

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleClick = async () => {
    dispatch(setCurrentPage(1));

    dispatch(filterProductsByName(search));

    if (pathname !== '/store') router.push('/store');
  };

  return (
    <div className='flex'>
      <input
        className='w-full  md:w-96 h-8 gap-2 bg-white border-1 border-black shadow-lg rounded-lg outline-2 focus:outline-none text-black active:outline-none p-2'
        type='text'
        onChange={handleSearch}
        placeholder='Productos...'
      />
      <div className='z-0 relative top-1 right-8 cursor-pointer'>
        <AiOutlineSearch
          onClick={handleClick}
          className='text-black'
          size={24}
        />
      </div>
    </div>
  );
};

export default SearchBar;
