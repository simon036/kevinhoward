import Header from '@/components/sections/header';
import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/footer';
import { ExternalLink } from 'lucide-react';

export default function Links() {
  const linkCategories = [
    {
      title: "Government Resources",
      links: [
        {
          name: "Internal Revenue Service (IRS)",
          url: "https://www.irs.gov",
          description: "Official IRS website with tax forms, publications, and guidance"
        },
        {
          name: "Maryland Comptroller of Maryland",
          url: "https://www.marylandtaxes.gov",
          description: "Maryland state tax information and resources"
        },
        {
          name: "U.S. Small Business Administration",
          url: "https://www.sba.gov",
          description: "Resources for small business owners"
        },
        {
          name: "Social Security Administration",
          url: "https://www.ssa.gov",
          description: "Social Security benefits and services"
        }
      ]
    },
    {
      title: "Professional Organizations",
      links: [
        {
          name: "American Institute of CPAs (AICPA)",
          url: "https://www.aicpa.org",
          description: "Leading professional organization for CPAs"
        },
        {
          name: "Maryland Association of CPAs (MACPA)",
          url: "https://www.macpa.org",
          description: "Maryland state CPA society"
        },
        {
          name: "Financial Planning Association",
          url: "https://www.plannersearch.org",
          description: "Professional financial planning resources"
        }
      ]
    },
    {
      title: "Financial Information",
      links: [
        {
          name: "SEC.gov",
          url: "https://www.sec.gov",
          description: "Securities and Exchange Commission investor information"
        },
        {
          name: "FINRA",
          url: "https://www.finra.org",
          description: "Financial Industry Regulatory Authority"
        },
        {
          name: "Federal Reserve",
          url: "https://www.federalreserve.gov",
          description: "Central bank of the United States"
        },
        {
          name: "FDIC",
          url: "https://www.fdic.gov",
          description: "Federal Deposit Insurance Corporation"
        }
      ]
    },
    {
      title: "Business Resources",
      links: [
        {
          name: "SCORE",
          url: "https://www.score.org",
          description: "Free business mentoring and education"
        },
        {
          name: "Maryland Department of Commerce",
          url: "https://commerce.maryland.gov",
          description: "Maryland business resources and information"
        },
        {
          name: "Better Business Bureau",
          url: "https://www.bbb.org",
          description: "Business reliability and consumer trust information"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <Navigation />
      <main className="max-w-[1170px] mx-auto px-[15px] py-[30px]">
        <div className="bg-white p-5 rounded-none shadow-none">
          <h1 className="text-3xl font-bold text-foreground mb-6">Links</h1>
          <div className="text-[14px] leading-[1.6] text-foreground">
            <p className="mb-6">
              We have assembled in one place a wide range of links to some of the most valuable 
              sources of information on the Internet. These resources provide current information 
              on tax laws, business regulations, financial planning, and more.
            </p>

            <div className="space-y-8">
              {linkCategories.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <h3 className="text-lg font-bold text-foreground mb-4">{category.title}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {category.links.map((link, linkIndex) => (
                      <div key={linkIndex} className="border border-border rounded p-4 hover:shadow-sm transition-shadow">
                        <div className="flex items-start justify-between">
                          <div className="flex-grow">
                            <h4 className="font-bold text-foreground mb-1">{link.name}</h4>
                            <p className="text-sm text-muted-foreground mb-2">{link.description}</p>
                          </div>
                          <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-link hover:text-link-hover text-sm ml-3 flex-shrink-0"
                          >
                            Visit <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-muted rounded-lg">
              <h3 className="text-lg font-bold text-foreground mb-4">Disclaimer</h3>
              <p className="text-sm">
                These links are provided for informational purposes only. Kevin T. Howard, CPA/PFS, P.A. 
                does not endorse or guarantee the accuracy of information on external websites. 
                We recommend verifying all information with official sources and consulting with 
                qualified professionals before making financial or business decisions.
              </p>
            </div>

            <div className="mt-6 text-center">
              <p className="mb-4">
                Need help interpreting information from these resources or have questions about 
                how they apply to your situation?
              </p>
              <a
                href="/contact-us"
                className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded hover:bg-primary/90 transition-colors"
              >
                Contact Our Professionals
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}