import React from "react";
import Heading from "@/components/atoms/Heading";
import Text from "@/components/atoms/Text";

interface FooterBrandProps {
  name: string;
  description: string;
  contact: {
    email: string;
    address: string;
    city: string;
  };
}

const FooterBrand: React.FC<FooterBrandProps> = ({
  name,
  description,
  contact,
}) => {
  return (
    <div className="w-full px-4 mb-12 text-slate-300 font-medium md:w-1/3">
      <Heading level="h2" className="font-bold text-4xl text-white mb-5">
        {name}
      </Heading>
      <Heading level="h3" className="font-bold text-2xl text-white">
        {description}
      </Heading>
      <Text className="text-slate-300">{contact.email}</Text>
      <Text className="text-slate-300">{contact.address}</Text>
      <Text className="text-slate-300">{contact.city}</Text>
    </div>
  );
};

export default FooterBrand;
