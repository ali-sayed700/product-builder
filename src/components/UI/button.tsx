import { ButtonHTMLAttributes } from "react";

interface Ibutton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className: string;
  width?: "w-full" | "w-fit";
}

const Button = ({
  children,
  className,
  width = "w-full",
  ...reset
}: Ibutton) => {
  return (
    <button
      className={`${className} w-full rounded-md p-2 text-white ${width}`}
      {...reset}
    >
      {children}
    </button>
  );
};

export default Button;
