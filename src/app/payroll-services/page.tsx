import Header from '@/components/sections/header';
import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/footer';
import { ModernCard, ModernCardContent, ModernCardTitle } from '@/components/ui/modern-card';
import { Section, SectionHeader, SectionTitle, SectionSubtitle } from '@/components/ui/section';
import { ModernIcon } from '@/components/ui/modern-icon';
import Image from 'next/image';

export default function PayrollServices() {
  const keyFeatures = [
    "Simplified, easy to use data entry",
    "Calculations for the federal and all 50 states, plus the District of Columbia and Puerto Rico",
    "Handles virtually all pay types",
    "Multiple payroll schedules",
    "Multiple locations",
    "Filing of all quarterly and annual federal and state payroll forms",
    "Full array of electronic services including direct deposit, tax payments, and electronic filing",
    "Complete year end W-2/1099-M form service",
    "Printing of third-party checks",
    "Tracking and accrual of sick, personal, and vacation time",
    "Full comprehensive set of reports available 24*7",
    "Employee portal access for paystubs and W-2s",
    "401(k) plan administration",
    "Pay-as-you-go workers' compensation",
    "Payroll debit cards"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <Navigation />
      
      <Section spacing="xl">
        <SectionHeader>
          <SectionTitle className="text-blue-900">Payroll Services</SectionTitle>
          <SectionSubtitle>
            Customized payroll solutions designed to meet your unique business needs. 
            Focus on growing your business while we handle your payroll complexities.
          </SectionSubtitle>
        </SectionHeader>
        
        {/* Hero Section with Video */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Your Complete Payroll Solution</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <ModernIcon name="check-circle" variant="success" size="md" className="mr-3 mt-1 flex-shrink-0" />
                <p className="text-slate-600">Process your own payrolls with guidance from our accounting firm</p>
              </div>
              <div className="flex items-start">
                <ModernIcon name="check-circle" variant="success" size="md" className="mr-3 mt-1 flex-shrink-0" />
                <p className="text-slate-600">Run payrolls anytime, anywhere with 24/7 access</p>
              </div>
              <div className="flex items-start">
                <ModernIcon name="check-circle" variant="success" size="md" className="mr-3 mt-1 flex-shrink-0" />
                <p className="text-slate-600">Full-service payroll solution that's competitively priced</p>
              </div>
            </div>
            <div className="mt-6">
              <a
                href="https://www.payrollrelief.com/ResourcesDocs/training/clientdemo/PRAC_Clients.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors duration-200"
              >
                <ModernIcon name="play" size="sm" className="mr-2" />
                Watch 5-Minute Demo
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8 border border-blue-100">
              <Image
                src="https://www.kevinhowardcpa.com/media/payrollser.jpg"
                alt="Payroll service illustration"
                width={400}
                height={300}
                className="w-full max-w-md mx-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Benefits Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <ModernCard variant="elevated" className="hover:scale-105 transition-all duration-300">
            <ModernCardTitle className="text-blue-900 flex items-center mb-4">
              <ModernIcon name="clock" variant="primary" size="md" className="mr-3" />
              24/7 Accessibility
            </ModernCardTitle>
            <ModernCardContent>
              <p className="text-slate-600">
                Our payroll solution is accessible 24x7 on the Internet, ready for you to use anytime, anywhere. 
                Complete flexibility for your business schedule.
              </p>
            </ModernCardContent>
          </ModernCard>

          <ModernCard variant="elevated" className="hover:scale-105 transition-all duration-300">
            <ModernCardTitle className="text-blue-900 flex items-center mb-4">
              <ModernIcon name="settings" variant="primary" size="md" className="mr-3" />
              Personalized Service
            </ModernCardTitle>
            <ModernCardContent>
              <p className="text-slate-600">
                Unlike cookie-cutter approaches, we tailor our services to meet the needs of each individual client. 
                Get personalized payroll service more cost-effectively than ever before.
              </p>
            </ModernCardContent>
          </ModernCard>

          <ModernCard variant="elevated" className="hover:scale-105 transition-all duration-300">
            <ModernCardTitle className="text-blue-900 flex items-center mb-4">
              <ModernIcon name="shield-check" variant="primary" size="md" className="mr-3" />
              Full Compliance
            </ModernCardTitle>
            <ModernCardContent>
              <p className="text-slate-600">
                No more worrying about changing tax laws or complex reporting requirements. 
                We handle all compliance and reporting so you can focus on growing your business.
              </p>
            </ModernCardContent>
          </ModernCard>
        </div>

        {/* Key Features */}
        <ModernCard variant="elevated" className="mb-16">
          <ModernCardTitle className="text-blue-900 flex items-center mb-6">
            <ModernIcon name="star" variant="primary" size="lg" className="mr-3" />
            Comprehensive Payroll Features
          </ModernCardTitle>
          <ModernCardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {keyFeatures.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <ModernIcon name="check-circle" variant="success" size="sm" className="mr-3 mt-1 flex-shrink-0" />
                  <span className="text-slate-600">{feature}</span>
                </div>
              ))}
            </div>
          </ModernCardContent>
        </ModernCard>

        {/* Call to Action */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ModernCard variant="elevated" className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
            <ModernCardTitle className="text-blue-900 flex items-center mb-4">
              <ModernIcon name="message-circle" variant="primary" size="md" className="mr-3" />
              Get Your Custom Quote
            </ModernCardTitle>
            <ModernCardContent>
              <p className="text-slate-600 mb-6">
                Contact us to discuss your payroll requirements. We'll analyze your needs and design 
                a fully customized payroll service just for your business.
              </p>
              <a 
                href="/contact-us"
                className="inline-flex items-center px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors duration-200"
              >
                Request Quote
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </ModernCardContent>
          </ModernCard>

          <ModernCard variant="elevated" className="bg-gradient-to-br from-teal-50 to-teal-100 border-teal-200">
            <ModernCardTitle className="text-blue-900 flex items-center mb-4">
              <ModernIcon name="info" variant="primary" size="md" className="mr-3" />
              Why Choose Our Solution?
            </ModernCardTitle>
            <ModernCardContent>
              <p className="text-slate-600 mb-4">
                Our payroll solution has the freedom and flexibility you need, plus it's accessible 24x7 anytime, anywhere.
              </p>
              <p className="text-slate-600 italic">
                Most importantly, you get the unmatched benefit of our personal service and trusted, 
                professional relationship with you.
              </p>
            </ModernCardContent>
          </ModernCard>
        </div>
      </Section>
      
      <Footer />
    </div>
  );
}