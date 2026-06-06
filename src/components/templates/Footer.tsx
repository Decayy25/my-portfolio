import { Fragment } from "react";
import Text from "@/components/atoms/Text";
import Hyperlink from "@/components/atoms/Hyperlink";
import FooterBrand from "@/components/molecules/FooterBrand";
import FooterSection from "@/components/molecules/FooterSection";
import SocialMediaLinks from "@/components/commons/SocialMedia/SocialMediaLinks";
import { footerData } from "@/data/footer";

const Footer = () => {
  const { brand, sections } = footerData;

  return (
    <Fragment>
      <footer className="bg-dark pt-24 pb-12">
        <div className="container">
          <div className="flex flex-wrap">
            <FooterBrand
              name={brand.name}
              description={brand.description}
              contact={brand.contact}
            />

            {sections.map((section) => (
              <FooterSection
                key={section.id}
                title={section.title}
                items={section.items}
              />
            ))}
          </div>

          <div className="w-full pt-10 border-t border-slate-700">
            <SocialMediaLinks className="flex items-center gap-3 justify-center" />
            <div>
              <Text className="text-slate-500 mt-5 text-center text-sm">
                © 2026{" "}
                <Hyperlink href="#" className="font-semibold text-primary">
                  Moch. Rizqi Hermawan.
                </Hyperlink>{" "}
                Created by{" "}
                <Hyperlink
                  href="https://sandhikagalih.id/"
                  target="_blank"
                  className="font-semibold text-teal-600"
                >
                  Sandhika Galih.
                </Hyperlink>
              </Text>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
