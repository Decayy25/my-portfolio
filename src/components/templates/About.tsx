import { Fragment } from "react";
import { SocialMediaLinks } from "@/components/commons/SocialMedia";
import Heading from "@/components/atoms/Heading"
import Text from "@/components/atoms/Text";

const About = () => {
  return (
    <Fragment>
      <section id="about" className="pt-36 pb-32">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full px-4 mb-10 lg:w-1/2">
              <Heading level="h4" className="font-bold uppercase text-primary text-lg mb-3">
                Tentang saya
              </Heading>
              <Heading level="h2" className="font-bold text-dark text-3xl mb-5 max-w-md lg:text-4xl">
                Status boleh pending hari ini, tapi masa depan wajib fulfilled!
              </Heading>
              <Text className="font-medium text-base text-secondary lg:text-lg">
                Web developer pemula. Memiliki keahlian mendalam pada ekosistem
                React.js, Node.js, Next.js, Express, Elysia, Bun.js, dan
                MongoDB. Berorientasi pada detail dan performa, serta memiliki
                rekam jejak sukses dalam memimpin tim pengembangan.
              </Text>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <h3 className="font-semibold text-dark text-2xl mb-4 lg:text-3xl lg:pt-10">Mari berteman</h3>
              <p className="font-medium text-base text-secondary mb-6 lg:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                temporibus libero soluta amet rerum quos quidem rem aliquid.
              </p>
              <div className="flex items-center">
                <SocialMediaLinks />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default About;
