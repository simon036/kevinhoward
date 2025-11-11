import Header from '@/components/sections/header';
import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/footer';
import { ModernCard, ModernCardContent, ModernCardTitle } from '@/components/ui/modern-card';
import { Section, SectionHeader, SectionTitle, SectionSubtitle } from '@/components/ui/section';
import { ModernIcon } from '@/components/ui/modern-icon';
import { ModernButton } from '@/components/ui/modern-button';
import Link from 'next/link';

const services = [
  {
    icon: "calculator",
    title: "Accounting Software Selection & Implementation",
    description: "Need help with accounting software selection and implementation? Our firm will help you select the software that's right for you and will teach you how to use it effectively."
  },
  {
    icon: "file-text",
    title: "Tax Services",
    description: "Our firm offers a full range of tax planning and compliance services. We will work with you year-round if necessary in order to minimize your total tax burden. Our firm also prepares all federal, state and local tax returns for individuals and businesses."
  },
  {
    icon: "building",
    title: "Accounting Services",
    description: "Our firm offers a complete range of accounting services, including receivables, payables, and payroll management. We prepare financial statements in accordance with Generally Accepted Accounting Principles (GAAP) for use by banks, investors, and other third parties. Our firm will also prepare custom financial reports for internal, managerial use."
  },
  {
    icon: "shield",
    title: "Employment Benefit Plans",
    description: "We can help you establish comprehensive employee benefit plans and can review your existing plans for ERISA and tax compliance."
  },
  {
    icon: "pie-chart",
    title: "Financial Statements",
    description: "Our firm prepares professional, GAAP-compliant financial statements as well as tailor-made financial analyses that can help business owners and managers eliminate inefficiency and realize a business's full profit potential."
  },
  {
    icon: "trending-up",
    title: "Tax Planning",
    description: "Our firm continuously monitors federal, state, and local tax law changes to allow our clients to minimize current and future tax liabilities. If necessary, we can implement tailor-made due-date tax compliance monitoring systems to prevent costly interest and penalty assessments attributable to late filing. Of course, we offer full tax preparation and filing services."
  },
  {
    icon: "briefcase",
    title: "Business Succession Planning",
    description: "Stop wondering if and how your business will continue without you there. As experts in business succession planning, our firm can suggest many courses of action to provide assurance that your business will enjoy a smooth continuance and that your heirs and business associates will be well protected."
  },
  {
    icon: "calculator",
    title: "Computer Consulting",
    description: "You are ready to move into the computer age, but you have fears of expensive, unsuitable software and systems not working. We understand your fears and we will work with you to setup an efficient, user-friendly computer system. We can explain even the most advanced high-tech concepts in plain English. Whether you want to set up a computerized accounting system or computer network our firm can help."
  },
  {
    icon: "file-text",
    title: "Tax Preparation",
    description: "Our firm offers professional preparation of all federal, state, and local tax returns at competitive, affordable rates."
  },
  {
    icon: "users",
    title: "Payroll Services",
    description: "Our firm offers complete payroll preparation and payroll tax reporting services. We prepare all federal and state returns and offer full magnetic media and electronic filing capabilities."
  },
  {
    icon: "home",
    title: "Estate Planning",
    description: "Our firm offers estate planning services so you can minimize both federal and state estate tax liabilities. We will endeavor to protect your heirs from the unneeded emotional devastation that can be caused by estate tax levies."
  },
  {
    icon: "trending-up",
    title: "Financial Planning",
    description: "Our firm offers a complete array of financial planning services and will work closely with you to help you achieve your financial goals."
  },
  {
    icon: "credit-card",
    title: "Sales Tax Services",
    description: "Our firm prepares all sales tax filings and offers full sales tax audit representation."
  },
  {
    icon: "file-text",
    title: "Estate, Gift and Trust Tax Return Preparation",
    description: "Our firm provides expert preparation of federal and state estate, gift, and trust tax returns."
  },
  {
    icon: "pie-chart",
    title: "Investment Review",
    description: "Our Registered Investment Advisory (RIA) affiliate, Flying Cloud Money Management, LLC, will perform a custom portfolio analysis and review the risks and returns of specific investments including stocks, bonds, REITs, and limited partnerships. We will also determine an optimal asset allocation for you by taking your unique personal and financial goals and resources into account."
  },
  {
    icon: "building",
    title: "Pension & Profit Sharing Plans",
    description: "Would you like help setting up a pension or profit sharing plan? Talk to us!"
  },
  {
    icon: "target",
    title: "Retirement Planning",
    description: "It is never too early to start planning for retirement. If you want to live the same lifestyle--or an even better one--than you do now, you need to start planning for retirement NOW. We can analyze your projected income and expenses and suggest investment funding techniques to help you make sure that your golden years 10, 20, and even 50 years from now live up to your expectations."
  }
];

export default function Services() {
  return (
    <div className="min-h-screen">
      <Header />
      <Navigation />
      
      <Section spacing="xl">
        <SectionHeader>
          <SectionTitle>Professional Services</SectionTitle>
          <SectionSubtitle>
            Comprehensive accounting, tax, and financial planning services designed to meet your unique needs and help you achieve your financial objectives.
          </SectionSubtitle>
        </SectionHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ModernCard key={index} variant="elevated" className="h-full hover:scale-105 transition-all duration-300">
              <div className="flex items-start space-x-4 mb-4">
                <ModernIcon name={service.icon} variant="primary" size="lg" className="flex-shrink-0" />
                <ModernCardTitle className="mb-0 flex-1">{service.title}</ModernCardTitle>
              </div>
              <ModernCardContent>
                <p className="text-slate-600 leading-relaxed">{service.description}</p>
              </ModernCardContent>
            </ModernCard>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to Get Started?</h3>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Contact us today for a complimentary consultation to discuss how we can help you achieve your financial goals.
          </p>
          <Link href="/contact-us">
            <ModernButton size="lg">
              Schedule Your Consultation
            </ModernButton>
          </Link>
        </div>
      </Section>
      
      <Footer />
    </div>
  );
}