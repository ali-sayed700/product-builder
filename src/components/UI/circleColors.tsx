import { HTMLAttributes } from "react";

interface IcircleColors extends HTMLAttributes<HTMLSpanElement> {
  color: string;
}

const CircleColors = ({ color, ...rest }: IcircleColors) => {
  return (
    <span
      className="block w-5 h-5 bg-indigo-600 rounded-full cursor-pointer mb-1"
      style={{ backgroundColor: color }}
      {...rest}
    />
  );
};

export default CircleColors;
