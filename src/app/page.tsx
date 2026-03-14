import dynamic from 'next/dynamic';
import HeroSection from '@/components/home/HeroSection';

const StatsSection = dynamic(() => import('@/components/home/StatsSection'), { ssr: true });
const AboutPreview = dynamic(() => import('@/components/home/AboutPreview'), { ssr: true });
const FeaturedPrograms = dynamic(() => import('@/components/home/FeaturedPrograms'), { ssr: true });
const CoreValues = dynamic(() => import('@/components/home/CoreValues'), { ssr: true });
const Methodology = dynamic(() => import('@/components/home/Methodology'), { ssr: true });
const TrainingShowcase = dynamic(() => import('@/components/home/TrainingShowcase'), { ssr: true });
const Testimonials = dynamic(() => import('@/components/home/Testimonials'), { ssr: true });
const FAQ = dynamic(() => import('@/components/home/FAQ'), { ssr: true });
const CTABottom = dynamic(() => import('@/components/home/CTABottom'), { ssr: true });

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <AboutPreview />
      
      <FeaturedPrograms />
      
      <CoreValues />
      
      <Methodology />
      
      <TrainingShowcase />
      
      <Testimonials />
      
      <FAQ />
      
      <CTABottom />
    </>
  );
}
