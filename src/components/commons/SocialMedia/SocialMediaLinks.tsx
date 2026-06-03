import React from "react";
import SocialMediaLink from "./SocialMediaLink";
import { socialMediaData } from "./socialMediaData";
import { ISocialMediaItem } from "@/@types/UI";

interface SocialMediaLinksProps {
  items?: ISocialMediaItem[];
  className?: string;
}

const SocialMediaLinks: React.FC<SocialMediaLinksProps> = ({
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
