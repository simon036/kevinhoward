import Header from '@/components/sections/header';
import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/footer';
import { ExternalLink } from 'lucide-react';

export default function FinancialCalculators() {
  const calculatorCategories = [
    {
      title: "Auto",
      link: "https://financialcalculators.accountantsworld.com/default.aspx?calculator=auto",
      questions: [
        "Should I finance or pay cash?",
        "How much will my payments be?",
        "Should I Purchase or Lease?",
        "How Much Should I Put Down?"
      ]
    },
    {
      title: "Loans",
      link: "https://financialcalculators.accountantsworld.com/default.aspx?calculator=loans",
      questions: [
        "What Will it Take to Pay Off My Credit Card?",
        "How Much Does That Loan Really Cost?"
      ]
    },
    {
      title: "Retirement",
      link: "https://financialcalculators.accountantsworld.com/default.aspx?calculator=retirement",
      questions: [
        "How Much do I Have to Withdraw From My Regular IRA?",
        "How Much Can I Contribute?"
      ]
    },
    {
      title: "Savings",
      link: "https://financialcalculators.accountantsworld.com/default.aspx?calculator=savings",
      questions: [
        "How Much Will My Savings Be Worth?",
        "What Will it Take to Save for?"
      ]
    },
    {
      title: "Investments",
      link: "https://financialcalculators.accountantsworld.com/default.aspx?calculator=investments",
      questions: [
        "What is the Yield to Maturity?",
        "What Selling Price Provides Desired Return?"
      ]
    },
    {
      title: "Insurance",
      link: "https://financialcalculators.accountantsworld.com/default.aspx?calculator=insurance",
      questions: [
        "How Much Life Insurance do I Need?"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <Navigation />
      <main className="max-w-[1170px] mx-auto px-[15px] py-[30px]">
        <div className="bg-white p-5 rounded-none shadow-none">
          <h1 className="text-3xl font-bold text-foreground mb-6">Financial Calculators</h1>
          <div className="text-[14px] leading-[1.6] text-foreground">
            <div className="space-y-6">
              {calculatorCategories.map((category, index) => (
                <div key={index} className="border-b border-border pb-4">
                  <div className="flex items-start gap-4">
                    <div className="font-bold text-foreground min-w-[100px]">
                      {category.title}
                    </div>
                    <div className="flex-grow">
                      <a
                        href={category.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-link hover:text-link-hover hover:underline font-medium inline-flex items-center gap-1 mb-2"
                      >
                        Run {category.title} Calculator <ExternalLink className="w-3 h-3" />
                      </a>
                      <ul className="space-y-1">
                        {category.questions.map((question, qIndex) => (
                          <li key={qIndex} className="text-sm">
                            • {question}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-muted rounded-lg">
              <h3 className="text-lg font-bold text-foreground mb-4">Professional Financial Planning</h3>
              <p className="mb-4">
                While these calculators provide helpful estimates, comprehensive financial planning 
                requires professional analysis of your complete financial situation. Our Personal 
                Financial Specialist can help create a complete financial plan tailored to your goals.
              </p>
              <a
                href="/about-flying-cloud"
                className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded hover:bg-primary/90 transition-colors"
              >
                Learn About Our Financial Planning Services
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}