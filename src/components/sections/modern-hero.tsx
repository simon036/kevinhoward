import { ModernButton } from "@/components/ui/modern-button";
import { Section } from "@/components/ui/section";
import { ModernIcon } from "@/components/ui/modern-icon";
import Link from "next/link";

export default function ModernHero() {
  return (
    <Section spacing="xl" className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      {/* Professional Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxZTNhOGEiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-40" />
      
      <div className="relative z-10 flex items-center min-h-screen -mt-24 pt-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full max-w-7xl mx-auto">
          {/* Hero Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-medium">
                <ModernIcon name="shield" size="sm" variant="accent" className="w-5 h-5" />
                <span>CPA/PFS Certified Professional</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-black text-blue-900 leading-none">
                Trusted CPA Services for Your 
                <span className="text-teal-600 block">Financial Success</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-slate-600 leading-relaxed max-w-2xl">
                Expert tax preparation, financial planning, and business consulting services in Maryland. 
                18+ years of experience helping clients achieve their financial goals.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact-us">
                <ModernButton size="lg" className="min-w-56 text-lg py-4">
                  Book a Consultation
                </ModernButton>
              </Link>
              <Link href="/services">
                <ModernButton variant="outline" size="lg" className="min-w-48 text-lg py-4">
                  Our Services
                </ModernButton>
              </Link>
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-slate-200">
              <div className="text-center">
                <div className="text-3xl font-black text-blue-900 mb-1">18+</div>
                <div className="text-sm text-slate-600 font-medium">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-blue-900 mb-1">CPA/PFS</div>
                <div className="text-sm text-slate-600 font-medium">Certified Professional</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-blue-900 mb-1">100%</div>
                <div className="text-sm text-slate-600 font-medium">Client Focused</div>
              </div>
            </div>
          </div>
          
          {/* Professional Image/Trust Signals */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-slate-100">
              <div className="text-center space-y-6">
                <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-100 to-teal-100 rounded-full flex items-center justify-center">
                  <img
                    src="https://www.kevinhowardcpa.com/media/kevinpicsm.gif"
                    alt="Kevin Howard, CPA/PFS"
                    className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-900">Kevin T. Howard</h3>
                  <p className="text-teal-600 font-semibold">CPA/PFS, P.A.</p>
                  <p className="text-slate-600 mt-2">University of Baltimore Graduate<br />18+ Years Financial Experience</p>
                </div>
              </div>
            </div>
            
            {/* Certifications */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-100 text-center">
                <ModernIcon name="shield" variant="primary" size="lg" className="mx-auto mb-3" />
                <div className="font-bold text-blue-900">CPA Certified</div>
                <div className="text-sm text-slate-600">Licensed Professional</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-100 text-center">
                <ModernIcon name="trending-up" variant="accent" size="lg" className="mx-auto mb-3" />
                <div className="font-bold text-teal-700">PFS Specialist</div>
                <div className="text-sm text-slate-600">Financial Planning</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}