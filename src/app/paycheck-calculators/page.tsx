import Header from '@/components/sections/header';
import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/footer';
import { ExternalLink } from 'lucide-react';

export default function PaycheckCalculators() {
  return (
    <div className="min-h-screen">
      <Header />
      <Navigation />
      <main className="max-w-[1170px] mx-auto px-[15px] py-[30px]">
        <div className="bg-white p-5 rounded-none shadow-none">
          <h1 className="text-3xl font-bold text-foreground mb-6">Paycheck Calculators</h1>
          <div className="text-[14px] leading-[1.6] text-foreground">
            <p className="mb-6">
              Calculate gross-to-net for salaried and hourly employees and view your pay stub, 
              or calculate net-to-gross.
            </p>
            
            <div className="space-y-4">
              <div className="p-4 border border-border rounded">
                <h3 className="font-bold text-foreground mb-2">Payroll Calculator</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Access our professional payroll calculator to determine take-home pay and withholdings.
                </p>
                <a
                  href="https://financialcalculators.accountantsworld.com/default.aspx?calculator=payroll"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link hover:text-link-hover hover:underline font-medium inline-flex items-center gap-1"
                >
                  Run Paycheck Calculator <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            <div className="mt-8 p-6 bg-muted rounded-lg">
              <h3 className="text-lg font-bold text-foreground mb-4">Professional Payroll Services</h3>
              <p className="mb-4">
                Need help with payroll processing for your business? Our professional payroll 
                services ensure accurate calculations, timely payments, and full compliance 
                with tax regulations.
              </p>
              <a
                href="/services"
                className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded hover:bg-primary/90 transition-colors"
              >
                Learn About Payroll Services
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}