'use client';
import { Carousel, Typography, Button } from '@material-tailwind/react';
import { useRouter } from 'next/navigation';

const img1 =
  'https://res.cloudinary.com/djbeg0zrq/image/upload/v1699914952/pics/vjlljq7gmjaeo0ueuexm.jpg';
const img2 =
  'https://res.cloudinary.com/djbeg0zrq/image/upload/v1699977153/pics/ahpv1jd4aqzlsfb5eno5.jpg';
const img3 =
  'https://res.cloudinary.com/djbeg0zrq/image/upload/v1699914753/pics/emhhscgm9gtbq0yavoht.jpg';

export function CarouselAbout() {
  const router = useRouter();

  const handleClick = (e) => {
    e.target.value === 'store' ? router.push('/store') : router.push('/');
  };

  return (
    <Carousel
      autoplay={true}
      autoplayDelay={8000}
      loop={true}
      className='h-[90vh] lg:h-[80vh] overflow-hidden rounded-xl'
    >
      <div className='relative h-full w-full'>
        <img
          src={img1}
          alt='img1'
          className='h-full w-full object-cover'
        />
        <div className='absolute inset-0 grid h-full w-full items-center bg-black/75'>
          <div className='w-4/5 pl-14 md:w-2/4 md:pl-20 lg:pl-32'>
            <Typography
              variant='h1'
              color='white'
              className='mb-4 text-3xl md:text-4xl lg:text-5xl'
            >
              Quienes somos
            </Typography>
            <Typography
              variant='lead'
              color='white'
              className='mb-12 opacity-80'
            >
              Somos una empresa nacida en el 2006, dedicada a la fabricación y
              comercialización de productos petroquímicos a través de rigurosos protocolos
              que llevan a una productividad eficiente generando negocios superiores
              dentro de un marco empresarial serio y responsable.
            </Typography>
            <div className='flex gap-2'>
              <Button
                onClick={(e) => handleClick(e)}
                className='bg-white/20 hover:bg-white/40'
                size='lg'
                color='white'
                variant='text'
              >
                Inicio
              </Button>
              <Button
                onClick={(e) => handleClick(e)}
                size='lg'
                color='white'
                value='store'
              >
                Tienda
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className='relative h-full w-full'>
        <img
          src={img2}
          className='h-screen w-full object-cover'
        />
        <div className='absolute inset-0 grid h-full w-full items-center bg-black/75'>
          <div className='w-4/5 pl-14 md:w-2/4 md:pl-20 lg:pl-32'>
            <Typography
              variant='h1'
              color='white'
              className='mb-4 text-3xl md:text-4xl lg:text-5xl'
            >
              Que ofrecemos
            </Typography>
            <Typography
              variant='lead'
              color='white'
              className='mb-12 opacity-80'
            >
              Enfocamos nuestro esfuerzo en ofrecer productos de gran rentabilidad calidad
              y servicio donde no solo nuestra empresa se vea como única beneficiaria sino
              potenciar el crecimiento junto a usted.
            </Typography>
            <div className='flex gap-2'>
              <Button
                onClick={(e) => handleClick(e)}
                className='bg-white/10 hover:bg-white/40'
                size='lg'
                color='white'
                variant='text'
              >
                Inicio
              </Button>
              <Button
                onClick={(e) => handleClick(e)}
                size='lg'
                color='white'
                value='store'
              >
                Tienda
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className='relative h-full w-full'>
        <img
          src={img3}
          className='h-screen w-full object-cover'
        />
        <div className='absolute inset-0 grid h-full w-full items-center bg-black/75'>
          <div className='w-4/5 pl-14 md:w-2/4 md:pl-20 lg:pl-32'>
            <Typography
              variant='h1'
              color='white'
              className='mb-4 text-3xl md:text-4xl lg:text-5xl'
            >
              Nuestro Objetivo
            </Typography>
            <Typography
              variant='lead'
              color='white'
              className='mb-12 opacity-80'
            >
              Por sobre todas estas cosas en Enchufando deseamos exceder las expectativas
              de clientes, proveedores y empleados.
            </Typography>
            <div className='flex gap-2'>
              <Button
                onClick={(e) => handleClick(e)}
                className='bg-white/10 hover:bg-white/40'
                size='lg'
                color='white'
                variant='text'
              >
                Inicio
              </Button>
              <Button
                size='lg'
                color='white'
                onClick={(e) => handleClick(e)}
                value='store'
              >
                Tienda
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
}
