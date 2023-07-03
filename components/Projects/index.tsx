import Image from "next/image";
import Link from "next/link";
import ProjectCard from "./ProjectCard";

type ProjectsProps = {
  projects: {
    image: string;
    title: string;
    tags: string[];
    link: string;
    repository: string;
  };
};

const Projects: React.FC = ({ projects }: ProjectsProps) => {
  return (
    <>
      <section className="desktop:py-[140px] tablet:py-[100px] py-[80px]">
        <div className="container mx-auto">
          <div className="flex justify-between items-center desktop:mb-[80px] tablet:mb-[60px] mb-[40px]">
            <h2 className="font-bold text-white desktop:tracking-[-2.5px] desktop:leading-[88px] desktop:text-[88px] tablet:text-[72px] tablet:leading-[72px] tablet:tracking-[-2.04545px] text-[40px] leading-[40px] tracking-[-1.13636px]">
              Projects
            </h2>
            <button className="uppercase underline underline-offset-[20px] decoration-2 decoration-primary-neon text-white font-bold text-[16px] leading-[26px] tracking-[2.28571px] ">
              Contact me
            </button>
          </div>
          <div className="grid tablet:grid-cols-2 desktop:gap-x-[30px] desktop:gap-y-[69px] tablet:gap-x-[22px] tablet:gap-y-[60px] gap-y-[40px]">
            {projects.map(
              (project: ProjectsProps["projects"], index: number) => {
                return (
                  <ProjectCard
                    key={index}
                    image={project.image}
                    title={project.title}
                    tags={project.tags}
                    link={project.link}
                    repository={project.repository}
                  />
                );
              }
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
