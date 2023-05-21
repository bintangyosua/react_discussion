import React from "react";

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  classname?: string;
}

export default function Button({
  onClick,
  children,
  classname = "",
}: ButtonProps) {
  return (
    <button
      className={`bg-blue-500 text-white px-4 py-2 rounded-lg ${classname}`}
      onClick={onClick}>
      {children}
    </button>
  );
}
