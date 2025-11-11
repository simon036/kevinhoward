import Header from '@/components/sections/header';
import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/footer';

export default function CheckTaxRefund() {
  return (
    <div className="min-h-screen">
      <Header />
      <Navigation />
      <main className="max-w-[1170px] mx-auto px-[15px] py-[30px]">
        <div className="bg-white p-5 rounded-none shadow-none">
          <h1 className="text-3xl font-bold text-foreground mb-6">Check Tax Refund</h1>
        </div>
      </main>
      <Footer />
    </div>
  );
}