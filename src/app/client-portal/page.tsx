import Header from '@/components/sections/header';
import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/footer';
import { ModernCard, ModernCardContent, ModernCardTitle } from '@/components/ui/modern-card';
import { Section, SectionHeader, SectionTitle, SectionSubtitle } from '@/components/ui/section';
import { ModernIcon } from '@/components/ui/modern-icon';
import { Upload, Calendar, LogIn, ExternalLink, Info, HelpCircle, ShieldCheck, MessageCircle, FileText } from 'lucide-react';
import Link from 'next/link';

export default function ClientPortal() {
  return (
    <div className="min-h-screen">
      <Header />
      <Navigation />
      
      <Section spacing="xl">
        <SectionHeader>
          <SectionTitle className="text-blue-900">Client Portal Access</SectionTitle>
          <SectionSubtitle>
            Secure access to your financial documents, tax returns, and account information.
          </SectionSubtitle>
        </SectionHeader>
        
        {/* Main Login Card */}
        <div className="max-w-2xl mx-auto">
          <ModernCard variant="elevated" className="text-center">
            <div className="mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-blue-600 rounded-full mx-auto flex items-center justify-center mb-6">
                <ShieldCheck size={40} className="text-white" />
              </div>
              <ModernCardTitle className="text-blue-900 text-2xl mb-4">
                Welcome to Your Secure Client Portal
              </ModernCardTitle>
              <ModernCardContent>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  Access your tax documents, financial statements, and communicate securely with our team. 
                  You'll be redirected to our secure partner portal to log in with your credentials.
                </p>
                
                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 text-left">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-100 text-blue-800 rounded-lg flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <FileText size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-1">Tax Documents</h4>
                      <p className="text-sm text-slate-600">Access current and prior year tax returns</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-100 text-blue-800 rounded-lg flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <MessageCircle size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-1">Secure Messaging</h4>
                      <p className="text-sm text-slate-600">Communicate directly with your CPA team</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-100 text-blue-800 rounded-lg flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <Upload size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-1">Document Upload</h4>
                      <p className="text-sm text-slate-600">Securely upload receipts and documents</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-100 text-blue-800 rounded-lg flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <Calendar size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-1">Appointment Scheduling</h4>
                      <p className="text-sm text-slate-600">Schedule consultations and meetings</p>
                    </div>
                  </div>
                </div>

                {/* Security Notice */}
                <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg p-4 mb-8 border border-blue-100">
                  <div className="flex items-start">
                    <ModernIcon name="shield" variant="accent" size="md" className="mr-3 mt-1 flex-shrink-0" />
                    <div className="text-left">
                      <h4 className="font-semibold text-slate-800 mb-2">Bank-Level Security</h4>
                      <p className="text-sm text-slate-600">
                        Your data is protected with 256-bit SSL encryption and multi-factor authentication. 
                        This portal is hosted by our trusted technology partner.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Login Button */}
                <div className="space-y-4">
                  <a
                    href="https://login.accountantsoffice.com/login?firmCode=KTHCPAPFSPA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-8 py-4 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <LogIn size={16} className="mr-3" />
                    Access Client Portal
                    <ExternalLink size={16} className="ml-3" />
                  </a>
                  
                  <p className="text-xs text-slate-500">
                    <Info size={12} className="inline mr-1" />
                    You will be redirected to our secure partner login system
                  </p>
                </div>
              </ModernCardContent>
            </div>
          </ModernCard>
        </div>

        {/* Help Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
          <ModernCard variant="elevated">
            <ModernCardTitle className="text-blue-900 flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-100 text-blue-800 rounded-lg flex items-center justify-center mr-3">
                <HelpCircle size={24} />
              </div>
              Need Help Logging In?
            </ModernCardTitle>
            <ModernCardContent>
              <div className="space-y-4 text-sm text-slate-600">
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <p>First-time users: Check your email for login credentials sent by our office</p>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <p>Forgot password: Use the "Forgot Password" link on the login page</p>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <p>Technical issues: Contact our office for immediate assistance</p>
                </div>
              </div>
              <div className="mt-6">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 font-medium rounded-lg hover:bg-blue-200 transition-colors duration-200"
                >
                  Contact Support
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </ModernCardContent>
          </ModernCard>

          <ModernCard variant="elevated">
            <ModernCardTitle className="text-blue-900 flex items-center mb-4">
              <ModernIcon name="phone" variant="primary" size="md" className="mr-3" />
              Contact Information
            </ModernCardTitle>
            <ModernCardContent>
              <div className="space-y-4">
                <div className="flex items-center">
                  <ModernIcon name="phone" size="sm" className="mr-3 text-teal-600" />
                  <div>
                    <p className="font-medium text-slate-800">(443) 668-3636</p>
                    <p className="text-sm text-slate-600">Local Office</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <ModernIcon name="phone" size="sm" className="mr-3 text-teal-600" />
                  <div>
                    <p className="font-medium text-slate-800">(866) 992-6771</p>
                    <p className="text-sm text-slate-600">Toll-Free</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <ModernIcon name="mail" size="sm" className="mr-3 text-teal-600" />
                  <div>
                    <p className="font-medium text-slate-800">kthoward@pobox.com</p>
                    <p className="text-sm text-slate-600">General Inquiries</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <ModernIcon name="clock" size="sm" className="mr-3 text-teal-600 mt-1" />
                  <div>
                    <p className="font-medium text-slate-800">Business Hours</p>
                    <p className="text-sm text-slate-600">Monday - Friday: 9:00 AM - 5:00 PM EST</p>
                  </div>
                </div>
              </div>
            </ModernCardContent>
          </ModernCard>
        </div>
      </Section>
      
      <Footer />
    </div>
  );
}