import Image from 'next/image';

const Hero = () => {
  return (
    <>
      <section className="h-[720px]">
        <div className="container mx-auto flex justify-end">
          <div className="z-50 max-w-[706px] mr-auto desktop:mt-[127px]">
            <h2 className="font-bold text-white desktop:tracking-[-2.5px] desktop:leading-[88px] desktop:text-[88px] tablet:text-[72px] tablet:leading-[72px] tablet:tracking-[-2.04545px] text-[40px] leading-[40px] tracking-[-1.13636px]">
              Nice to meet you! I’m{' '}
              <span className="underline underline-offset-[18px] decoration-4 decoration-primary-neon">
                Adam Keyes
              </span>
              .
            </h2>
            <p className="text-misc-white capitalize font-medium tablet:text-lg text-[16px] leading-[26px] desktop:mt-[43px] desktop:mb-[66px] desktop:max-w-[445px]">
              Based in the UK, I’m a front-end developer passionate about
              building accessible web apps that users love.
            </p>
            <button className="uppercase underline underline-offset-[20px] decoration-2 decoration-primary-neon text-white font-bold text-[16px] leading-[26px] tracking-[2.28571px] ">
              Contact me
            </button>
          </div>
          <Image
            className="absolute top-0 "
            src="/images/image-profile-desktop.webp"
            width={445}
            height={720}
            alt="Portrait image of Adam Keyes"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
