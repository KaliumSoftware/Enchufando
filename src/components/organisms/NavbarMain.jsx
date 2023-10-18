'use client';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Navbar,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
  Button
} from '@nextui-org/react';
import logoBlack from './../../../assets/logo-black-png-transformed.png';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import ShoppingCart from './ShoppingCart';
import LoginRegisterMenu from './LoginRegisterMenu';
import { setLoggedUser } from '@/redux/slices/userSlice';

export default function NavbarMain() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLoginMenu, setShowLoginMenu] = useState(false);
  const [signingin, setSigningin] = useState(false);

  const dispatch = useDispatch();
  const loggedUser = useSelector((state) => state.user.loggedUser);
  const pathname = usePathname();
  const router = useRouter();

  const menuItems = ['Inicio', 'Tienda', 'Contacto'];

  const handleClick = (event) => {
    const { name } = event.target;

    name === 'login' ? setSigningin(true) : setSigningin(false);

    if (!showLoginMenu) {
      setShowLoginMenu(true);
    } else if (showLoginMenu && name === 'login' && signingin) {
      setShowLoginMenu(false);
    } else if (showLoginMenu && name === 'register' && !signingin) {
      setShowLoginMenu(false);
    }
  };

  const handleLogOut = () => {
    dispatch(setLoggedUser({}));
  };

  return (
    <>
      {pathname.split('/')[1] !== 'admin' && (
        <Navbar
          className={'w-full'}
          isBordered
          isMenuOpen={isMenuOpen}
          onMenuOpenChange={setIsMenuOpen}
        >
          <NavbarContent>
            <NavbarMenuToggle
              aria-label={isMenuOpen ? 'Cerrar menu' : 'Abrir menu'}
              className='sm:hidden'
            />
            <NavbarBrand>
              <div
                onClick={() => router.push('/')}
                className='cursor-pointer'
              >
                <Image
                  className='w-10 h-10'
                  src={logoBlack}
                  alt='Logo'
                />
              </div>
            </NavbarBrand>
          </NavbarContent>

          <NavbarContent
            className='hidden sm:flex gap-4'
            justify='center'
          >
            <NavbarItem isActive={pathname === '/'}>
              <div
                onClick={() => router.push('/')}
                className='cursor-pointer'
                color='foreground'
              >
                Inicio
              </div>
            </NavbarItem>
            <NavbarItem isActive={pathname === '/store'}>
              <div
                onClick={() => router.push('/store')}
                className='cursor-pointer'
                color='foreground'
              >
                Tienda
              </div>
            </NavbarItem>
            <NavbarItem isActive={pathname === '/contact-us'}>
              <div
                onClick={() => router.push('/contact-us')}
                className='cursor-pointer'
                color='foreground'
              >
                Contacto
              </div>
            </NavbarItem>
          </NavbarContent>

          <NavbarContent
            as='div'
            justify='end'
          >
            {!loggedUser.id ? (
              <NavbarContent justify='end'>
                <NavbarItem className='hidden lg:flex'>
                  <Button
                    as={Link}
                    color='primary'
                    variant='flat'
                    name='login'
                    onClick={handleClick}
                  >
                    Ingresar
                  </Button>
                </NavbarItem>
                <NavbarItem>
                  <Button
                    as={Link}
                    color='primary'
                    variant='flat'
                    name='register'
                    onClick={handleClick}
                  >
                    Registrarse
                  </Button>
                </NavbarItem>
              </NavbarContent>
            ) : (
              <Dropdown placement='bottom-end'>
                <DropdownTrigger>
                  <Avatar
                    isBordered
                    as='button'
                    className='transition-transform'
                    color='secondary'
                    name='Jason Hughes'
                    size='sm'
                    // CAMBIAR POR IMAGEN DE USUARIO
                    src='https://i.pravatar.cc/150?u=a042581f4e29026704d'
                  />
                </DropdownTrigger>
                <DropdownMenu
                  aria-label='Profile Actions'
                  variant='flat'
                >
                  <DropdownItem
                    key='profile'
                    className='h-14 gap-2 font-bold bg-gray-100'
                  >
                    {`Bienvenido ${loggedUser.name.split(' ')[0]}`}
                  </DropdownItem>
                  <DropdownItem key='settings'>
                    Mis compras
                  </DropdownItem>
                  <DropdownItem key='help_and_feedback'>
                    Ayuda
                  </DropdownItem>
                  <DropdownItem
                    key='logout'
                    color='danger'
                    onClick={handleLogOut}
                  >
                    Cerrar sesión
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            )}
          </NavbarContent>
          <NavbarMenu className='z-50'>
            {menuItems.map((item, index) => (
              <NavbarMenuItem key={`${item}-${index}`}>
                <div
                  className='w-full cursor-pointer'
                  color={
                    index === 2
                      ? 'warning'
                      : index === menuItems.length - 1
                      ? 'danger'
                      : 'foreground'
                  }
                  onClick={() => router.push('/')}
                  size='lg'
                >
                  {item}
                </div>
              </NavbarMenuItem>
            ))}
          </NavbarMenu>
          <ShoppingCart />
        </Navbar>
      )}

      {showLoginMenu && (
        <LoginRegisterMenu
          setShowLoginMenu={setShowLoginMenu}
          signingin={signingin}
          setSigningin={setSigningin}
        />
      )}
    </>
  );
}
