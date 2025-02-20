import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
}

export function Button(props: ButtonProps) {
  return (
    <button className="flex items-center justify-between px-5 h-12 bg-gray-500 font-semibold text-blue rounded-xl w-full cursor-pointer transition-colors duration-300 hover:bg-blue hover:text-gray-900">
      {props.children}
    </button>
  );
}
