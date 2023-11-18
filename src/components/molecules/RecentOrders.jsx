import { data } from '../../../utils/data';
import { FaShoppingBag } from 'react-icons/fa';

const RecentOrders = () => {
  return (
    <div className='md:min-h-[30rem] rounded-xl p-4 w-full col-span-1 relative lg:h-[40vh] h-[30vh] m-auto border bg-white overflow-y-scroll'>
      <strong className='text-gray-700 font-medium'>Ordenes Recientes</strong>
      <ul>
        {data.map((order, id) => (
          <li
            key={id}
            className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer'
          >
            <div className='bg-purple-100 rounded-lg p-3'>
              <FaShoppingBag className='text-purple-800' />
            </div>
            <div className='pl-4'>
              <p className='text-gray-800 font-bold'>${order.total}</p>
              <p className='text-gray-400 text-sm'>{order.name.first}</p>
            </div>
            <p className='lg:flex md:hidden absolute right-6 text-sm'>{order.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentOrders;
