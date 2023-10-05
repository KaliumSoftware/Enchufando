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
import { StickyNavbar } from './ResponsiveNavBar';

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [logged, setLogged] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menuItems = ['Home', 'Productos', 'Contacto'];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      if (scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <Navbar
        className={
          scrolled
            ? ' w-[80%] mx-auto transition-all rounded-xl'
            : 'w-full'
        }
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
            <p className='font-bold text-inherit'>Enchufando</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent
          className='hidden sm:flex gap-4'
          justify='center'
        >
          <NavbarItem isActive>
            <Link
              color='foreground'
              href='#'
            >
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              href='#'
              color='foreground'
            >
              Productos
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              color='foreground'
              href='#'
            >
              Integrations
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
                  href='#'
                  variant='flat'
                >
                  Login
                </Button>
              </NavbarItem>
              <NavbarItem>
                <Button
                  as={Link}
                  color='primary'
                  href='#'
                  variant='flat'
                >
                  Sign Up
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
                <DropdownItem key='analytics'>Analytics</DropdownItem>
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
      </Navbar>
    </>
  );
}
