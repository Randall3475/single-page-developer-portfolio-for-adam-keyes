import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <>
      <section className="desktop:h-[720px] tablet:h-[600px] max-tablet:pb-[80px]">
        <div className="container mx-auto flex tablet:justify-end tablet:text-start max-tablet:items-center text-center max-tablet:flex-col-reverse">
          <div className="z-50 mr-auto desktop:max-w-[706px] desktop:mt-[127px] tablet:max-w-[445px] tablet:mt-[90px] max-tablet:mt-[40px] max-w-[343px] max-tablet:mx-auto">
            <h2 className="font-bold text-white desktop:tracking-[-2.5px] desktop:leading-[88px] desktop:text-[88px] tablet:text-[72px] tablet:leading-[72px] tablet:tracking-[-2.04545px] text-[40px] leading-[40px] tracking-[-1.13636px]">
              Nice to <br className="desktop:hidden tablet:block hidden" /> meet
              you! <br className="tablet:hidden flex" />
              I’m{" "}
              <span className="underline tablet:underline-offset-[18px] underline-offset-[8px] decoration-4 decoration-primary-neon">
                Adam Keyes
              </span>
              .
            </h2>
            <p className="text-misc-white font-medium tablet:text-lg text-[16px] leading-[26px] desktop:mt-[43px] desktop:mb-[66px] desktop:max-w-[445px] tablet:mt-[60px] tablet:mb-[34px] mt-6 mb-6">
              Based in the UK, I’m a front-end developer passionate about
              building accessible web apps that users love.
            </p>
            <button className="uppercase underline underline-offset-[20px] decoration-2 decoration-primary-neon text-white font-bold text-[16px] leading-[26px] tracking-[2.28571px] ">
              Contact me
            </button>
          </div>
          <picture className="tablet:absolute top-0 max-desktop:right-0 max-tablet:mt-[-92px] isolate relative">
            <source
              media="(min-width:1110px)"
              srcSet="/images/image-profile-desktop.webp"
            />
            <source
              media="(min-width:768px)"
              srcSet="/images/image-profile-tablet.webp"
            />
            <img
              className="desktop:max-w-[445px] desktop:max-h-[720px] tablet:max-w-[322px] tablet:max-h-[600px] max-w-[174px] max-h-[383px]"
              src="/images/image-profile-mobile.webp"
              alt="Portrait of Adam Keyes"
            />
          </picture>
        </div>
      </section>
    </>
  );
};

export default Hero;
