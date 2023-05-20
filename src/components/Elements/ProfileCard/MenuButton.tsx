export default function MenuButton() {
  return (
    <div
      className="relative inline-flex flex-shrink-0"
      x-data="{ open: false }">
      <button
        className="hover:text-gray-500 rounded-full focus:outline-none focus-within:ring-2 bg-gray-100 text-gray-500"
        aria-haspopup="true">
        <span className="sr-only">Menu</span>
        <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32">
          <circle cx="16" cy="16" r="2" />
          <circle cx="10" cy="16" r="2" />
          <circle cx="22" cy="16" r="2" />
        </svg>
      </button>
    </div>
  );
}
