import dynamic from 'next/dynamic';
import HeroSection from '@/components/home/HeroSection';
import WaveDivider from '@/components/home/WaveDivider';

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
      <WaveDivider from="var(--ivory)" to="var(--ivory)" variant="gentle" flip />
      <AboutPreview />
      
      <WaveDivider from="var(--ivory)" to="var(--pearl)" variant="silk" />
      <FeaturedPrograms />
      
      <WaveDivider from="var(--pearl)" to="#1d120a" variant="sharp" />
      <CoreValues />
      
      <WaveDivider from="#1d120a" to="var(--ivory)" variant="gentle" />
      <Methodology />
      
      <WaveDivider from="var(--ivory)" to="var(--pearl)" variant="silk" />
      <TrainingShowcase />
      
      <Testimonials />
      
      <WaveDivider from="var(--pearl)" to="var(--ivory)" variant="sharp" />
      <FAQ />
      
      <WaveDivider from="var(--ivory)" to="#150c04" variant="gentle" />
      <CTABottom />
    </>
  );
}
