import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Phone, Mail } from 'lucide-react';

const Header = () => {
  return (
    <header className="h-auto bg-blue-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        {/* Contact Info Bar */}
        <div className="hidden md:flex justify-between items-center py-2 text-sm border-b border-blue-800">
          <div className="flex items-center space-x-6">
            <a 
              href="tel:+14436683636" 
              className="flex items-center text-blue-200 hover:text-white transition-colors duration-200"
            >
              <Phone size={14} className="mr-2" />
              <span>(443) 668-3636</span>
            </a>
            <a 
              href="tel:+18669926771" 
              className="flex items-center text-blue-200 hover:text-white transition-colors duration-200"
            >
              <Phone size={14} className="mr-2" />
              <span>(866) 992-6771</span>
            </a>
            <a 
              href="mailto:kthoward@pobox.com" 
              className="flex items-center text-blue-200 hover:text-white transition-colors duration-200"
            >
              <Mail size={14} className="mr-2" />
              <span>kthoward@pobox.com</span>
            </a>
          </div>
          <div className="flex items-center space-x-4 text-blue-200">
            <span className="flex items-center">
              <span className="w-2 h-2 bg-teal-400 rounded-full mr-2 animate-pulse"></span>
              Certified CPA/PFS
            </span>
            <span className="border-l border-blue-700 pl-4">IRS Authorized e-file Provider</span>
          </div>
        </div>

        {/* Main Header */}
        <div className="flex flex-wrap items-center justify-between py-6">
          {/* Company Info */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-white text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight mb-2" 
                style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.4)' }}>
              <Link href="/" className="hover:text-teal-200 transition-colors duration-300">
                Kevin T. Howard, CPA/PFS, P.A.
              </Link>
            </h1>
            <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-4">
              <h2 className="text-teal-300 text-base lg:text-lg font-medium mb-2 lg:mb-0">
                Flying Cloud Money Management, LLC
              </h2>
              <div className="hidden lg:flex items-center space-x-3">
                <span className="w-1 h-1 bg-teal-400 rounded-full"></span>
                <span className="text-blue-200 text-sm">Professional Tax & Financial Services</span>
              </div>
            </div>
          </div>

          {/* Credentials & Social */}
          <div className="flex flex-col items-center lg:items-end space-y-4 mt-4 lg:mt-0">
            {/* Professional Badges */}
            <div className="flex items-center space-x-3">
              <div className="bg-teal-600 px-3 py-1 rounded-full">
                <span className="text-white text-xs font-semibold">CPA/PFS</span>
              </div>
              <div className="bg-blue-800 border border-teal-400 px-3 py-1 rounded-full">
                <span className="text-teal-300 text-xs font-semibold">18+ Years</span>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="flex items-center space-x-3">
              <a
                href="https://www.facebook.com/KTHCPAPFSPA"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Facebook"
                className="flex items-center justify-center w-10 h-10 bg-teal-600 hover:bg-teal-500 rounded-full text-white transition-all duration-300 hover:scale-110 shadow-lg group"
              >
                <Facebook size={18} fill="currentColor" strokeWidth={0} className="group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://twitter.com/kthoward"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Twitter"
                className="flex items-center justify-center w-10 h-10 bg-teal-600 hover:bg-teal-500 rounded-full text-white transition-all duration-300 hover:scale-110 shadow-lg group"
              >
                <Twitter size={18} fill="currentColor" strokeWidth={0} className="group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://www.linkedin.com/company/1337"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect on LinkedIn"
                className="flex items-center justify-center w-10 h-10 bg-teal-600 hover:bg-teal-500 rounded-full text-white transition-all duration-300 hover:scale-110 shadow-lg group"
              >
                <Linkedin size={18} fill="currentColor" strokeWidth={0} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Contact Info */}
        <div className="md:hidden pb-4 text-center border-t border-blue-800 pt-4">
          <div className="flex flex-col space-y-2 text-sm">
            <a 
              href="tel:+14436683636" 
              className="flex items-center justify-center text-blue-200 hover:text-white transition-colors"
            >
              <Phone size={14} className="mr-2" />
              (443) 668-3636
            </a>
            <a 
              href="tel:+18669926771" 
              className="flex items-center justify-center text-blue-200 hover:text-white transition-colors"
            >
              <Phone size={14} className="mr-2" />
              (866) 992-6771
            </a>
            <a 
              href="mailto:kthoward@pobox.com" 
              className="flex items-center justify-center text-blue-200 hover:text-white transition-colors"
            >
              <Mail size={14} className="mr-2" />
              kthoward@pobox.com
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;