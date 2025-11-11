import Link from "next/link";

interface NavItem {
  href: string;
  label: string;
  active?: boolean;
}

const navItems: NavItem[] = [
  { href: "/", label: "Home", active: true },
  { href: "/about-us", label: "About Us" },
  { href: "/about-flying-cloud", label: "About Flying Cloud" },
  { href: "/services", label: "Services" },
  { href: "/resources", label: "Resources" },
  { href: "/contact-us", label: "Contact Us" },
];

const Footer = () => {
  return (
    <footer className="w-full bg-blue-900 text-white border-t border-blue-800">
      <div className="container py-8 text-center">
        <nav className="footer-menu mb-6">
          <ul className="flex flex-wrap items-center justify-center gap-1">
            {navItems.map((item, index) => (
              <li key={index} className="px-3 py-1">
                <Link
                  href={item.href}
                  className={`text-sm font-medium transition-all duration-200 hover:text-teal-300 hover:underline hover:underline-offset-4 ${
                    item.active 
                      ? "text-teal-300 font-semibold" 
                      : "text-white/90"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="border-t border-blue-800 pt-4">
          <p className="text-sm text-white/90 leading-relaxed">
            Please register in our{" "}
            <Link 
              href="/guest-book" 
              className="text-teal-300 hover:text-teal-200 hover:underline hover:underline-offset-4 font-medium transition-colors duration-200"
            >
              Guest Book
            </Link>{" "}
            before exiting this site. Thanks.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;