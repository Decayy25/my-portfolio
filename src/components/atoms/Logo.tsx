import Hyperlink from "@/components/atoms/Hyperlink";

interface LogoProps {
  text: string;
  href?: string;
  isScrolled?: boolean;
}

const Logo = ({ text, href = "#", isScrolled = false }: LogoProps) => {
  return (
    <div className="px-4">
      <Hyperlink
        href={href}
        className="font-bold text-lg text-primary block py-6"
      >
        {text}
      </Hyperlink>
    </div>
  );
};

export default Logo;
