import Heading from "@/components/atoms/Heading";

interface SubtitleProps {
  children: React.ReactNode;
  className?: string;
}

const Subtitle = ({ children, className = "" }: SubtitleProps) => {
  return (
    <Heading
      level="h2"
      className={`font-medium text-secondary text-lg mb-5 lg:text-2xl ${className}`}
    >
      {children}
    </Heading>
  );
};

export default Subtitle;
