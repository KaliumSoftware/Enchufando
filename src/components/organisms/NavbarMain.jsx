'use client';
import { useEffect, useState } from 'react';
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
import { usePathname } from 'next/navigation';
import ShoppingCart from './ShoppingCart';
import LoginRegisterMenu from './LoginRegisterMenu';
export default function NavbarMain() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [logged, setLogged] = useState(false);
  const [showLoginMenu, setShowLoginMenu] = useState(false);
  const [signingin, setSigningin] = useState(false);

  const menuItems = ['Home', 'Productos', 'Contacto'];

  const path = usePathname();

  const handleClick = (event) => {
    const { name } = event.target;

    name === 'login' ? setSigningin(true) : setSigningin(false);

    setShowLoginMenu(true);
  };

  return (
    <>
      {path.pathname !== '/admin' && (
        <Navbar
          className={'w-full'}
          isBordered
          isMenuOpen={isMenuOpen}
          onMenuOpenChange={setIsMenuOpen}
        >
          <NavbarContent>
            <NavbarMenuToggle
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              className='sm:hidden'
            />
            <NavbarBrand>
              <Link href='/'>
                <Image
                  className='w-10 h-10'
                  src={logoBlack}
                  alt='Logo'
                />
              </Link>
            </NavbarBrand>
          </NavbarContent>

          <NavbarContent
            className='hidden sm:flex gap-4'
            justify='center'
          >
            <NavbarItem isActive={path === '/'}>
              <Link
                color='foreground'
                href='/'
              >
                Inicio
              </Link>
            </NavbarItem>
            <NavbarItem isActive={path === '/store'}>
              <Link
                href='/store'
                color='foreground'
              >
                Tienda
              </Link>
            </NavbarItem>
            <NavbarItem isActive={path === '/contact-us'}>
              <Link
                color='foreground'
                href='/contact-us'
              >
                Contacto
              </Link>
            </NavbarItem>
          </NavbarContent>

          <NavbarContent
            as='div'
            justify='end'
          >
            {!logged ? (
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
                    src='https://i.pravatar.cc/150?u=a042581f4e29026704d'
                  />
                </DropdownTrigger>
                <DropdownMenu
                  aria-label='Profile Actions'
                  variant='flat'
                >
                  <DropdownItem
                    key='profile'
                    className='h-14 gap-2'
                  >
                    <p className='font-semibold'>Signed in as</p>
                    <p className='font-semibold'>zoey@example.com</p>
                  </DropdownItem>
                  <DropdownItem key='settings'>
                    My Settings
                  </DropdownItem>
                  <DropdownItem key='team_settings'>
                    Team Settings
                  </DropdownItem>
                  <DropdownItem key='analytics'>
                    Analytics
                  </DropdownItem>
                  <DropdownItem key='system'>System</DropdownItem>
                  <DropdownItem key='configurations'>
                    Configurations
                  </DropdownItem>
                  <DropdownItem key='help_and_feedback'>
                    Help & Feedback
                  </DropdownItem>
                  <DropdownItem
                    key='logout'
                    color='danger'
                  >
                    Log Out
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            )}
          </NavbarContent>
          <NavbarMenu className='z-50'>
            {menuItems.map((item, index) => (
              <NavbarMenuItem key={`${item}-${index}`}>
                <Link
                  className='w-full'
                  color={
                    index === 2
                      ? 'warning'
                      : index === menuItems.length - 1
                      ? 'danger'
                      : 'foreground'
                  }
                  href='#'
                  size='lg'
                >
                  {item}
                </Link>
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
