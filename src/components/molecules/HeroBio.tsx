import Heading from "@/components/atoms/Heading";
import Subtitle from "@/components/atoms/Subtitle";
import Description from "@/components/atoms/Description";
import Hyperlink from "@/components/atoms/Hyperlink";

const HeroBio = () => {
  return (
    <div className="w-full self-center px-4 lg:w-1/2">
      <Heading
        level="h1"
        className="text-base font-semibold text-primary lg:text-xl"
      >
        Halo semua 👋, saya
        <span className="block font-bold text-dark text-4xl mt-1 lg:text-5xl">
          Moch Rizqi Hermawan
        </span>
      </Heading>

      <Subtitle>
        Student | <span className="text-dark">Web Developer</span>
      </Subtitle>

      <Description>
        <span className="text-dark font-semibold">Asynchronous</span>{" "}
        mengajarkan bagaimana simulasi agar status bersama orang lain hasilnya{" "}
        <span className="text-dark font-semibold">fulfilled</span> bukan{" "}
        <span className="text-dark font-semibold">rejected</span> atau{" "}
        <span className="text-dark font-semibold">pending!</span>
      </Description>

      <Hyperlink
        title="Hubungi Saya"
        href="#"
        className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out"
      />
    </div>
  );
};

export default HeroBio;
