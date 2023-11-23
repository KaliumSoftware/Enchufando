import { useSelector } from 'react-redux';
const Header = () => {
  const loggedUser = useSelector((state) => state.user.loggedUser);
  const name = loggedUser.name.split(' ').slice(0, 1).join('');
  return (
    <div className='flex justify-between px-4 pt-4'>
      <h2>Panel de Administrador</h2>
      <h2>Bienvenido, {name}</h2>
    </div>
  );
};

export default Header;
