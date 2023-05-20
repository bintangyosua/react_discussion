import { useEffect, useState } from "react";

interface Category {
  category_id: number;
  category_name: string;
}

export default function Sidebar() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch("http://localhost:3000/api/categories");
        if (!result.ok) throw new Error("Request Failed");

        const data = await result.json();
        setCategories(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="ml-96 mr-3">
      <div className="block w-72 p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          Board
        </h5>
        <p className="font-normal text-blue-600">
          {categories.map((category) => (
            <a href="#" className="m-0.5" key={category.category_id}>
              <button
                type="button"
                className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-2">
                {category.category_name}
              </button>
            </a>
          ))}
        </p>
      </div>
    </div>
  );
}
