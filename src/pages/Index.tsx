import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import MobileCarousel from '@/components/home/MobileCarousel';
import MenuSection from '@/components/home/MenuSection';
import AboutSection from '@/components/home/AboutSection';
import Eventosmenu from '@/components/home/Eventosmenu';
import EventoDestacadoSection from '@/components/home/EventoDestacadoSection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <MobileCarousel />
      <EventoDestacadoSection />
      <MenuSection />
      <Eventosmenu />
      <AboutSection />
    </Layout>
  );
};

export default Index;
