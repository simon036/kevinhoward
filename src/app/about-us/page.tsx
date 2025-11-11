import Header from '@/components/sections/header';
import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/footer';
import Image from 'next/image';

export default function AboutUs() {
  return (
    <div className="min-h-screen">
      <Header />
      <Navigation />
      <main className="max-w-[1170px] mx-auto px-[15px] py-[30px]">
        <div className="bg-white p-5 rounded-none shadow-none">
          <h1 className="text-3xl font-bold text-foreground mb-6">About Us</h1>
          <div className="text-[14px] leading-[1.6] text-foreground">
            <div className="float-right ml-4 mb-4">
              <Image
                src="https://www.kevinhowardcpa.com/media/kevinpicsm.gif"
                alt="Kevin T. Howard, CPA/PFS"
                width={150}
                height={200}
                className="block"
              />
            </div>
            
            <p className="mb-4">
              <strong>Philosophy:</strong> Honesty, integrity, and personal service are the cornerstones of my practice. 
              As my credentials indicate, I am committed to meeting the highest standards of the accounting profession. 
              I will provide the personal care and attention you need to help you identify your financial goals and map out an appropriate 
              financial plan to meet those goals. I will help you to develop a disciplined approach to investment that will 
              result in lower portfolio risk and the potential for superior returns.
            </p>
            
            <p className="mb-4">
              My accounting firm was established to provide efficient, expert solutions to businesses and individuals. 
              My primary services include accounting, taxation, and business consulting. I also offer a host of specialty 
              services to cater to the unique needs of our clients. I serve a wide range of individuals, corporations, 
              partnerships, and non-profit organizations. I offer the benefits of years of experience gained from previous 
              positions. I am a member in good standing of the AICPA and the MACPA.
            </p>
            
            <p className="mb-4">
              I formed my own accounting firm with a single principle in mind: to provide the highest level of personalized 
              client service possible. Simply put, I care about each and every one of my clients. You will always be served 
              by me, and will never have to worry about how many other accountants have access to your private financial 
              affairs or whether a new staff accountant has the proper experience to give you the right advice. If you would 
              like to develop a relationship with an accountant that will know your name, get to know mine.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}