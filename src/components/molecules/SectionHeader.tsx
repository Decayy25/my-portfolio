import Heading from "@/components/atoms/Heading";
import Text from "@/components/atoms/Text";

interface SectionHeaderProps {
  label: string;
  title: string;
  description: string;
}

const SectionHeader = ({ label, title, description }: SectionHeaderProps) => {
  return (
    <div className="w-full px-4">
      <div className="max-w-xl mx-auto text-center mb-16">
        <Heading level="h4" className="font-semibold text-lg text-primary mb-2">
          {label}
        </Heading>
        <Heading level="h2" className="font-bold text-dark text-3xl mb-4">
          {title}
        </Heading>
        <Text
          variant="secondary"
          className="font-medium text-md sm:text-4xl lg:text-5xl md:text-lg"
        >
          {description}
        </Text>
      </div>
    </div>
  );
};

export default SectionHeader;
