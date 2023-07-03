import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <>
      <footer>
        <div className="container mx-auto flex tablet:justify-between tablet:items-start tablet:flex-row gap-y-[20px] flex-col items-center desktop:pt-[47px] desktop:pb-[92px] tablet:pt-[30px] tablet:pb-[40px] pt-[39px] pb-[60px]">
          <p className="lowercase text-white tracking-[-0.444444px] font-bold text-[32px] leading-[32px]">
            Adamkeyes
          </p>
          <div className="flex items-center gap-x-8">
            <Image
              src="/images/icon-github.svg"
              width={24.61}
              height={24}
              alt="GitHub icon"
            />
            <Image
              src="/images/icon-frontend-mentor.svg"
              width={24.61}
              height={24}
              alt="Frontend Mentor icon"
            />
            <Image
              src="/images/icon-linkedin.svg"
              width={24.61}
              height={24}
              alt="LinkedIn icon"
            />
            <Image
              src="/images/icon-twitter.svg"
              width={24.61}
              height={24}
              alt="Twitter icon"
            />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
