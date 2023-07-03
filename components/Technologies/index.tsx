import TechArticle from "./TechArticle";

type TechnologiesProps = {
  technologies: {
    name: string;
    description: string;
  };
};

const Technologies: React.FC = ({ technologies }: TechnologiesProps) => {
  return (
    <>
      <section className="desktop:pt-[72px] tablet:pt-[52px] pt-[40px]">
        <div className="container mx-auto grid desktop:grid-cols-3 tablet:grid-cols-2 grid-cols-1 desktop:gap-x-[30px] tablet:gap-x-[7px] desktop:gap-y-[58px] tablet:gap-y-[52px] gap-y-6">
          {technologies.map(
            (technology: TechnologiesProps["technologies"], index: number) => {
              return (
                <TechArticle
                  key={index}
                  name={technology.name}
                  description={technology.description}
                />
              );
            }
          )}
        </div>
      </section>
    </>
  );
};

export default Technologies;
