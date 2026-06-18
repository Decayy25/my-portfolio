import Image from "next/image"
import React from "react";
import Heading from "@/components/atoms/Heading";
import Text from "@/components/atoms/Text";
import Icon from "@/assets/images/general/icon.png"

interface FooterBrandProps {
  description: string;
  contact: {
    email: string;
    address: string;
    city: string;
  };
}

const FooterBrand: React.FC<FooterBrandProps> = ({
  description,
  contact,
}) => {
  return (
    <div className="w-full px-4 mb-12 text-slate-300 font-medium md:w-1/3">
      <div className="font-bold text-4xl text-white mb-3">
        <Image src={Icon} alt="icon" width={200}/>
      </div>
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
