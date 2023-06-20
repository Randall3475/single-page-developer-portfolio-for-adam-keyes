"use client";

import { useState, useEffect, useRef } from "react";

const Contact: React.FC = () => {
  const isFirstRenderName = useRef(true);
  const isFirstRenderEmail = useRef(true);

  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [nameValid, setNameValid] = useState(false);

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [emailValid, setEmailValid] = useState(false);

  // VALIDATE FUNCTIONS
  const checkEmpty = (value: string) => {
    const emptyPattern = /^\s*$/;
    return emptyPattern.test(value);
  };

  const validateName = (value: string) => {
    const namePattern = /^[A-Za-z]+$/;
    return namePattern.test(value);
  };

  const validateEmail = (value: string) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(value);
  };

  // INPUT CHANGE
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  // useEffect

  useEffect(() => {
    if (isFirstRenderName.current) {
      isFirstRenderName.current = false;
      return;
    }

    const delayDebounce = setTimeout(() => {
      if (checkEmpty(name)) {
        return setNameError("Field cannot be left empty");
      }

      if (validateName(name)) {
        setNameValid(true);
        setNameError("");
      } else {
        setNameError("Sorry, invalid format here");
      }
    }, 1000);
    return () => {
      clearTimeout(delayDebounce);
    };
  }, [name]);

  useEffect(() => {
    if (isFirstRenderEmail.current) {
      isFirstRenderEmail.current = false;
      return;
    }

    const delayDebounce = setTimeout(() => {
      if (checkEmpty(email)) {
        return setEmailError("Field cannot be left empty");
      }

      if (validateEmail(email)) {
        setEmailValid(true);
        setEmailError("");
      } else {
        setEmailError("Sorry, invalid format here");
      }
    }, 1000);
    return () => {
      clearTimeout(delayDebounce);
    };
  }, [email]);

  // FORM SUBMISSION
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <section>
        <div className="container mx-auto flex justify-between desktop:pt-[84px] tablet:pb-[92px] pt-[60px] pb-[92px]">
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
            onSubmit={handleSubmit}
            autoComplete="off"
            className="flex flex-col w-full max-w-[445px] text-end"
          >
            <input
              className={`bg-transparent caret-white border-solid text-white uppercase placeholder:text-[16px] placeholder:leading-[26px] placeholder:uppercase placeholder:tracking-[-0.222222px] placeholder:text-white placeholder:opacity-60 border-b  outline-0 mt-8 pl-6 pb-[17px] ${
                nameValid && "border-primary-neon"
              }
               ${nameError && "border-error"}`}
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              onChange={handleNameChange}
            />
            {nameError && <p className="text-error mt-[5px]">{nameError}</p>}
            <input
              className={`bg-transparent caret-white placeholder:text-[16px] placeholder:leading-[26px] placeholder:uppercase placeholder:tracking-[-0.222222px] placeholder:text-white placeholder:opacity-60 border-b ${
                emailValid && "border-primary-neon"
              } ${emailError && "border-error"}
               border-solid outline-0 mt-8 pl-6 pb-[17px] text-white uppercase`}
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
            />
            {emailError && <p className="text-error mt-[5px]">{emailError}</p>}
            <textarea
              className="bg-transparent caret-white placeholder:text-[16px] placeholder:leading-[26px] placeholder:uppercase placeholder:tracking-[-0.222222px] placeholder:text-white placeholder:opacity-60 border-b border-white border-solid outline-0 mt-8 pl-6 pb-[17px]"
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
