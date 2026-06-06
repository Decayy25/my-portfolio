import React from "react";
import Heading from "@/components/atoms/Heading";
import Hyperlink from "@/components/atoms/Hyperlink";
import { IFooterSectionProps} from "@/@types/UI";





const FooterSection: React.FC<IFooterSectionProps> = ({ title, items }) => {
  return (
    <div className="w-full px-4 mb-12 md:w-1/3">
      <Heading level="h3" className="font-semibold text-xl text-white mb-5">
        {title}
      </Heading>
      <ul className="text-slate-300">
        {items.map((item) => (
          <li key={item.label}>
            <Hyperlink
              href={item.href}
              className="inline-block text-base hover:text-primary mb-3"
            >
              {item.label}
            </Hyperlink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterSection;
