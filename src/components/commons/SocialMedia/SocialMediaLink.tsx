import React from "react";
import { ISocialMediaLink } from "@/@types/Ui";
import Hyperlink from "@/components/atoms/Hyperlink";

const SocialMediaLink: React.FC<ISocialMediaLink> = ({
  item,
  className = "",
}) => {
  const Icon = item.icon;

  return (
    <Hyperlink
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={item.label}
      className={className || item.baseClass}
      style={{
        borderColor: "rgb(203, 213, 225)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = item.hoverBorder;
        if (item.isGradient) {
          e.currentTarget.style.backgroundImage = item.hoverColor;
        } else {
          e.currentTarget.style.backgroundColor = item.hoverColor;
        }
        e.currentTarget.style.color = "white";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgb(203, 213, 225)";
        e.currentTarget.style.backgroundColor = "transparent";
        e.currentTarget.style.backgroundImage = "none";
        e.currentTarget.style.color = "rgb(107, 114, 128)";
      }}
    >
      <Icon />
    </Hyperlink>
  );
};

export default SocialMediaLink;
