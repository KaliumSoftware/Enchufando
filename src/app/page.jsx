import CarouselHome from '@/components/CarouselHome';
import CreateProduct from '@/components/forms/createProduct/CreateProduct';
import SectionBrand from '@/components/sections/SectionBrand';
import SectionProducts from '@/components/sections/SectionProducts';

export default function Home() {
  return (
    <div className='min-h-screen'>
      {/* <CarouselHome /> */}
      <SectionBrand />
      <SectionProducts />
      {/*  <CreateProduct /> */}
    </div>
  );
}
