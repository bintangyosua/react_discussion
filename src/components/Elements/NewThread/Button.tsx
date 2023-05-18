interface ButtonProps {
  path_d: string;
}

export default function Button({ path_d }: ButtonProps) {
  return (
    <button
      type="button"
      className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 ">
      <svg
        aria-hidden="true"
        className="w-5 h-5"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d={path_d} clipRule="evenodd"></path>
      </svg>
      <span className="sr-only">Upload image</span>
    </button>
  );
}
