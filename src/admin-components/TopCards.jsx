'use client';
import {
  IoBagHandle,
  IoPieChart,
  IoCart,
  IoPeople
} from 'react-icons/io5';

const spanStyle = 'text-sm text-gray-500 font-light';
const strongStyle = 'text-xl text-gray-700 font-semibold';

const TopCards = () => {
  return (
    <div className='px-4 py-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full'>
      <BoxWrapper>
        <div className='rounded-full bg-blue-500 h-12 w-12 flex items-center justify-center bg-sky-500'>
          <IoBagHandle className='text-2xl text-white' />
        </div>
        <div className='pl-4'>
          <span className={spanStyle}>Ventas del día</span>
          <div className='flex items-center'>
            <strong className={strongStyle}>$5132.21</strong>
            <span className='text-sm text-green-500 pl-2'>+1123</span>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className='rounded-full h-12 w-12 flex items-center justify-center bg-orange-600'>
          <IoPieChart className='text-2xl text-white' />
        </div>
        <div className='pl-4'>
          <span className={spanStyle}>Auxies nuevos</span>
          <div className='flex items-center'>
            <strong className={strongStyle}>1532</strong>
            <span className='text-sm text-green-500 pl-2'>+254</span>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className='rounded-full h-12 w-12 flex items-center justify-center bg-yellow-400'>
          <IoPeople className='text-2xl text-white' />
        </div>
        <div className='pl-4'>
          <span className={spanStyle}> Usuarios nuevos</span>
          <div className='flex items-center'>
            <strong className={strongStyle}>15320</strong>
            <span className='text-sm text-green-500 pl-2'>+1543</span>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className='rounded-full h-12 w-12 flex items-center justify-center bg-green-600'>
          <IoCart className='text-2xl text-white' />
        </div>
        <div className='pl-4'>
          <span className={spanStyle}>Ventas totales</span>
          <div className='flex items-center'>
            <strong className={strongStyle}>$312,521.12</strong>
            <span className='text-sm text-red-500 pl-2'>-2544</span>
          </div>
        </div>
      </BoxWrapper>
    </div>
  );
};

function BoxWrapper({ children }) {
  return (
    <div className='bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center'>
      {children}
    </div>
  );
}

export default TopCards;
