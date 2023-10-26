'use client';

import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Navbar,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Button
} from '@nextui-org/react';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import ShoppingCart from './ShoppingCart';
import LoginRegisterMenu from './LoginRegisterMenu';
import { setLoggedUser } from '@/redux/slices/userSlice';
import SearchBar from '../atoms/SearchBar';
import { setCart } from '@/redux/slices/cartSlice';
//images
import logoBlack from '@/../assets/logo-black-png-transformed.png';
import userCog from './../../../assets/user-cog.svg';

export default function NavbarMain() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLoginMenu, setShowLoginMenu] = useState(false);
  const [signingin, setSigningin] = useState(false);

  const dispatch = useDispatch();
  const loggedUser = useSelector((state) => state.user.loggedUser);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const userOnLS = JSON.parse(localStorage.getItem('loggedUser'));

    if (!loggedUser.id && userOnLS?.id) {
      dispatch(setLoggedUser(userOnLS));
    }
  }, []);

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
    dispatch(setCart([]));
  };

  return (
    <>
      {pathname.split('/')[1] !== 'admin' && (
        <Navbar
          className='w-full bg-white'
          position={pathname !== '/store' ? 'sticky' : 'static'}
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

          <NavbarContent>
            <SearchBar />
          </NavbarContent>

          <NavbarContent
            as='div'
            justify='end'
          >
            {loggedUser.id && <ShoppingCart />}

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
              <div className='z-0'>
                <Dropdown placement='bottom-end'>
                  <DropdownTrigger>
                    <div className='opacity-70 mx-5 cursor-pointer'>
                      <Image
                        src={userCog}
                        alt='User'
                      />
                    </div>
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
                    <DropdownItem
                      key='purchases'
                      onClick={() => router.push('/purchases')}
                    >
                      Mis compras
                    </DropdownItem>
                    <DropdownItem
                      key='help_and_feedback'
                      onClick={() => router.push('/contact-us')}
                    >
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
              </div>
            )}
          </NavbarContent>
          <NavbarMenu className='z-0'>
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
        </Navbar>
      )}

      {showLoginMenu && (
        <LoginRegisterMenu
          setShowLoginMenu={setShowLoginMenu}
          signingin={signingin}
          setSigningin={setSigningin}
        />
      )}
      <nav
        className={
          pathname !== '/store'
            ? 'fixed z-30 top-15 w-full bg-blue-500 text-white flex justify-center items-center gap-4 py-4'
            : ' bg-blue-500 text-white flex justify-center items-center gap-4 py-4'
        }
      >
        <ul
          className='hidden sm:flex gap-4'
          justify='center'
        >
          <li>
            <div
              onClick={() => router.push('/')}
              className={`cursor-pointer ${
                pathname === '/' && 'font-bold'
              }`}
              color='foreground'
            >
              Inicio
            </div>
          </li>
          <li>
            <div
              onClick={() => router.push('/store')}
              className={`cursor-pointer ${
                pathname === '/store' && 'font-bold'
              }`}
              color='foreground'
            >
              Tienda
            </div>
          </li>
          <li>
            <div
              onClick={() => router.push('/contact-us')}
              className={`cursor-pointer ${
                pathname === '/contact-us' && 'font-bold'
              }`}
              color='foreground'
            >
              Contacto
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
}
