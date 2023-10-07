import CarouselHome from '@/components/CarouselHome';
import Testimonials from '@/components/Testimonials';
import CreateProduct from '@/components/forms/createProduct/CreateProduct';
import SectionBrand from '@/components/sections/SectionBrand';
import SectionProducts from '@/components/sections/SectionProducts';

export default function Home() {
  return (
    <div className='min-h-screen'>
      {/* <CarouselHome /> */}
      <SectionBrand />
      <SectionProducts />
      <Testimonials />
      {/*  <CreateProduct /> */}
    </div>
  );
}
