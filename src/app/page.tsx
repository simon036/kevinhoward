import Header from '@/components/sections/header';
import Navigation from '@/components/sections/navigation';
import ModernHero from '@/components/sections/modern-hero';
import ModernServices from '@/components/sections/modern-services';
import ModernTestimonials from '@/components/sections/modern-testimonials';
import ModernCTA from '@/components/sections/modern-cta';
import Footer from '@/components/sections/footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Navigation />
      <ModernHero />
      <ModernServices />
      <ModernTestimonials />
      <ModernCTA />
      <Footer />
    </div>
  );
}