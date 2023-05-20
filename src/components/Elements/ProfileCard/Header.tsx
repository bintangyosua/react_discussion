export default function Header() {
  return (
    <header>
      <div className="flex mb-2">
        <a className="relative inline-flex items-start mr-5" href="#0">
          <div
            className="absolute top-0 right-0 -mr-2 bg-white rounded-full shadow"
            aria-hidden="true">
            <svg
              className="w-8 h-8 fill-current text-yellow-500"
              viewBox="0 0 32 32">
              <path d="M21 14.077a.75.75 0 01-.75-.75 1.5 1.5 0 00-1.5-1.5.75.75 0 110-1.5 1.5 1.5 0 001.5-1.5.75.75 0 111.5 0 1.5 1.5 0 001.5 1.5.75.75 0 010 1.5 1.5 1.5 0 00-1.5 1.5.75.75 0 01-.75.75zM14 24.077a1 1 0 01-1-1 4 4 0 00-4-4 1 1 0 110-2 4 4 0 004-4 1 1 0 012 0 4 4 0 004 4 1 1 0 010 2 4 4 0 00-4 4 1 1 0 01-1 1z" />
            </svg>
          </div>
          <img
            className="rounded-full"
            src="https://preview.cruip.com/mosaic/images/user-64-01.jpg"
            width="64"
            height="64"
            alt="User 01"
          />
        </a>
        <div className="mt-1 pr-1">
          <a
            className="inline-flex text-gray-800 hover:text-gray-900"
            href="#0">
            <h2 className="text-xl leading-snug justify-center font-semibold">
              Dominik McNeail
            </h2>
          </a>
          <div className="flex items-center">
            <span className="text-sm font-medium text-gray-400 -mt-0.5 mr-1">
              -&gt;
            </span>{" "}
            <span>🇮🇹</span>
          </div>
        </div>
      </div>
    </header>
  );
}
