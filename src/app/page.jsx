import CarouselHome from '@/components/CarouselHome';
import CreateProduct from '@/components/forms/createProduct/CreateProduct';
import SectionBrand from '@/components/sections/SectionBrand';

export default function Home() {
  return (
    <div className='min-h-screen'>
      <CarouselHome />
      <SectionBrand />
      {/*  <CreateProduct /> */}
    </div>
  );
}
