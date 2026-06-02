import { Fragment } from "react";
import Image from "next/image";
import img from "../../assets/images/general/profile.png";

const Hero = () => {
  return (
    <Fragment>
      <section id="hero" className="pt-20">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full self-center px-4 lg:w-1/2">
              <h1 className="text-base font-semibold text-primary lg:text-xl">
                Halo semua 👋, saya
                <span className="block font-bold text-dark text-4xl mt-1 lg:text-5xl">
                  Moch. Rizqi Hermawan
                </span>
              </h1>

              <h2 className="font-medium text-slate-500 text-lg mb-5 lg:text-2xl">
                Student | <span className="text-dark">Web Developer</span>
              </h2>
              <p className="font-medium text-slate-400 mb-10 leading-relaxed">
                <span className="text-dark font-semibold">Asynchronous</span>{" "}
                mengajarkan bagaimana simulasi agar status bersama orang lain
                hasilnya{" "}
                <span className="text-dark font-semibold">fulfilled</span> bukan{" "}
                <span className="text-dark font-semibold">rejected </span>
                atau
                <span className="text-dark font-semibold"> pending!</span>
              </p>

              <a
                href="#"
                className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full 
                hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out"
              >
                Hubungi Saya
              </a>
            </div>

            <div className="w-full self-end px-4 lg:w-1/2">
              <div className="relative mt-10 lg:mt-9 lg:ml-0">
                <Image src={img} alt="Profile" className="max-w-full mx-auto" />

                <span className="absolute bottom-0 -z-10 left-1/2 -translate-x-1/2 md:scale-125">
                  <svg
                    width={400}
                    height={400}
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#3B82F6"
                      d="M34.9,-47C42.3,-35.4,43.3,-21.6,49.7,-5.7C56,10.1,67.8,28.1,65,41.7C62.1,55.4,44.5,64.8,27.2,68.4C9.8,72,-7.4,69.8,-19.9,62C-32.3,54.3,-40,40.9,-45.1,28C-50.1,15.1,-52.5,2.7,-51.7,-10.4C-51,-23.6,-47.1,-37.5,-37.9,-48.9C-28.8,-60.2,-14.4,-68.8,-0.3,-68.5C13.8,-68.1,27.5,-58.6,34.9,-47Z"
                      transform="translate(100 100) scale(1.1)"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Hero;
