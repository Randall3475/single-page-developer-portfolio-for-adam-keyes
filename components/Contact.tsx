const Contact = () => {
  return (
    <>
      <section>
        <div className="container mx-auto flex desktop:max-w-full desktop:justify-between desktop:flex-row desktop:text-start desktop:items-start max-w-[445px] text-center items-center flex-col desktop:pt-[84px] tablet:pb-[92px] pt-[60px] pb-[92px]">
          <div>
            <h2 className="font-bold text-white desktop:tracking-[-2.5px] desktop:leading-[88px] desktop:text-[88px] tablet:text-[72px] tablet:leading-[72px] tablet:tracking-[-2.04545px] text-[40px] leading-[40px] tracking-[-1.13636px]">
              Contact
            </h2>
            <p className="text-misc-white capitalize font-medium tablet:text-lg text-[16px] leading-[26px] desktop:max-w-[445px]">
              Based in the UK, I’m a front-end developer passionate about
              building accessible web apps that users love.
            </p>
          </div>
          <form
            autocomplete="off"
            className="flex flex-col w-full max-w-[445px] text-end"
          >
            <input
              className="bg-transparent caret-white placeholder:text-[16px] placeholder:leading-[26px] placeholder:uppercase placeholder:tracking-[-0.222222px] placeholder:text-white placeholder:opacity-60 border-b border-white border-solid outline-0 mt-8 pl-6 pb-[17px] placeholder:"
              type="text"
              value=""
              name="name"
              placeholder="Name"
            />
            <input
              className="bg-transparent caret-white placeholder:text-[16px] placeholder:leading-[26px] placeholder:uppercase placeholder:tracking-[-0.222222px] placeholder:text-white placeholder:opacity-60 border-b border-white border-solid outline-0 mt-8 pl-6 pb-[17px]"
              type="email"
              value=""
              name="email"
              placeholder="Email"
            />
            <textarea
              className="bg-transparent caret-white placeholder:text-[16px] placeholder:leading-[26px] placeholder:uppercase placeholder:tracking-[-0.222222px] placeholder:text-white placeholder:opacity-60 border-b border-white border-solid outline-0 mt-8 pl-6 pb-[17px]"
              value=""
              name="message"
              placeholder="Message"
            />
            <button
              className="uppercase mt-8 ml-auto underline underline-offset-[20px] decoration-2 decoration-primary-neon text-white font-bold text-[16px] leading-[26px] tracking-[2.28571px]"
              type="submit"
            >
              Contact me
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
