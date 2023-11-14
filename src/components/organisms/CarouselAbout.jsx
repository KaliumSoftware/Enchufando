'use client';
import { Carousel, Typography, Button } from '@material-tailwind/react';

export function CarouselAbout() {
  return (
    <Carousel
      fullWidth
      autoplay='true'
      autoplayDelay={5000}
      loop='true'
      className='h-[90vh] lg:h-[80vh] overflow-hidden rounded-xl'
    >
      <div className='relative h-full w-full'>
        <img className='h-full w-full object-cover' />
        <div className='absolute inset-0 grid h-full w-full items-center bg-black/75'>
          <div className='w-4/5 pl-14 md:w-2/4 md:pl-20 lg:pl-32'>
            <Typography
              variant='h1'
              color='white'
              className='mb-4 text-3xl md:text-4xl lg:text-5xl'
            >
              Quienes sómos
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
                size='lg'
                color='white'
              >
                Tienda
              </Button>
              <Button
                size='lg'
                color='white'
                variant='text'
              >
                Inicio
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className='relative h-full w-full'>
        <img className='h-screen w-full object-cover' />
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
                size='lg'
                color='white'
              >
                Tienda
              </Button>
              <Button
                size='lg'
                color='white'
                variant='text'
              >
                Inicio
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className='relative h-full w-full'>
        <img className='h-screen w-full object-cover' />
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
                size='lg'
                color='white'
              >
                Tienda
              </Button>
              <Button
                size='lg'
                color='white'
                variant='text'
              >
                Inicio
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
}
