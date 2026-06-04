import NavItem from "@/components/molecules/NavItem";

interface NavLink {
  label: string;
  href: string;
}

interface NavListProps {
  items: NavLink[];
  isOpen: boolean;
  isScrolled: boolean;
  onItemClick: () => void;
}

const NavList = ({ items, isOpen, isScrolled, onItemClick }: NavListProps) => {
  return (
    <nav
      className={`absolute top-full right-0 w-full md:static md:flex md:w-auto transition-all duration-300 ${
        isOpen ? "block" : "hidden md:flex"
      } bg-white md:bg-transparent`}
    >
      <ul className="flex flex-col md:flex-row md:items-center">
        {items.map((item) => (
          <NavItem
            key={item.label}
            label={item.label}
            href={item.href}
            isScrolled={isScrolled}
            onClick={onItemClick}
          />
        ))}
      </ul>
    </nav>
  );
};

export default NavList;
