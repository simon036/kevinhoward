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
    <footer className="w-full bg-footer-background text-footer-foreground">
      <div className="container py-8 text-center">
        <nav className="footer-menu mb-4">
          <ul className="flex flex-wrap items-center justify-center">
            {navItems.map((item, index) => (
              <li
                key={index}
                className={`px-4 ${item.active ? "font-bold" : ""}`}
              >
                <Link
                  href={item.href}
                  className="text-[13px] leading-normal hover:underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <p className="text-[13px] leading-normal">
          Please register in our Guest Book before exiting this site. Thanks.
        </p>
      </div>
    </footer>
  );
};

export default Footer;