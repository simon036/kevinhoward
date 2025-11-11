"use client";

import { useState } from 'react';

// Define types for navigation items
interface NavLink {
  href: string;
  label: string;
}

interface NavItem {
  href: string;
  label: string;
  active?: boolean;
  subItems?: NavLink[];
}

const navItems: NavItem[] = [
  { href: 'home.html', label: 'Home', active: true },
  {
    href: '#',
    label: 'About Us',
    subItems: [
      { href: 'about-us.html', label: 'About Us' },
      { href: 'partners-profile.html', label: "Principal's Profile" },
    ],
  },
  { href: 'about-flying-cloud.html', label: 'About Flying Cloud' },
  {
    href: '#',
    label: 'Services',
    subItems: [
      { href: 'services.html', label: 'Services' },
      { href: 'payroll-services.html', label: 'Payroll Service' },
      { href: 'pay-your-bill.html', label: 'Pay Your Bill' },
    ],
  },
  {
    href: '#',
    label: 'Resources',
    subItems: [
      { href: 'resources.html', label: 'Resources' },
      { href: 'tax-center.html', label: 'Tax Center' },
      { href: 'check-tax-refund.html', label: 'Check Tax Refund' },
      { href: 'financial-calculators.html', label: 'Finance calculators' },
      { href: 'paycheck-calculators.html', label: 'Paycheck Calculators' },
      { href: 'newsletter.html', label: 'Newsletter' },
    ],
  },
  { href: 'contact-us.html', label: 'Contact Us' },
];

const NavCaret = () => (
    <span className="inline-block w-0 h-0 ml-[2px] align-middle border-t-4 border-r-4 border-l-4 border-t-current border-solid border-r-transparent border-l-transparent" />
);


export default function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    const handleDropdownToggle = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, label: string) => {
        if (typeof window !== 'undefined' && window.innerWidth < 768) {
            e.preventDefault();
            setOpenDropdown(openDropdown === label ? null : label);
        }
    };

    return (
        <div className="bg-navbar text-navbar-foreground">
            <div className="max-w-[1140px] mx-auto">
                <div className="md:hidden flex justify-end">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="my-2 mr-[15px] p-[9px_10px] rounded-[4px] border border-white/20 hover:bg-white/10 focus:outline-none"
                        aria-expanded={isMenuOpen}
                        aria-controls="navbar-menu"
                        aria-label="Toggle navigation"
                    >
                        <span className="sr-only">Open main menu</span>
                        <div className="space-y-[4px]">
                            <span className="block w-[22px] h-[2px] bg-white rounded-[1px]"></span>
                            <span className="block w-[22px] h-[2px] bg-white rounded-[1px]"></span>
                            <span className="block w-[22px] h-[2px] bg-white rounded-[1px]"></span>
                        </div>
                    </button>
                </div>

                <div id="navbar-menu" className={`md:flex md:items-center md:justify-between ${isMenuOpen ? 'block' : 'hidden'}`}>
                    <ul className="flex flex-col md:flex-row">
                        {navItems.map((item) => (
                            <li key={item.label} className="relative group">
                                {item.subItems ? (
                                    <>
                                        <a
                                            href={item.href}
                                            onClick={(e) => handleDropdownToggle(e, item.label)}
                                            className="flex items-center w-full md:w-auto px-5 py-[10px] text-[15.4px] hover:bg-navbar-hover transition-colors"
                                            aria-haspopup="true"
                                            aria-expanded={openDropdown === item.label}
                                        >
                                            {item.label}
                                            <NavCaret />
                                        </a>
                                        <ul className={`
                                            pl-4 md:pl-0 bg-navbar-hover md:bg-navbar-dropdown-background
                                            md:py-1 md:mt-px md:absolute md:top-full md:left-0 md:min-w-[160px] 
                                            md:shadow-lg md:z-10 md:rounded-none
                                            ${openDropdown === item.label ? 'block' : 'hidden'} md:hidden md:group-hover:block
                                        `}>
                                            {item.subItems.map((subItem) => (
                                                <li key={subItem.label}>
                                                    <a
                                                        href={subItem.href}
                                                        className="block text-navbar-foreground md:text-navbar-dropdown-foreground px-4 py-2 hover:bg-navbar-hover md:hover:bg-navbar-dropdown-hover text-sm transition-colors"
                                                    >
                                                        {subItem.label}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </>
                                ) : (
                                    <a
                                        href={item.href}
                                        className={`block px-5 py-[10px] text-[15.4px] hover:bg-navbar-hover transition-colors ${item.active ? 'bg-navbar-active' : ''}`}
                                    >
                                        {item.label}
                                    </a>
                                )}
                            </li>
                        ))}
                    </ul>
                    <ul className="flex flex-col md:flex-row">
                        <li>
                            <a
                                href="https://login.accountantsoffice.com/login?firmCode=KTHCPAPFSPA"
                                className="block px-5 py-[10px] text-[15.4px] hover:bg-navbar-hover transition-colors"
                            >
                                Login
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}