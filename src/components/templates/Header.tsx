import { Fragment, useState, useEffect, useRef } from "react";
import Logo from "@/components/atoms/Logo";
import HamburgerButton from "@/components/atoms/HamburgerButton";
import NavList from "@/components/molecules/NavList";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  const navItems = [
    { label: "Beranda", href: "#" },
    { label: "Tentang Saya", href: "#about" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Clients", href: "#clients" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
  ];

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Fragment>
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 w-full flex items-center z-10 transition-all duration-300 ${
          isScrolled ? "nav-blur shadow" : "bg-transparent"
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between relative">
            <Logo text="Decayy Ashbatten" href="#" />

            <NavList
              items={navItems}
              isOpen={isOpen}
              isScrolled={isScrolled}
              onItemClick={() => setIsOpen(false)}
            />

            <HamburgerButton
              isOpen={isOpen}
              isScrolled={isScrolled}
              onClick={() => setIsOpen(!isOpen)}
            />
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
