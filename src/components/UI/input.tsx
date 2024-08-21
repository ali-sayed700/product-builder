import { InputHTMLAttributes } from "react";

interface Iinput extends InputHTMLAttributes<HTMLInputElement> {}

const Input = ({ ...rest }: Iinput) => {
  return (
    <div>
      <input
        className="border-[1px] border-gray-300 shadow-md focus:border-indigo-500 focus:outline-none rounded-md focus:ring-1 focus:ring-red-500 text-md py-3 w-full"
        {...rest}
      />
    </div>
  );
};

export default Input;
