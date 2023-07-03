type ButtonProps = {
  text: string;
};

const Button: React.FC = ({ text }: ButtonProps) => {
  return (
    <>
      <button className="uppercase mt-8 ml-auto underline underline-offset-[20px] decoration-2 decoration-primary-neon text-white font-bold text-[16px] leading-[26px] tracking-[2.28571px]">
        {text}
      </button>
    </>
  );
};

export default Button;
