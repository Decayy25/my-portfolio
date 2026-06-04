import Hyperlink from "@/components/atoms/Hyperlink";

interface NavItemProps {
  label: string;
  href: string;
  isScrolled: boolean;
  onClick?: () => void;
}

const NavItem = ({ label, href, isScrolled, onClick }: NavItemProps) => {
  return (
    <li className="group">
      <Hyperlink
        href={href}
        className={`block px-4 py-2 md:py-0 md:text-base transition duration-300 ${
          isScrolled
            ? "text-dark md:text-dark group-hover:text-primary"
            : "text-dark md:text-slate-400 group-hover:text-primary"
        }`}
        onClick={onClick}
      >
        {label}
      </Hyperlink>
    </li>
  );
};

export default NavItem;
