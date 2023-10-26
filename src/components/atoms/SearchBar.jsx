import { AiOutlineSearch } from 'react-icons/ai';

const SearchBar = () => {
  return (
    <div className='flex'>
      <input
        className='w-96 h-8 gap-2 bg-white border-1 border-black shadow-lg rounded-lg outline-2 focus:outline-none text-black active:outline-none p-2'
        type='text'
        placeholder='Buscar productos...'
      />
      <div className='relative top-1 right-8 cursor-pointer'>
        <AiOutlineSearch
          className='text-black'
          size={24}
        />
      </div>
    </div>
  );
};

export default SearchBar;
