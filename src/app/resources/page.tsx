import Header from '@/components/sections/header';
import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/footer';
import Link from 'next/link';

export default function Resources() {
  return (
    <div className="min-h-screen">
      <Header />
      <Navigation />
      <main className="max-w-[1170px] mx-auto px-[15px] py-[30px]">
        <div className="bg-white p-5 rounded-none shadow-none">
          <h1 className="text-3xl font-bold text-foreground mb-6">Resources</h1>
          <div className="text-[14px] leading-[1.6] text-foreground">
            <p className="mb-6">
              Our website provides a variety of resources to help you with personal and business financial issues, 
              to keep you informed on current affairs, and to provide a portal to the most valuable sources of 
              information on the Internet.
            </p>

            <ul className="space-y-4 mb-6 list-disc list-inside">
              <li>
                <Link href="/calendar" className="text-link hover:text-link-hover hover:underline font-bold">
                  Calendar
                </Link>
                . View in one place all deadlines for payroll or taxes.
              </li>
              
              <li>
                <Link href="/financial-calculators" className="text-link hover:text-link-hover hover:underline font-bold">
                  Financial Calculators
                </Link>
                . A wide selection of calculators will help you answer many important questions concerning your 
                personal finances - home mortgage, auto financing, loans and credit cards, retirement, savings, 
                investments, and insurance.
              </li>
              
              <li>
                <Link href="/check-tax-refund" className="text-link hover:text-link-hover hover:underline font-bold">
                  Check Tax Refund
                </Link>
                . If you'd like to know when you'll be receiving your federal and state tax refunds, this is the place.
              </li>
              
              <li>
                <Link href="/links" className="text-link hover:text-link-hover hover:underline font-bold">
                  Links
                </Link>
                . We have assembled in one place a wide range of links to some of the most valuable sources of 
                information on the Internet.
              </li>
              
              <li>
                <Link href="/paycheck-calculators" className="text-link hover:text-link-hover hover:underline font-bold">
                  Paycheck Calculator
                </Link>
                . Calculate gross-to-net for salaried and hourly employees and view your pay stub, or calculate net-to-gross.
              </li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}