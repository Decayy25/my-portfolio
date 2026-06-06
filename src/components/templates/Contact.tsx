import { Fragment } from "react";
import SectionHeader from "../molecules/SectionHeader";
import Form from "next/form";
import FormContact from "@/components/organisms/FormContact";

const Contact = () => {
  return (
    <Fragment>
      <section id="contact" className="pt-36 pb-32">
        <div className="container">
          <div className="w-full px-4">
            <SectionHeader
              label="Contact"
              title="Hubungi Kami"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime magni explicabo qui?"
            />
          </div>
          
          <FormContact />
        </div>
      </section>
    </Fragment>
  );
};

export default Contact;
