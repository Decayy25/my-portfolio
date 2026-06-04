import { IProject } from "@/@types/UI"
import ProjectCard from "@/components/molecules/ProjectCard";


interface ProjectGridProps {
  projects: IProject[];
}

const ProjectGrid = ({ projects }: ProjectGridProps) => {
  return (
    <div className="w-full px-4 flex flex-wrap justify-center">
      {projects.map((item) => (
        <ProjectCard
          key={item.id}
          title={item.title}
          description={item.description}
          image={item.img}
          imageAlt={item.name}
        />
      ))}
    </div>
  );
};

export default ProjectGrid;
