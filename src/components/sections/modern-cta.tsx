import { ModernButton } from "@/components/ui/modern-button";
import { Section } from "@/components/ui/section";
import { ModernIcon } from "@/components/ui/modern-icon";
import Link from "next/link";

export default function ModernCTA() {
  return (
    <Section variant="dark" spacing="xl" className="bg-gradient-to-r from-blue-900 to-blue-800">
      <div className="text-center max-w-4xl mx-auto">
        <div className="mb-8">
          <ModernIcon 
            name="target" 
            variant="accent" 
            size="xl" 
            className="mx-auto mb-6 bg-teal-100 text-teal-700" 
          />
        </div>
        
        <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
          Take Control of Your Financial Future
        </h2>
        
        <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-3xl mx-auto">
          Schedule a complimentary consultation with Kevin Howard, CPA/PFS, and discover how strategic 
          tax planning and financial guidance can transform your financial success story.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link href="/contact-us">
            <button className="min-w-64 px-8 py-4 bg-teal-500 text-blue-900 font-bold text-lg rounded-lg hover:bg-teal-400 transition-colors duration-200 shadow-lg hover:shadow-xl">
              Book Your Free Consultation
            </button>
          </Link>
          <Link href="/pay-your-bill">
            <button className="min-w-48 px-6 py-4 border-2 border-white text-white font-semibold text-lg rounded-lg hover:bg-white hover:text-blue-900 transition-colors duration-200">
              Pay Your Bill
            </button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-blue-800/50 backdrop-blur-sm rounded-xl p-6 border border-blue-700/50">
            <div className="text-3xl font-black text-teal-300 mb-2">18+</div>
            <div className="text-blue-100 font-medium">Years of Expertise</div>
          </div>
          <div className="bg-blue-800/50 backdrop-blur-sm rounded-xl p-6 border border-blue-700/50">
            <div className="text-3xl font-black text-teal-300 mb-2">CPA/PFS</div>
            <div className="text-blue-100 font-medium">Dual Certification</div>
          </div>
          <div className="bg-blue-800/50 backdrop-blur-sm rounded-xl p-6 border border-blue-700/50">
            <div className="text-3xl font-black text-teal-300 mb-2">100%</div>
            <div className="text-blue-100 font-medium">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </Section>
  );
}