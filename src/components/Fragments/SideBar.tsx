const tag = [
  "Anime",
  "Manga",
  "History",
  "Technology",
  "Science",
  "Education",
  "Economy",
  "Politic",
  "Music",
  "Games",
  "Japan",
  "US",
  "Indonesia",
  "Fashion",
];

export default function Sidebar() {
  return (
    <div className="ml-96 mr-3">
      <div className="block w-72 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          Board
        </h5>
        <p className="font-normal text-blue-600">
          {tag.map((item) => (
            <a href="#" className="m-0.5">
              <button
                type="button"
                className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-2">
                {item}
              </button>
            </a>
          ))}
        </p>
      </div>
    </div>
  );
}
