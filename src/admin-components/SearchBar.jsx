import { HiOutlineSearch } from 'react-icons/hi';

const SearchBar = () => {
  return (
    <div className='relative mx-2'>
      <HiOutlineSearch
        fontSize={20}
        className='text-gray-400 absolute top-1/2 -translate-y-1/2 left-3'
      />
      <input
        type='text'
        placeholder='Buscar...'
        className='text-sm focus:outline-none text-black active:outline:none h-10 w-[24rem] border border-gray-300 rounded-sm px-4 pl-11'
      />
    </div>
  );
};

export default SearchBar;
