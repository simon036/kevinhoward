import Header from '@/components/sections/header';
import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/footer';
import { ModernCard, ModernCardContent, ModernCardTitle } from '@/components/ui/modern-card';
import { Section, SectionHeader, SectionTitle, SectionSubtitle } from '@/components/ui/section';
import { ModernIcon } from '@/components/ui/modern-icon';
import Image from 'next/image';

export default function PartnersProfile() {
  const certifications = [
    {
      title: "Certified Public Accountant (CPA)",
      description: "Licensed professional with rigorous examination and continuing education requirements"
    },
    {
      title: "Personal Financial Specialist (PFS)",
      description: "Elite financial planning credential with highest industry standards"
    },
    {
      title: "Certified QuickBooks ProAdvisor",
      description: "Specialized expertise in QuickBooks accounting software"
    },
    {
      title: "Registered Investment Advisor Representative",
      description: "Licensed to provide investment advice and financial planning services"
    },
    {
      title: "Authorized IRS e-file Provider",
      description: "Certified to electronically file tax returns with the IRS"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <Navigation />
      
      <Section spacing="xl">
        <SectionHeader>
          <SectionTitle className="text-blue-900">Principal's Profile</SectionTitle>
          <SectionSubtitle>
            Meet Kevin Howard, CPA/PFS - your trusted financial advisor with 18 years of 
            diversified experience in accounting, tax planning, and financial services.
          </SectionSubtitle>
        </SectionHeader>
        
        {/* Profile Header */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start mb-16">
          <div className="lg:col-span-1">
            <ModernCard variant="elevated" className="text-center">
              <div className="mb-6">
                <div className="relative w-48 h-48 mx-auto mb-4">
                  <div className="w-full h-full bg-gradient-to-br from-blue-100 to-teal-100 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                    <Image
                      src="https://www.kevinhowardcpa.com/media/kevinpicsm.gif"
                      alt="Kevin Howard, CPA/PFS"
                      width={180}
                      height={180}
                      className="rounded-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <ModernCardTitle className="text-blue-900 text-xl mb-2">
                Kevin Howard
              </ModernCardTitle>
              <p className="text-teal-600 font-semibold mb-4">CPA/PFS, Owner</p>
              <div className="flex justify-center">
                <a
                  href="mailto:kthoward@pobox.com"
                  className="inline-flex items-center px-6 py-3 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 transition-colors duration-200"
                >
                  <ModernIcon name="mail" size="sm" className="mr-2" />
                  Contact Kevin
                </a>
              </div>
            </ModernCard>
          </div>
          
          <div className="lg:col-span-2 space-y-8">
            {/* Experience */}
            <ModernCard variant="elevated">
              <ModernCardTitle className="text-blue-900 flex items-center mb-4">
                <ModernIcon name="briefcase" variant="primary" size="md" className="mr-3" />
                Professional Experience
              </ModernCardTitle>
              <ModernCardContent>
                <p className="text-slate-600 leading-relaxed">
                  Kevin T. Howard brings 18 years of diversified financial experience to serve your business and personal financial needs. 
                  His comprehensive background includes investment management, insurance planning, budgeting, financial planning, 
                  income tax preparation and planning, and hands-on accounting experience across various industries.
                </p>
              </ModernCardContent>
            </ModernCard>

            {/* Education */}
            <ModernCard variant="elevated">
              <ModernCardTitle className="text-blue-900 flex items-center mb-4">
                <ModernIcon name="graduation-cap" variant="primary" size="md" className="mr-3" />
                Education & Technical Expertise
              </ModernCardTitle>
              <ModernCardContent>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <ModernIcon name="check-circle" variant="success" size="sm" className="mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-slate-800 mb-1">University of Baltimore</p>
                      <p className="text-slate-600">B.S. in Business Administration with concentration in Accounting</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <ModernIcon name="check-circle" variant="success" size="sm" className="mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-slate-800 mb-1">Technology Proficiency</p>
                      <p className="text-slate-600">Extensive experience with spreadsheet, database, and word processing programs, plus specialized accounting and financial applications</p>
                    </div>
                  </div>
                </div>
              </ModernCardContent>
            </ModernCard>
          </div>
        </div>

        {/* Certifications */}
        <ModernCard variant="elevated" className="mb-16">
          <ModernCardTitle className="text-blue-900 flex items-center mb-6">
            <ModernIcon name="award" variant="primary" size="lg" className="mr-3" />
            Professional Licenses & Certifications
          </ModernCardTitle>
          <ModernCardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-start p-4 bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg border border-blue-100">
                  <ModernIcon name="shield-check" variant="success" size="md" className="mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-2">{cert.title}</h4>
                    <p className="text-slate-600 text-sm">{cert.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-gradient-to-r from-blue-100 to-teal-100 rounded-lg border border-blue-200">
              <div className="flex items-start">
                <ModernIcon name="star" variant="primary" size="md" className="mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-blue-900 mb-3">The CPA/PFS Distinction</h4>
                  <p className="text-slate-700 leading-relaxed">
                    As a Certified Public Accountant/Personal Financial Specialist (CPA/PFS), Kevin is committed to the highest standards 
                    of financial planning practice. No other financial planning credential has such rigorous standards. The CPA/PFS requires 
                    a comprehensive examination, multiple professional references, ongoing continuing education, and is the only financial 
                    planning credential that requires a professional license to practice.
                  </p>
                </div>
              </div>
            </div>
          </ModernCardContent>
        </ModernCard>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8 border border-blue-100">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">Ready to Work with Kevin?</h3>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            Experience the difference that professional expertise and personalized service can make for your financial success. 
            Contact Kevin Howard, CPA/PFS today to discuss your accounting, tax, and financial planning needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact-us"
              className="inline-flex items-center px-8 py-4 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Schedule Consultation
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <a 
              href="mailto:kthoward@pobox.com"
              className="inline-flex items-center px-8 py-4 bg-white text-teal-600 font-semibold rounded-lg border-2 border-teal-600 hover:bg-teal-50 transition-colors duration-200"
            >
              <ModernIcon name="mail" size="sm" className="mr-2" />
              Email Kevin
            </a>
          </div>
        </div>
      </Section>
      
      <Footer />
    </div>
  );
}