import { Fragment, useState, useEffect, useRef } from "react";
import Hyperlink from "@/components/atoms/Hyperlink";
import Button from "@/components/atoms/Button";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  const navItems = [
    { label: "Beranda", href: "#" },
    { label: "Tentang Saya", href: "#about" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Clients", href: "#client" },
    { label: "Blog", href: "#blog"},
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
            <div className="px-4">
              <Hyperlink
                href="#"
                className="font-bold texl-lg text-primary block py-6"
              >
                Decayy Ashbatten
              </Hyperlink>
            </div>

            <nav
              className={`absolute top-full right-0 w-full md:static md:flex md:w-auto transition-all duration-300 ${
                isOpen ? "block" : "hidden md:flex"
              } ${isScrolled ? "md:bg-transparent" : "md:bg-transparent"} bg-white md:bg-transparent`}
            >
              <ul className="flex flex-col md:flex-row md:items-center">
                {navItems.map((item) => (
                  <li key={item.label} className="group">
                    <Hyperlink
                      href={item.href}
                      className={`block px-4 py-2 md:py-0 md:text-base transition duration-300 ${
                        isScrolled
                          ? "text-dark md:text-dark group-hover:text-primary"
                          : "text-dark md:text-slate-400 group-hover:text-primary"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Hyperlink>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex items-center justify-center px-4 md:hidden">
              <Button
                id="hamburger"
                name="hamburger"
                className="block absolute right-4 md:hidden"
                onClick={() => setIsOpen(!isOpen)}
              >
                <span
                  className={`hamburger-line block w-5 h-0.5 transition-all duration-300 ${
                    isScrolled ? "bg-dark" : "bg-primary"
                  } ${isOpen ? "rotate-45 translate-y-2.5" : ""}`}
                ></span>
                <span
                  className={`hamburger-line block w-5 h-0.5 transition-all duration-300 ${
                    isScrolled ? "bg-dark" : "bg-primary"
                  } ${isOpen ? "scale-0" : ""}`}
                ></span>
                <span
                  className={`hamburger-line block w-5 h-0.5 transition-all duration-300 ${
                    isScrolled ? "bg-dark" : "bg-primary"
                  } ${isOpen ? "-rotate-45 -translate-y-2.5" : ""}`}
                ></span>
              </Button>
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
