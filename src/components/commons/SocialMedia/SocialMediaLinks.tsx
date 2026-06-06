import React from "react";
import SocialMediaLink from "./SocialMediaLink";
import { socialMediaData } from "./socialMediaData";
import { ISocialMediaLinksProps } from "@/@types/UI";



const SocialMediaLinks: React.FC<ISocialMediaLinksProps> = ({
  items = socialMediaData,
  className = "flex items-center gap-2 mt-4",
}) => {
  return (
    <div className={className}>
      {items.map((item) => (
        <SocialMediaLink key={item.id} item={item} />
      ))}
    </div>
  );
};

export default SocialMediaLinks;
