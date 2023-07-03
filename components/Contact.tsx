"use client";

import { useForm } from "react-hook-form";

const Contact: React.FC = async () => {
  const form = useForm<FormValues>();
  const { register, control, handleSubmit, formState, watch } = form;
  const { errors } = formState;

  type FormValues = {
    username: string;
    email: string;
    message: string;
  };

  const onSubmit = (data: FormValues) => {
    console.log("Form submitted", data);
  };

  return (
    <>
      <section>
        <div className="container mx-auto flex desktop:flex-row desktop:justify-between flex-col desktop:pt-[84px] tablet:pb-[92px] pt-[60px] pb-[92px]">
          <div className="max-w-[445px] max-desktop:mx-auto desktop:text-start text-center flex flex-col desktop:gap-y-8 gap-y-[20px]">
            <h2 className="font-bold text-white desktop:tracking-[-2.5px] desktop:leading-[88px] desktop:text-[88px] tablet:text-[72px] tablet:leading-[72px] tablet:tracking-[-2.04545px] text-[40px] leading-[40px] tracking-[-1.13636px]">
              Contact
            </h2>
            <p className="text-misc-white capitalize font-medium tablet:text-lg text-[16px] leading-[26px] desktop:max-w-[445px]">
              I would love to hear about your project and how I could help.
              Please fill in the form, and I’ll get back to you as soon as
              possible.
            </p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            autoComplete="off"
            noValidate
            className="desktop:mx-0 flex flex-col w-full max-w-[445px] mx-auto text-end"
          >
            <input
              className={`bg-transparent caret-white placeholder:text-[16px] placeholder:leading-[26px] placeholder:uppercase placeholder:tracking-[-0.222222px] placeholder:text-white placeholder:opacity-60 border-b
               border-solid outline-0 mt-8 pl-6 pb-[17px] text-white uppercase focus-within:border-emerald-400`}
              type="name"
              name="name"
              placeholder="Name"
              {...register("username", { required: "Username is required" })}
            />
            <p className="text-red-400">{errors.username?.message}</p>

            <input
              className={`bg-transparent caret-white placeholder:text-[16px] placeholder:leading-[26px] placeholder:uppercase placeholder:tracking-[-0.222222px] placeholder:text-white placeholder:opacity-60 border-b 
               border-solid outline-0 mt-8 pl-6 pb-[17px] text-white uppercase focus-within:border-emerald-400`}
              type="text"
              name="email"
              placeholder="Email"
            />

            <textarea
              className={`resize-none bg-transparent h-24 caret-white placeholder:leading-[26px] placeholder:text-[16px] placeholder:tracking-[-0.222222px] uppercase tracking-[-0.222222px] text-white placeholder:text-white placeholder:opacity-60 border-b border-solid outline-0 mt-8 pl-6 pb-[17px] focus-within:border-emerald-400`}
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
