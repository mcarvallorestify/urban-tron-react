import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import MenuSection from '@/components/home/MenuSection';
import AboutSection from '@/components/home/AboutSection';
import EventsPreview from '@/components/home/EventsPreview';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <MenuSection />
      <AboutSection />
      <EventsPreview />
    </Layout>
  );
};

export default Index;
