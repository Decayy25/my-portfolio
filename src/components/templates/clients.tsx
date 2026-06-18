import { Fragment } from "react";
import Hyperlink from "@/components/atoms/Hyperlink";
import Heading from "@/components/atoms/Heading";
import Image from "next/image";
import Text from "@/components/atoms/Text";
import { clients } from "@/data/clients";

const Clients = () => {
  return (
    <Fragment>
      <section id="clients" className="pt-36 pb-32 bg-slate-800">
        <div className="w-full px-4">
          <div className="mx-auto text-center mb-16">
            <Heading
              level="h4"
              className="font-semibold text-lg text-primary mb-2"
            >
              Clients
            </Heading>
            <Heading
              level="h2"
              className="font-bold text-white text-3xl mb-4 sm:text-4xl lg:text-5xl"
            >
              Yang Pernah Berkerjasama
            </Heading>
            <Text
              variant="secondary"
              className="font-medium text-md md:text-lg"
            >
              Perusahaan yang pernah berkerjasama dengan saya
            </Text>
          </div>

          <div className="w-full px-4">
            <div className="flex flex-wrap items-center justify-center">
              {clients.map((items) => (
                <Hyperlink
                  key={items.id}
                  href={items.href}
                  className={`max-w-30 mx-4 py-4 grayscale opacity-60 transition 
                    duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8`}
                >
                  <Image src={items.src} alt={items.alt} className="max-w-40 mx-2" />
                </Hyperlink>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Clients;
