import Sidebar from '@/admin-components/Sidebar';
import Header from '@/admin-components/Header';
const layout = ({ children }) => {
  return (
    <div className='flex flex-row h-screen'>
      <Sidebar />
      <div className=' w-full'>{children}</div>
    </div>
  );
};

export default layout;
