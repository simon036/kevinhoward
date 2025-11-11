import Header from '@/components/sections/header';
import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/footer';

export default function PayYourBill() {
  return (
    <div className="min-h-screen">
      <Header />
      <Navigation />
      <main className="max-w-[1170px] mx-auto px-[15px] py-[30px]">
        <div className="bg-white p-5 rounded-none shadow-none">
          <h1 className="text-3xl font-bold text-foreground mb-6">Pay Your Bill</h1>
          
          <div className="text-[14px] leading-[1.6] text-foreground space-y-6">
            <p>
              We are pleased to offer you the availability to pay your bill by credit card. In order to do this, we have joined the PayPal network. PayPal protects your financial information with industry-leading security and fraud prevention systems. This service offers you the ability to pay your fee using Visa, MasterCard, Discover, or American Express, through PayPal's secure web-based system.
            </p>

            <p>
              Simply click on the banner link below to make your secure payment via PayPal. Enter your payment amount on the form, then continue.
            </p>

            <div className="text-center my-8">
              <a
                href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=DRLTV72ENF2AN"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#0070ba] text-white px-8 py-3 rounded font-medium hover:bg-[#005ea6] transition-colors text-lg"
              >
                Click Here to Pay Your Bill
              </a>
            </div>

            <p>
              Once the transaction is completed, we will both receive an email confirmation. Thank you for your business.
            </p>

            <div className="mt-8 pt-6 border-t border-border">
              <p>
                Click this link for more information about{' '}
                <a
                  href="http://www.paypal.com/cgi-bin/webscr?cmd=xpt/general/PayPalStaySafe-outside"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link hover:text-link-hover hover:underline"
                >
                  PayPal Safety
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}