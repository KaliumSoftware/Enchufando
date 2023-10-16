const Header = () => {
  const name = 'Gonzalo';
  return (
    <div className='flex justify-between px-4 pt-4'>
      <h2>Panel de Administrador</h2>
      <h2>Bienvenido, {name}</h2>
    </div>
  );
};

export default Header;
