import Header from '@/components/sections/header';
import Navigation from '@/components/sections/navigation';
import HeroCarousel from '@/components/sections/hero-carousel';
import Introduction from '@/components/sections/introduction';
import ServicesGrid from '@/components/sections/services-grid';
import Announcement from '@/components/sections/announcement';
import Footer from '@/components/sections/footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-primary-background">
      <Header />
      <Navigation />
      <HeroCarousel />
      <main className="max-w-[1170px] mx-auto px-[15px] py-[30px]">
        <div className="bg-white p-5 rounded-none shadow-none">
          <Introduction />
          <ServicesGrid />
          <Announcement />
        </div>
      </main>
      <Footer />
    </div>
  );
}