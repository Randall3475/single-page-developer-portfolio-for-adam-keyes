import {
  Header,
  Hero,
  Technologies,
  Projects,
  Contact,
  Footer,
} from "@/components";

import Image from "next/image";

import { projects } from "@/data/projects";
import { technologies } from "@/data/technologies";

export default function Home() {
  return (
    <>
      <Header />
      <Image
        className="absolute desktop:mt-[62px] tablet:mt-[25px] desktop:left-[-100px] tablet:left-[-265px] mt-[32px] left-[-240px]"
        src="/images/pattern-rings.svg"
        width={530}
        height={129}
        alt="Circles"
      />
      <Hero />
      <div className="container mx-auto">
        <hr />
      </div>
      <Technologies technologies={technologies} />
      <Image
        className="absolute desktop:right-[-239px] desktop:top-[1037px] tablet:right-[-332px] tablet:top-[1047px] right-[-196px] top-[1287px]"
        src="/images/pattern-rings.svg"
        width={530}
        height={129}
        alt="Circles"
      />
      <Projects projects={projects} />
      <div className="bg-secondary-gray relative">
        <Contact />
        <Image
          className="absolute desktop:left-[-205px] desktop:top-[327px] tablet:left-[-368px] tablet:top-[547px] left-[-197px] top-[436px]"
          src="/images/pattern-rings.svg"
          width={530}
          height={129}
          alt="Circles"
        />
        <div className="container mx-auto">
          <hr />
        </div>
        <Footer />
      </div>
    </>
  );
}
