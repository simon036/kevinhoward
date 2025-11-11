"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Define types for navigation items
interface NavLink {
  href: string;
  label: string;
}

interface NavItem {
  href: string;
  label: string;
  subItems?: NavLink[];
}

const navItems: NavItem[] = [
  { href: '/', label: 'Home' },
  {
    href: '#',
    label: 'About',
    subItems: [
      { href: '/about-us', label: 'About Us' },
      { href: '/about-flying-cloud', label: 'Flying Cloud' },
      { href: '/partners-profile', label: "Kevin's Profile" },
    ],
  },
  {
    href: '#',
    label: 'Services',
    subItems: [
      { href: '/services', label: 'All Services' },
      { href: '/payroll-services', label: 'Payroll' },
      { href: '/pay-your-bill', label: 'Pay Bill' },
    ],
  },
  {
    href: '#',
    label: 'Resources',
    subItems: [
      { href: '/tax-center', label: 'Tax Center' },
      { href: '/financial-calculators', label: 'Calculators' },
      { href: '/check-tax-refund', label: 'Check Refund' },
      { href: '/newsletter', label: 'Newsletter' },
    ],
  },
  { href: '/contact-us', label: 'Contact' },
];

export default function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleDropdownToggle = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>, label: string) => {
        if (typeof window !== 'undefined' && window.innerWidth < 768) {
            e.preventDefault();
            setOpenDropdown(openDropdown === label ? null : label);
        }
    };

    const isActivePath = (href: string) => {
        if (href === '/') {
            return pathname === '/';
        }
        return pathname === href;
    };

    return (
        <nav className={`sticky top-0 z-50 transition-all duration-300 ${
            isScrolled 
                ? 'bg-blue-800/95 backdrop-blur-sm shadow-lg' 
                : 'bg-blue-800'
        }`}>
            <div className="max-w-7xl mx-auto px-4">
                {/* Desktop Search Bar */}
                <div className="hidden md:flex justify-end py-2 border-b border-blue-700/50">
                    <div className="relative">
                        <input
                            type="search"
                            placeholder="Search resources..."
                            className="w-64 px-4 py-1 pl-10 text-sm bg-blue-700 text-white placeholder-blue-300 border border-blue-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                        />
                        <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                </div>
                {/* Mobile menu button */}
                <div className="md:hidden flex justify-end">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="my-3 p-2 rounded-lg border border-white/20 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                        aria-expanded={isMenuOpen}
                        aria-controls="navbar-menu"
                        aria-label="Toggle navigation"
                    >
                        <div className="space-y-1">
                            <span className={`block w-6 h-0.5 bg-white rounded transition-transform ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                            <span className={`block w-6 h-0.5 bg-white rounded transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                            <span className={`block w-6 h-0.5 bg-white rounded transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                        </div>
                    </button>
                </div>

                {/* Main navigation */}
                <div id="navbar-menu" className={`md:flex md:items-center md:justify-between ${isMenuOpen ? 'block' : 'hidden'}`}>
                    <ul className="flex flex-col md:flex-row">
                        {navItems.map((item) => (
                            <li key={item.label} className="relative group">
                                {item.subItems ? (
                                    <>
                                        <button
                                            onClick={(e) => handleDropdownToggle(e, item.label)}
                                            className="flex items-center w-full md:w-auto px-4 py-3 md:py-4 text-white font-medium hover:text-blue-300 hover:bg-slate-800 md:hover:bg-transparent transition-all duration-200 rounded-lg md:rounded-none"
                                            aria-haspopup="true"
                                            aria-expanded={openDropdown === item.label}
                                        >
                                            {item.label}
                                            <svg className="ml-1 w-4 h-4 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </button>
                                        <ul className={`
                                            pl-4 md:pl-0 bg-slate-800 md:bg-white
                                            md:py-2 md:absolute md:top-full md:left-0 md:min-w-56
                                            md:shadow-xl md:rounded-lg md:border md:border-slate-200
                                            ${openDropdown === item.label ? 'block' : 'hidden'} md:hidden md:group-hover:block
                                            transition-all duration-200 md:opacity-0 md:group-hover:opacity-100
                                        `}>
                                            {item.subItems.map((subItem) => (
                                                <li key={subItem.label}>
                                                    <Link
                                                        href={subItem.href}
                                                        className={`block px-4 py-3 text-sm font-medium transition-colors duration-200 rounded-lg md:rounded-none
                                                            ${isActivePath(subItem.href) 
                                                                ? 'text-blue-300 bg-slate-700 md:text-blue-600 md:bg-blue-50' 
                                                                : 'text-white md:text-slate-700 hover:text-blue-300 md:hover:text-blue-600 hover:bg-slate-700 md:hover:bg-slate-50'
                                                            }`}
                                                    >
                                                        {subItem.label}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </>
                                ) : (
                                    <Link
                                        href={item.href}
                                        className={`block px-4 py-3 md:py-4 font-medium transition-all duration-200 rounded-lg md:rounded-none
                                            ${isActivePath(item.href) 
                                                ? 'text-teal-300 bg-blue-700 md:bg-transparent border-b-2 border-teal-300' 
                                                : 'text-white hover:text-teal-300 hover:bg-blue-700 md:hover:bg-transparent'
                                            }`}
                                    >
                                        {item.label}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                    
                    {/* Login button */}
                    <div className="mt-4 md:mt-0 flex items-center space-x-4">
                        {/* Mobile Search */}
                        <div className="md:hidden">
                            <input
                                type="search"
                                placeholder="Search..."
                                className="w-full px-3 py-2 text-sm bg-blue-700 text-white placeholder-blue-300 border border-blue-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                            />
                        </div>
                        <Link
                            href="/client-portal"
                            className="inline-flex items-center px-4 py-2 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 transition-colors duration-200 shadow-sm hover:shadow-md"
                        >
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                            </svg>
                            Client Login
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}