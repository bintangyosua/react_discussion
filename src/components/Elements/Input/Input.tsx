interface InputProps {
  type: string;
  placeholder: string;
  name: string;
  onChange?: (value: any) => void;
}

const Input = (props: InputProps) => {
  const { type, placeholder, name, onChange } = props;

  return (
    <input
      type={type}
      className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder: opacity-100"
      placeholder={placeholder}
      name={name}
      id={name}
      onChange={onChange}
    />
  );
};

export default Input;
