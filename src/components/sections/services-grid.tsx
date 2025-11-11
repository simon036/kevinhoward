import { BarChart2, ListChecks, CreditCard, Users } from 'lucide-react';
import React, { ElementType } from 'react';

interface Service {
  icon: ElementType;
  title: string;
  description: React.ReactNode;
}

const services: Service[] = [
  {
    icon: BarChart2,
    title: "Check Tax Refund",
    description: (
      <>
        <a href="check-tax-refund.html" className="text-link hover:text-link-hover hover:underline">
          Click here
        </a>
        {' '}to quickly find the status of your tax refund...
      </>
    ),
  },
  {
    icon: ListChecks,
    title: "Tax Center",
    description: (
      <>
        Our convenient Tax Center provides an array of tax information all in one place.{' '}
        <a href="tax-center.html" className="text-link hover:text-link-hover hover:underline">
          Click here
        </a>
        {' '}for more information...
      </>
    ),
  },
  {
    icon: CreditCard,
    title: "Financial Calculators",
    description: (
      <>
        Our convenient Financial Calculators can help you plan for your future.{' '}
        <a href="financial-calculators.html" className="text-link hover:text-link-hover hover:underline">
          Click here
        </a>
        {' '}for more information...
      </>
    ),
  },
  {
    icon: Users,
    title: "Paycheck Calculators",
    description: (
      <>
        <a href="paycheck-calculators.html" className="text-link hover:text-link-hover hover:underline">
          Click here
        </a>
        {' '}to use our handy Paycheck Calculators...
      </>
    ),
  },
];

const ServicesGrid = () => {
  return (
    <div className="my-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-[30px] gap-y-6">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div key={index}>
              <div className="flex items-center gap-2 mb-2">
                <Icon className="w-8 h-8 text-foreground shrink-0" aria-hidden="true" />
                <h3 className="text-lg font-bold text-foreground leading-[1.3]">
                  {service.title}
                </h3>
              </div>
              <p className="text-sm text-foreground leading-[1.6] pl-[40px]">
                {service.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServicesGrid;