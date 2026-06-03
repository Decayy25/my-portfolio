import { Fragment } from "react";
import HeroBio from "../molecules/HeroBio";
import HeroImage from "../molecules/HeroImage";

const Hero = () => {
  return (
    <Fragment>
      <section id="home" className="pt-20">
        <div className="container">
          <div className="flex flex-wrap">
            <HeroBio />
            <HeroImage />
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Hero;