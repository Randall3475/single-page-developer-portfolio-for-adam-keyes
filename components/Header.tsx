import Image from "next/image";

const Header = () => {
  return (
    <>
      <header className="desktop:pt-[39px] tablet:pt-[29px] pt-[20px] relative z-50">
        <div className="container mx-auto flex tablet:justify-between tablet:items-start tablet:flex-row gap-y-[20px] flex-col items-center">
          <h1 className="lowercase text-white tracking-[-0.444444px] font-bold text-[32px] leading-[32px] max-tablet:mb-[20px]">
            Adamkeyes
          </h1>
          <div className="flex items-center tablet:gap-x-8 tablet:mr-[29.51px] gap-x-[25.6px]">
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
      </header>
    </>
  );
};

export default Header;
