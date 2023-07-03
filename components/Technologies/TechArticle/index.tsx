type TechArticleProps = {
  name: string;
  description: string;
};

const TechArticle: React.FC = ({ name, description }: TechArticleProps) => {
  return (
    <>
      <article className="grid tablet:gap-y-3.5 tablet:text-start tablet:justify-start justify-center text-center gap-y-px">
        <h3 className="text-white tracking-[-1.5px] font-bold tablet:text-[48px] tablet:leading-[56px] text-[32px] leading-[40px]">
          {name}
        </h3>
        <p className="text-misc-white capitalize font-medium tablet:text-lg text-[16px] leading-[26px]">
          {description}
        </p>
      </article>
    </>
  );
};

export default TechArticle;
