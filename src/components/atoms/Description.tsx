import Text from "@/components/atoms/Text";

interface DescriptionProps {
  children: React.ReactNode;
  className?: string;
}

const Description = ({ children, className = "" }: DescriptionProps) => {
  return (
    <Text
      variant="secondary"
      className={`font-medium text-secondary mb-10 leading-relaxed ${className}`}
    >
      {children}
    </Text>
  );
};

export default Description;
