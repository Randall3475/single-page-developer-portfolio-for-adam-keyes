import Image from "next/image";
import Link from "next/link";

const Projects = () => {
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
            <article>
              <div className="relative group desktop:cursor-pointer desktop:hover:after:block after:hidden after:absolute after:h-full after:w-full after:top-0 after:bg-black after:opacity-75">
                <Image
                  src="/images/thumbnail-project-1-large.webp"
                  width={540}
                  height={400}
                  alt="Design portfolio project"
                />
                <div className="flex-col items-center justify-center gap-y-14 hidden desktop:group-hover:flex absolute h-full w-full top-0 z-50 text-white font-bold text-[16px] leading-[26px]">
                  <Link
                    className="underline underline-offset-[10px] decoration-2 decoration-primary-neon"
                    href="/"
                  >
                    View projetct
                  </Link>
                  <Link
                    className="underline underline-offset-[10px] decoration-2 decoration-primary-neon"
                    href="/"
                  >
                    View code
                  </Link>
                </div>
              </div>
              <h3 className="uppercase text-white text-[24px] leading-[32px] font-bold mt-[20px] mb-[7px]">
                DESIGN PORTFOLIO
              </h3>
              <div className="text-misc-white flex gap-[18px]">
                <span>HTML</span>
                <span>CSS</span>
              </div>
              <div className="desktop:hidden flex text-white uppercase font-bold gap-x-[30px] mt-[20px] text-[16px] leading-[26px]">
                <Link
                  className="underline underline-offset-[10px] decoration-2 decoration-primary-neon"
                  href="/"
                >
                  View project
                </Link>
                <Link
                  className="underline underline-offset-[10px] decoration-2 decoration-primary-neon"
                  href="/"
                >
                  View code
                </Link>
              </div>
            </article>
            <article>
              <Image
                src="/images/thumbnail-project-2-large.webp"
                width={540}
                height={400}
                alt="Design portfolio project"
              />
              <h3 className="uppercase text-white text-[24px] leading-[32px] font-bold mt-[20px] mb-[7px]">
                E-LEARNING LANDING PAGE
              </h3>
              <div className="text-misc-white flex gap-[18px]">
                <span>HTML</span>
                <span>CSS</span>
              </div>
            </article>
            <article>
              <Image
                src="/images/thumbnail-project-3-large.webp"
                width={540}
                height={400}
                alt="Design portfolio project"
              />
              <h3 className="uppercase text-white text-[24px] leading-[32px] font-bold mt-[20px] mb-[7px]">
                TODO WEB APP
              </h3>
              <div className="text-misc-white flex gap-[18px]">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
              </div>
            </article>
            <article>
              <Image
                src="/images/thumbnail-project-4-large.webp"
                width={540}
                height={400}
                alt="Design portfolio project"
              />
              <h3 className="uppercase text-white text-[24px] leading-[32px] font-bold mt-[20px] mb-[7px]">
                ENTERTAINMENT WEB APP
              </h3>
              <div className="text-misc-white flex gap-[18px]">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
              </div>
            </article>
            <article>
              <Image
                src="/images/thumbnail-project-5-large.webp"
                width={540}
                height={400}
                alt="Design portfolio project"
              />
              <h3 className="uppercase text-white text-[24px] leading-[32px] font-bold mt-[20px] mb-[7px]">
                MEMORY GAME
              </h3>
              <div className="text-misc-white flex gap-[18px]">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
              </div>
            </article>
            <article>
              <Image
                src="/images/thumbnail-project-6-large.webp"
                width={540}
                height={400}
                alt="Design portfolio project"
              />
              <h3 className="uppercase text-white text-[24px] leading-[32px] font-bold mt-[20px] mb-[7px]">
                ART GALLERY SHOWCASE
              </h3>
              <div className="text-misc-white flex gap-[18px]">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
