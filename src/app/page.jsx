import CarouselHome from '@/components/organisms/CarouselHome';
import Testimonials from '@/components/organisms/Testimonials';
import SectionBrand from '@/components/organisms/SectionBrand';
import SectionProducts from '@/components/organisms/SectionProducts';

export default function Home() {
  return (
    <div className='min-h-screen'>
      {/* <CarouselHome /> */}
      <SectionBrand />
      <SectionProducts />
      <Testimonials />
    </div>
  );
}
