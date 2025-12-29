import Layout from '@/components/layout/Layout';
import HeroCarousel from '@/components/home/HeroCarousel';
import MenuSection from '@/components/home/MenuSection';
import WelcomeSection from '@/components/home/WelcomeSection';
import AboutSection from '@/components/home/AboutSection';
import EventsPreview from '@/components/home/EventsPreview';

const Index = () => {
  return (
    <Layout>
      <HeroCarousel />
      <MenuSection />
      <WelcomeSection />
      <AboutSection />
      <EventsPreview />
    </Layout>
  );
};

export default Index;
