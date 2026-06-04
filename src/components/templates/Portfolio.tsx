import { Fragment } from "react";
import SectionHeader from "@/components/molecules/SectionHeader";
import ProjectGrid from "@/components/organisms/ProjectGrid";
import { projects } from "@/data/projects";

const Portfolio = () => {
  return (
    <Fragment>
      <section id="portfolio" className="pt-36 pb-15 bg-slate-100">
        <div className="container">
          <SectionHeader
            label="Portfolio"
            title="Project Terbaru"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex a accusamus eaque cumque. Excepturi, voluptates."
          />
          <ProjectGrid projects={projects} />
        </div>
      </section>
    </Fragment>
  );
};

export default Portfolio;
