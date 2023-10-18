const Footer = () => {
  return (
    <footer className='bg-gray-100 rounded-lg shadow dark:bg-gray-900'>
      <div className='w-full max-w-screen-2xl mx-auto p-4 md:py-14'>
        <div className='sm:flex sm:items-center sm:justify-between'>
          <a
            href='/'
            className='flex items-center mb-4 sm:mb-0'
          >
            <span className='self-center  text-4xl font-semibold whitespace-nowrap dark:text-white'>
              Enchufando
            </span>
          </a>
          <ul className='flex flex-wrap items-center mb-6 text-lg font-medium  sm:mb-0 dark:text-gray-400'>
            <li>
              <a
                href='#'
                className='mr-4 hover:underline md:mr-6 '
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href='/'
                className='mr-4 hover:underline md:mr-6'
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href='/contact-us'
                className='hover:underline'
              >
                Contactanos
              </a>
            </li>
          </ul>
        </div>
        <hr className='my-6 border-black sm:mx-auto dark:border-gray-700 lg:my-8' />
        <span className='block text-sm  sm:text-center dark:text-gray-400'>
          © 2023{' '}
          <a
            href='/'
            className='hover:underline'
          >
            Kalium Software
          </a>
          . Todos los derechos reservados.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
