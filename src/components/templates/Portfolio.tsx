import { Fragment } from "react";
import SectionHeader from "@/components/molecules/SectionHeader";
import ProjectGrid from "@/components/organisms/ProjectGrid";
import { projects } from "@/data/projects";

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
