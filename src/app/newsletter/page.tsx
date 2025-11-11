import Header from '@/components/sections/header';
import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/footer';

export default function Newsletter() {
  return (
    <div className="min-h-screen">
      <Header />
      <Navigation />
      <main className="max-w-[1170px] mx-auto px-[15px] py-[30px]">
        <div className="bg-white p-5 rounded-none shadow-none">
          <h1 className="text-3xl font-bold text-foreground mb-6">Newsletters</h1>
          <div className="text-[14px] leading-[1.6] text-foreground">
            <div className="flex items-center justify-center min-h-[200px]">
              <div className="text-center">
                <div className="mb-4">
                  <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                </div>
                <p className="text-muted-foreground">Loading newsletter...</p>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-muted rounded-lg">
              <h3 className="text-lg font-bold text-foreground mb-4">Stay Informed</h3>
              <p className="mb-4">
                Our newsletters provide valuable insights on tax law changes, financial planning tips, 
                and business advice to help you make informed decisions.
              </p>
              <a
                href="/contact-us"
                className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded hover:bg-primary/90 transition-colors"
              >
                Subscribe for Updates
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}