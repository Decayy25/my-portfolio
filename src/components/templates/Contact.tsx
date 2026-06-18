import { Fragment } from "react";
import SectionHeader from "../molecules/SectionHeader";
import Form from "next/form";
import FormContact from "@/components/organisms/FormContact";

const Contact = () => {
  return (
    <Fragment>
      <section id="contact" className="pt-36 pb-32" data-aos="fade-up">
        <div className="container">
          <div className="w-full px-4">
            <SectionHeader
              label="Contact"
              title="Hubungi Saya"
              description="Ada pertanyaan, saran, atau ingin berkolaborasi? Mari terhubung! Anda bisa mengirimkan email atau langsung mengirim pesan ke media sosial saya."
            />
          </div>

          <FormContact />
        </div>
      </section>
    </Fragment>
  );
};

export default Contact;
