import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import MobileCarousel from '@/components/home/MobileCarousel';
import MenuSection from '@/components/home/MenuSection';
import FlacoSpecialSection from '@/components/home/Eventosmenu';
import AboutSection from '@/components/home/AboutSection';
import EventsPreview from '@/components/home/EventsPreview';
import Eventosmenu from '@/components/home/Eventosmenu';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <MobileCarousel />
      <MenuSection />
      <Eventosmenu />
      <AboutSection />
    </Layout>
  );
};

export default Index;
