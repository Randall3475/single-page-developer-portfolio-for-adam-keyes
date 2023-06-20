import {
  Header,
  Hero,
  Technologies,
  Projects,
  Contact,
  Footer,
} from "@/components";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <div className="container mx-auto">
        <hr />
      </div>
      <Technologies />
      <Projects />
      <div className="bg-secondary-gray">
        <Contact />
        <div className="container mx-auto">
          <hr />
        </div>
        <Footer />
      </div>
    </>
  );
}
