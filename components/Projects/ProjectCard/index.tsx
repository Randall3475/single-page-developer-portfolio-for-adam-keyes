import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  image: string;
  title: string;
  tags: string[];
  link: string;
  repository: string;
};

const ProjectCard: React.FC = ({
  image,
  title,
  tags,
  link,
  repository,
}: ProjectCardProps) => {
  return (
    <>
      <article>
        <div className="relative group desktop:cursor-pointer desktop:hover:after:block after:hidden after:absolute after:h-full after:w-full after:top-0 after:bg-black after:opacity-75">
          <Image
            className="w-full"
            src={image}
            width={540}
            height={400}
            alt="Design portfolio project"
          />
          <div className="flex-col items-center justify-center gap-y-14 hidden desktop:group-hover:flex absolute h-full w-full top-0 z-50 text-white font-bold text-[16px] leading-[26px]">
            <Link
              className="underline leading-relaxed tracking-widest uppercase underline-offset-[10px] decoration-2 decoration-primary-neon"
              href={link}
            >
              View project
            </Link>
            <Link
              className="underline leading-relaxed tracking-widest uppercase underline-offset-[10px] decoration-2 decoration-primary-neon"
              href={repository}
            >
              View code
            </Link>
          </div>
        </div>
        <h3 className="uppercase text-white text-[24px] leading-[32px] font-bold mt-[20px] mb-[7px]">
          {title}
        </h3>
        <div className="text-misc-white flex gap-[18px]">
          {tags.map((tag, index) => {
            return (
              <span className="uppercase" key={index}>
                {tag}
              </span>
            );
          })}
        </div>
        <div className="desktop:hidden flex text-white uppercase font-bold gap-x-[30px] mt-[20px] text-[16px] leading-[26px]">
          <Link
            className="underline underline-offset-[10px] decoration-2 decoration-primary-neon"
            href={title}
          >
            View project
          </Link>
          <Link
            className="underline underline-offset-[10px] decoration-2 decoration-primary-neon"
            href={repository}
          >
            View code
          </Link>
        </div>
      </article>
    </>
  );
};

export default ProjectCard;
