import React from "react";
import Label from "./Label";
import Input from "./Input";

interface InputFormProps {
  label: React.ReactNode;
  name: string;
  type: string;
  placeholder: string;
  onChange?: (value: any) => void;
}

const InputForm = (props: InputFormProps) => {
  const { label, name, type, placeholder, onChange } = props;

  return (
    <div className="mb-6">
      <Label htmlFor={name}>{label}</Label>
      <Input
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default InputForm;
