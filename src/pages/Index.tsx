
import Hero from '../components/Hero';
import BeatShowcase from '../components/BeatShowcase';
import CreatorSection from '../components/CreatorSection';
import PricingSection from '@/components/PricingSection';
import FAQSection from '@/components/FAQSection';
import PlatformShowcase from '@/components/PlatformShowcase';

const Index = () => {
  return (
    <>
      <Hero />
      <BeatShowcase />
      <PlatformShowcase />
      <CreatorSection />
      <PricingSection />
      <FAQSection />
    </>
  );
};

export default Index;
