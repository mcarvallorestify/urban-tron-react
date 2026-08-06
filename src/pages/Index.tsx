import Layout from '@/components/layout/Layout';
import HomeStart from '@/components/home/HomeStart';
import MenuSection from '@/components/home/MenuSection';
import AboutSection from '@/components/home/AboutSection';

const Index = () => {
  return (
    <Layout>
      <HomeStart />
      <MenuSection />
      <AboutSection />
    </Layout>
  );
};

export default Index;
