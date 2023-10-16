import { IoBagHandle, IoCart, IoPeople } from 'react-icons/io5';
const TopCards = () => {
  return (
    <section className='grid lg:grid-cols-5 gap-4 p-4'>
      <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
        <div className='flex items-center p-4 rounded w-full pb-4'>
          <div className='flex items-center'>
            <div className='mr-4 rounded-full h-12 w-12 flex items-center justify-center bg-black/90'>
              <IoBagHandle className='text-2xl text-white' />
            </div>
          </div>
          <div>
            <p className='text-gray-600'>Ganancias del dia</p>
            <div className='flex items-center'>
              <p className='text-2xl font-bold'>$205,234$</p>
              <span className='text-sm text-green-500 pl-2'>
                +17%
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
        <div className='flex items-center p-4 rounded w-full pb-4'>
          <div className='flex items-center'>
            <div className='mr-4 rounded-full h-12 w-12 flex items-center justify-center bg-black/90'>
              <IoBagHandle className='text-2xl text-white' />
            </div>
            <div>
              <p className='text-gray-600'>Ganancias del mes</p>
              <div className='flex items-center'>
                <p className='text-2xl font-bold'>$1,705,234$</p>
                <span className='text-sm text-green-500 pl-2'>
                  +11%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex items-center'>
        <div className='bg-white flex justify-between w-full border p-4 rounded-lg'>
          <div className='flex flex-col w-full pb-4'>
            <div className='flex items-center'>
              <div className='mr-4 rounded-full h-12 w-12 flex items-center justify-center bg-black/90'>
                <IoPeople className='text-2xl text-white' />
              </div>
              <div>
                <p className='text-gray-600'>Clientes nuevos</p>
                <div className='flex items-center'>
                  <p className='text-2xl font-bold'>1,132</p>
                  <span className='text-sm text-green-500 pl-2'>
                    +5%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopCards;
