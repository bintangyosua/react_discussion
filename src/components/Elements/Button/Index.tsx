import React from "react";

type ButtonType = "button" | "submit" | "reset";

interface ButtonProps {
  children: React.ReactNode;
  classname: string;
  onClick: () => void;
  type?: ButtonType;
}

const Button = (props: ButtonProps) => {
  const {
    children,
    classname = "bg-black",
    onClick = () => {},
    type = "button",
  } = props;

  return (
    <div>
      <button
        className={`h-10 px-6 font-semibold rounded-md ${classname} text-white`}
        type={type}
        onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default Button;
