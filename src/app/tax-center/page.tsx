import Header from '@/components/sections/header';
import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/footer';
import { ModernCard, ModernCardContent, ModernCardTitle } from '@/components/ui/modern-card';
import { Section, SectionHeader, SectionTitle, SectionSubtitle } from '@/components/ui/section';
import { ModernIcon } from '@/components/ui/modern-icon';
import Image from 'next/image';

export default function TaxCenter() {
  return (
    <div className="min-h-screen">
      <Header />
      <Navigation />
      
      <Section spacing="xl">
        <SectionHeader>
          <SectionTitle className="text-blue-900">Tax Center</SectionTitle>
          <SectionSubtitle>
            Comprehensive tax tools, calculators, and IRS resources to complement our professional services. 
            Track refunds, calculate taxes, and stay current on the latest tax information.
          </SectionSubtitle>
        </SectionHeader>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Track Your Refund & Due Dates */}
          <ModernCard variant="elevated" className="hover:scale-105 transition-all duration-300">
            <div className="mb-6">
              <Image
                src="https://www.kevinhowardcpa.com/media/aw-shared-gallery-50200894-xs.jpg"
                alt="Tax calculator and forms"
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            <ModernCardTitle className="text-blue-900 flex items-center mb-4">
              <ModernIcon name="clock" variant="primary" size="md" className="mr-3" />
              Track Your Refund & Due Dates
            </ModernCardTitle>
            <ModernCardContent>
              <div className="space-y-3">
                <a
                  href="https://sa2.www4.irs.gov/irfof/lang/en/irfofgetstatus.jsp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-teal-600 hover:text-teal-700 font-medium transition-colors"
                >
                  <ModernIcon name="check-circle" size="sm" className="mr-2 w-4 h-4" />
                  Federal Refund Status
                </a>
                <a
                  href="/check-tax-refund"
                  className="flex items-center text-teal-600 hover:text-teal-700 font-medium transition-colors"
                >
                  <ModernIcon name="check-circle" size="sm" className="mr-2 w-4 h-4" />
                  State Refund Status
                </a>
                <a
                  href="http://www.tax.gov/calendar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-teal-600 hover:text-teal-700 font-medium transition-colors"
                >
                  <ModernIcon name="calendar" size="sm" className="mr-2 w-4 h-4" />
                  Tax Due Dates Calendar
                </a>
              </div>
            </ModernCardContent>
          </ModernCard>

          {/* IRS Calculators */}
          <ModernCard variant="elevated" className="hover:scale-105 transition-all duration-300">
            <div className="mb-6">
              <Image
                src="https://www.kevinhowardcpa.com/media/aw-shared-gallery-60596468-xs.jpg"
                alt="Tax calculations"
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            <ModernCardTitle className="text-blue-900 flex items-center mb-4">
              <ModernIcon name="calculator" variant="primary" size="md" className="mr-3" />
              IRS Tax Calculators
            </ModernCardTitle>
            <ModernCardContent>
              <div className="space-y-3">
                <a
                  href="http://www.irs.gov/individuals/article/0,,id=96196,00.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-teal-600 hover:text-teal-700 font-medium transition-colors"
                >
                  <ModernIcon name="calculator" size="sm" className="mr-2 w-4 h-4" />
                  Withholding Calculator
                </a>
                <a
                  href="http://www.irs.gov/individuals/article/0,,id=152421,00.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-teal-600 hover:text-teal-700 font-medium transition-colors"
                >
                  <ModernIcon name="calculator" size="sm" className="mr-2 w-4 h-4" />
                  Sales Tax Deduction Calculator
                </a>
                <a
                  href="http://www.irs.gov/businesses/small/article/0%2C%2Cid%3D150703%2C00.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-teal-600 hover:text-teal-700 font-medium transition-colors"
                >
                  <ModernIcon name="calculator" size="sm" className="mr-2 w-4 h-4" />
                  Alternative Minimum Tax (AMT)
                </a>
              </div>
            </ModernCardContent>
          </ModernCard>

          {/* IRS Resources */}
          <ModernCard variant="elevated" className="hover:scale-105 transition-all duration-300">
            <div className="mb-6">
              <Image
                src="https://www.kevinhowardcpa.com/media/aw-shared-gallery-53027164-xs.jpg"
                alt="Business resources"
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            <ModernCardTitle className="text-blue-900 flex items-center mb-4">
              <ModernIcon name="file-text" variant="primary" size="md" className="mr-3" />
              IRS Resources
            </ModernCardTitle>
            <ModernCardContent>
              <div className="space-y-3">
                <a
                  href="http://www.irs.gov/Businesses/Small-Businesses-&-Self-Employed/Small-Business-and-Self-Employed-Tax-Center-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start text-teal-600 hover:text-teal-700 font-medium transition-colors text-sm"
                >
                  <ModernIcon name="building" size="sm" className="mr-2 w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Business & Self-Employed Tax Center</span>
                </a>
                <a
                  href="http://www.irs.gov/businesses/small/article/0%2C%2Cid%3D102767%2C00.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start text-teal-600 hover:text-teal-700 font-medium transition-colors text-sm"
                >
                  <ModernIcon name="file-text" size="sm" className="mr-2 w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Online Application - Form SS-4 (EIN)</span>
                </a>
                <a
                  href="http://www.irs.gov/formspubs/index.html?portlet=3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start text-teal-600 hover:text-teal-700 font-medium transition-colors text-sm"
                >
                  <ModernIcon name="file-text" size="sm" className="mr-2 w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>IRS Forms and Publications</span>
                </a>
                <a
                  href="http://www.irs.gov/Businesses/Partnerships"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start text-teal-600 hover:text-teal-700 font-medium transition-colors text-sm"
                >
                  <ModernIcon name="users" size="sm" className="mr-2 w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Partnerships Tax Information</span>
                </a>
                <a
                  href="http://www.irs.gov/Businesses/Corporations"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start text-teal-600 hover:text-teal-700 font-medium transition-colors text-sm"
                >
                  <ModernIcon name="building" size="sm" className="mr-2 w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Corporations Tax Information</span>
                </a>
              </div>
            </ModernCardContent>
          </ModernCard>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8 border border-blue-100">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">Need Professional Tax Help?</h3>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            While these tools are helpful, nothing replaces professional tax guidance. 
            Contact Kevin Howard, CPA/PFS for personalized tax planning and preparation services.
          </p>
          <a 
            href="/contact-us"
            className="inline-flex items-center px-8 py-4 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Schedule Tax Consultation
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </Section>
      
      <Footer />
    </div>
  );
}