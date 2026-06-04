interface HamburgerButtonProps {
  isOpen: boolean;
  isScrolled: boolean;
  onClick: () => void;
}

const HamburgerButton = ({
  isOpen,
  isScrolled,
  onClick,
}: HamburgerButtonProps) => {
  return (
    <button
      id="hamburger"
      name="hamburger"
      className="block absolute right-4 md:hidden"
      onClick={onClick}
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
    </button>
  );
};

export default HamburgerButton;
