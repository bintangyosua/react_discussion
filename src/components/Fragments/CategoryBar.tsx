import { useEffect, useState } from "react";
import { getAllCategories } from "../../services/categoryAPI";

interface Category {
  category_id: string;
  category_name: string;
}

export default function Sidebar() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getAllCategories();
      setCategories(result?.data);
    };

    fetchData();
  }, []);

  return (
    <div className="block p-3 bg-white border border-gray-200">
      <h5 className="mb-2 ml-1 text-2xl font-bold tracking-tight text-gray-900">
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
  );
}
