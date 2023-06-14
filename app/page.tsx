import {
  Header,
  Hero,
  Technologies,
  Projects,
  Contact,
  Footer,
} from '@/components';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <hr className="container mx-auto" />
      <Technologies />
      <Projects />
      <div className="bg-secondary-gray">
        <Contact />
        <hr className="container mx-auto" />
        <Footer />
      </div>
    </>
  );
}
