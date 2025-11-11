import React from 'react';
import { Facebook, Twitter, Linkedin } from 'lucide-react';

const Header = () => {
  return (
    <header className="h-auto md:h-[125px]">
      <div className="max-w-[1170px] mx-auto px-[15px] h-full">
        <div className="flex flex-wrap h-full md:py-0">
          {/* Left Column */}
          <div className="w-full md:w-2/3 flex items-center py-5 md:py-0">
            <div className="w-full text-center md:text-left">
              <h1 className="text-white text-[25.2px] font-bold !m-0" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}>
                <a href="/" className="text-white no-underline hover:text-white hover:no-underline">
                  Kevin T. Howard, CPA/PFS, P.A.
                </a>
              </h1>
              <h2 className="font-normal text-white text-[15.4px] !mt-[5px] !mb-0">
                Flying Cloud Money Management, LLC
              </h2>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full md:w-1/3 flex items-start md:items-center justify-center md:justify-end pb-5 md:pb-0">
            <div className="md:mt-[23px]">
                <ul className="flex gap-[10px]">
                <li>
                  <a
                    href="https://www.facebook.com/KTHCPAPFSPA"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="flex items-center justify-center w-9 h-9 bg-[#4787b7] rounded-full text-white transition-colors duration-300 hover:bg-[#3d6a92]"
                  >
                    <Facebook size={20} fill="currentColor" strokeWidth={0} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/kthoward"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                    className="flex items-center justify-center w-9 h-9 bg-[#4787b7] rounded-full text-white transition-colors duration-300 hover:bg-[#3d6a92]"
                  >
                    <Twitter size={20} fill="currentColor" strokeWidth={0} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/1337"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="flex items-center justify-center w-9 h-9 bg-[#4787b7] rounded-full text-white transition-colors duration-300 hover:bg-[#3d6a92]"
                  >
                    <Linkedin size={20} fill="currentColor" strokeWidth={0} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;