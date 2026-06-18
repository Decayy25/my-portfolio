import Image, { StaticImageData } from "next/image";
import Heading from "@/components/atoms/Heading";
import Text from "@/components/atoms/Text";

interface ProjectCardProps {
  title: string;
  description: string;
  image: StaticImageData;
  imageAlt: string;
}

const ProjectCard = ({
  title,
  description,
  image,
  imageAlt,
}: ProjectCardProps) => {
  return (
    <div className="mb-12 p-4 md:w-1/2 w-full">
      <div className="rounded-md shadow-md overflow-hidden">
        <Image src={image} alt={imageAlt} className="w-full" data-aos="fade-up"/>
      </div>
      <Heading level="h3" className="font-semibold text-dark text-xl mt-5 mb-3">
        {title}
      </Heading>
      <Text variant="secondary" className="font-medium text-base">
        {description}
      </Text>
    </div>
  );
};

export default ProjectCard;
