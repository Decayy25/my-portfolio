import Image from "next/image";
import BlobSvg from "../atoms/BlobSvg";
import img from "../../assets/images/general/profile.png";

const HeroImage = () => {
  return (
    <div className="w-full self-end px-4 lg:w-1/2">
      <div className="relative mt-10 lg:mt-9 lg:ml-0 overflow-hidden">
        <Image src={img} alt="Profile" className="max-w-full mx-auto" />
        <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-linear-to-t from-white to-transparent pointer-events-none " />
        <span className="absolute bottom-0 -z-10 left-1/2 -translate-x-1/2 md:scale-125">
          <BlobSvg />
        </span>
      </div>
    </div>
  );
};

export default HeroImage;