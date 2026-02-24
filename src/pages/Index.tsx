import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import MobileCarousel from '@/components/home/MobileCarousel';
import MenuSection from '@/components/home/MenuSection';
import FlacoSpecialSection from '@/components/home/Eventosmenu';
import AboutSection from '@/components/home/AboutSection';
import EventsPreview from '@/components/home/EventsPreview';
import Eventosmenu from '@/components/home/Eventosmenu';
import videoPortada from '@/images/video-portada.mp4';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <MobileCarousel />
      <MenuSection />
        <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem 0' }}>
          <video src={videoPortada} autoPlay loop muted style={{ maxWidth: '100%', borderRadius: '16px' }} />
        </div>
      <Eventosmenu />
      <AboutSection />
    </Layout>
  );
};

export default Index;
