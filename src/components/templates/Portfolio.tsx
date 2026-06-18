import { Fragment } from "react";
import SectionHeader from "@/components/molecules/SectionHeader";
import ProjectGrid from "@/components/organisms/ProjectGrid";
import centralGpu from "@/assets/images/project/central-gpu.png";
import mathFormula from "@/assets/images/project/math-formula.png";
import smartClk from "@/assets/images/project/company-profile.png";
import elearningSmart from "@/assets/images/project/elearning.png";

const projects = [
  {
    id: 1,
    title: "Central GPU",
    name: "E-Commerce",
    img: centralGpu,
    description: `Platform untuk membeli perangkat keras komputer / Hardware
                dengan spesifikasi tinggi khususnya gamming dan mengejar
                performa tinggi`,
  },
  {
    id: 2,
    title: "Math Formula",
    name: "Calculator",
    img: mathFormula,
    description: `Kalkulator untuk rumus tertentu berbasis website, 
                dengan perhitungan menggunakan bahasa pengrogramman JavaScript
    `,
  },
  {
    id: 3,
    title: "SMarT CLK",
    name: "Website company profile",
    img: smartClk,
    description: `Website company profile berbasis website dinamis dan menggunakan teknologi MongoDB ReactJS ElysiaJS BunJS dan performa yang cepat`,
  },
  {
    id: 4,
    title: "E-Learning SMarT",
    img: elearningSmart,
    name: "E-Learning",
    description:
      "Platform E-Learning berbasis website dengan teknologi MongoDB dan NextJS dan performa yang cepat serta fitur yang lengkap",
  },
];





const Portfolio = () => {
  return (
    <Fragment>
      <section
        id="portfolio"
        className="pt-36 pb-15 bg-slate-100"
        data-aos="fade-up"
      >
        <div className="container">
          <SectionHeader
            label="Portfolio"
            title="Project Terbaru"
            description="Beberapa project terbaru saya antara lain dibawah ini."
          />
          <ProjectGrid projects={projects} />
        </div>
      </section>
    </Fragment>
  );
};

export default Portfolio;
