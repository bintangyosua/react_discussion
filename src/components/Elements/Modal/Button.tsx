interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

export default function Button({ onClick, children }: ButtonProps) {
  return (
    <button
      className="bg-blue-500 text-white px-4 py-2 rounded-lg"
      onClick={onClick}>
      {children}
    </button>
  );
}
