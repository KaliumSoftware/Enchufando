'use client';
import { Carousel, IconButton } from '@material-tailwind/react';

export default function CarouselHome() {
  return (
    <>
      <h2 className='text-3xl font-bold text-center mt-10'>Productos destacados</h2>
      <div className='h-[50%] bg-white mb-5 py-16'>
        <Carousel
          autoplay={true}
          autoplayDelay={6000}
          loop={true}
          className='relative top-0 shadow-lg pb-10'
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className='absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2'>
              {new Array(length).fill('').map((_, i) => (
                <span
                  key={i}
                  className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                    activeIndex === i ? 'w-8 bg-white' : 'w-4 bg-white/50'
                  }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}
          prevArrow={({ handlePrev }) => (
            <IconButton
              variant='text'
              color='gray'
              size='lg'
              onClick={handlePrev}
              className='!absolute top-2/4 left-4 -translate-y-2/4'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={2}
                stroke='currentColor'
                className='h-6 w-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18'
                />
              </svg>
            </IconButton>
          )}
          nextArrow={({ handleNext }) => (
            <IconButton
              variant='text'
              color='gray'
              size='lg'
              onClick={handleNext}
              className='!absolute top-2/4 !right-4 -translate-y-2/4'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={2}
                stroke='currentColor'
                className='h-6 w-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3'
                />
              </svg>
            </IconButton>
          )}
        >
          <div className='h-80 md:grid md:grid-cols-2 justify-around bg-white w-screen'>
            <div className='h-80'>
              <img
                src='https://res.cloudinary.com/djbeg0zrq/image/upload/v1697756706/products/w5wklevdee8oligrtv5n.jpg'
                alt='image 1'
                className='h-80 w-full object-contain'
              />
            </div>

            <div className='h-full hidden md:flex flex-col items-center justify-center mx-10 lg:px-32'>
              <h2 className='text-xl font-extrabold sm:text-3xl'>
                Materia prima de calidad
              </h2>
              <p className='my-3 sm:text-lg/relaxed'>
                Polipropileno Roscado (PPN) Los accesorios roscados Enchufando están
                fabricados con polipropileno homopolímero (PP-H), este material brinda a
                los productos alta resistencia cuando son sometidos a altas presiones y
                temperaturas.{' '}
                <span className='hidden lg:inline'>
                  Además, posee un alto grado de elasticidad otorgándole a las roscas la
                  necesaria rigidez para no deformarse ante exigencias mecánicas.
                </span>
              </p>
            </div>
          </div>

          <div className='h-80 md:grid md:grid-cols-2 justify-around bg-white w-screen'>
            <div className='h-80'>
              <img
                src='https://res.cloudinary.com/djbeg0zrq/image/upload/v1697756708/products/sn2w19cc1tak9jywsm6p.jpg'
                alt='image 1'
                className='h-80 w-full object-contain'
              />
            </div>

            <div className='h-80 hidden md:flex flex-col items-center justify-center mx-10 lg:px-32'>
              <h2 className='text-xl font-extrabold sm:text-3xl'>
                Polipropileno Riego (PPN)
              </h2>
              <p className='mt-4 sm:text-lg/relaxed'>
                Los accesorios Riego Enchufando están fabricados con el polietileno de
                baja densidad. La característica de este material, es altamente
                recomendado para su uso en aguadas, bebederos, riego de campos y jardines.{' '}
                <span className='hidden lg:inline'>
                  Su aplicación es aconsejada especialmente para largos tendidos en
                  condiciones climáticas y de instalación exigidas.
                </span>
              </p>
            </div>
          </div>

          <div className='h-80 md:grid md:grid-cols-2 justify-around bg-white w-screen'>
            <div className='h-80'>
              <img
                src='https://res.cloudinary.com/djbeg0zrq/image/upload/v1697756703/products/dktxjwggvbwjsytkjemw.jpg'
                alt='image 1'
                className='h-80 w-full object-contain'
              />
            </div>

            <div className='h-80 hidden md:flex flex-col items-center justify-center mx-10 lg:px-32'>
              <h2 className='text-xl font-extrabold sm:text-3xl'>Marca Krona</h2>
              <p className='mt-4 sm:text-lg/relaxed'>
                Los productos de la Línea Krona son fabricados con materiales de PVC de
                alta calidad y ofrecen una solución confiable y duradera para sus
                necesidades de plomería en proyectos de construcción.
              </p>
            </div>
          </div>
        </Carousel>
      </div>
    </>
  );
}
