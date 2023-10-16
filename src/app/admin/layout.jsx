import Sidebar from '@/admin-components/Sidebar';
const layout = ({ children }) => {
  return (
    <main className='min-h-screen'>
      <Sidebar>{children}</Sidebar>
    </main>
  );
};

export default layout;
