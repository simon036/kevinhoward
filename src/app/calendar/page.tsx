import Header from '@/components/sections/header';
import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/footer';

export default function Calendar() {
  return (
    <div className="min-h-screen">
      <Header />
      <Navigation />
      <main className="max-w-[1170px] mx-auto px-[15px] py-[30px]">
        <div className="bg-white p-5 rounded-none shadow-none">
          <h1 className="text-3xl font-bold text-foreground mb-6">Calendar</h1>
          <div className="text-[14px] leading-[1.6] text-foreground">
            <p className="mb-6">
              View in one place all deadlines for payroll or taxes. Stay organized and never miss 
              an important filing or payment deadline.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold text-foreground mb-4">Tax Deadlines</h3>
                <div className="space-y-4">
                  <div className="border border-border rounded p-4">
                    <h4 className="font-bold text-foreground mb-2">Individual Tax Returns</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• <strong>April 15:</strong> Individual tax returns due</li>
                      <li>• <strong>October 15:</strong> Extended returns due</li>
                      <li>• <strong>January 31:</strong> W-2s and 1099s due to recipients</li>
                    </ul>
                  </div>
                  
                  <div className="border border-border rounded p-4">
                    <h4 className="font-bold text-foreground mb-2">Business Tax Returns</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• <strong>March 15:</strong> S-Corp and Partnership returns</li>
                      <li>• <strong>April 15:</strong> C-Corp returns</li>
                      <li>• <strong>May 15:</strong> Nonprofit returns (Form 990)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-foreground mb-4">Payroll Deadlines</h3>
                <div className="space-y-4">
                  <div className="border border-border rounded p-4">
                    <h4 className="font-bold text-foreground mb-2">Quarterly Payments</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• <strong>January 15:</strong> Q4 previous year</li>
                      <li>• <strong>April 15:</strong> Q1 current year</li>
                      <li>• <strong>June 15:</strong> Q2 current year</li>
                      <li>• <strong>September 15:</strong> Q3 current year</li>
                    </ul>
                  </div>
                  
                  <div className="border border-border rounded p-4">
                    <h4 className="font-bold text-foreground mb-2">Monthly Payroll</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• <strong>15th of month:</strong> Federal payroll taxes</li>
                      <li>• <strong>Last day of month:</strong> State payroll taxes</li>
                      <li>• <strong>End of month:</strong> Payroll reports</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-muted rounded-lg">
              <h3 className="text-lg font-bold text-foreground mb-4">Stay on Track</h3>
              <p className="mb-4">
                Missing deadlines can result in penalties and interest charges. Let us help you stay 
                organized with our comprehensive tax and payroll services.
              </p>
              <a
                href="/contact-us"
                className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded hover:bg-primary/90 transition-colors"
              >
                Contact Us for Help
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}