import { ModernCard, ModernCardHeader, ModernCardTitle, ModernCardContent } from "@/components/ui/modern-card";
import { ModernIcon } from "@/components/ui/modern-icon";
import { Section, SectionHeader, SectionTitle, SectionSubtitle } from "@/components/ui/section";
import Link from "next/link";

const services = [
  {
    icon: "calculator",
    title: "Tax Services",
    description: "Comprehensive tax planning and preparation for individuals and businesses. We work year-round to minimize your tax burden.",
    features: ["Individual Tax Returns", "Business Tax Returns", "Tax Planning", "IRS Representation"]
  },
  {
    icon: "file-text",
    title: "Accounting Services",
    description: "Professional accounting services including bookkeeping, financial statements, and GAAP-compliant reporting.",
    features: ["Bookkeeping", "Financial Statements", "Payroll Processing", "General Ledger"]
  },
  {
    icon: "trending-up",
    title: "Financial Planning",
    description: "Personal Financial Specialist services to help you achieve your long-term financial goals and secure your future.",
    features: ["Retirement Planning", "Investment Analysis", "Estate Planning", "Education Planning"]
  },
  {
    icon: "building",
    title: "Business Services",
    description: "Complete business support from formation to succession planning, helping your business thrive and grow.",
    features: ["Business Formation", "Financial Analysis", "Budget Planning", "Succession Planning"]
  },
  {
    icon: "shield",
    title: "Employment Benefits",
    description: "Expert guidance on employee benefit plans, ERISA compliance, and comprehensive benefit strategies.",
    features: ["Benefit Plan Setup", "ERISA Compliance", "401(k) Administration", "Plan Reviews"]
  },
  {
    icon: "briefcase",
    title: "Specialized Services",
    description: "Additional professional services including computer consulting, estate planning, and investment advisory.",
    features: ["Computer Consulting", "Estate Planning", "Investment Review", "Retirement Planning"]
  }
];

export default function ModernServices() {
  return (
    <Section spacing="xl">
      <SectionHeader>
        <SectionTitle>Our Professional Services</SectionTitle>
        <SectionSubtitle>
          Kevin T. Howard, CPA/PFS, P.A. offers a comprehensive range of accounting, tax, and financial services 
          designed to meet your unique needs and help you achieve your financial objectives.
        </SectionSubtitle>
      </SectionHeader>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ModernCard key={index} variant="elevated" className="h-full hover:scale-105 transition-transform duration-200">
            <ModernCardHeader>
              <div className="flex items-center mb-4">
                <ModernIcon name={service.icon} variant="primary" size="lg" className="mr-4" />
                <ModernCardTitle className="mb-0">{service.title}</ModernCardTitle>
              </div>
            </ModernCardHeader>
            <ModernCardContent>
              <p className="text-slate-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-slate-600">
                    <ModernIcon name="check-circle" size="sm" variant="accent" className="mr-2 w-4 h-4" />
                    {feature}
                  </li>
                ))}
              </ul>
            </ModernCardContent>
          </ModernCard>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <Link href="/services">
          <button className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl">
            View All Services
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </Link>
      </div>
    </Section>
  );
}