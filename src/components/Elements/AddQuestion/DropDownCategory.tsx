import { ChangeEvent, useEffect, useState } from "react";

interface Category {
  category_id: string;
  category_name: string;
}

export default function DropDownCategory() {
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

  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <select
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-500 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-blue-600"
        value={selectedOption}
        onChange={handleOptionChange}>
        <option disabled value="">
          Category
        </option>
        {categories.map((category) => (
          <option key={category.category_id} value={category.category_id}>
            {category.category_name}
          </option>
        ))}
      </select>
      {/* <!-- Dropdown menu --> */}
      <div
        id="dropdown"
        className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
        <div
          className="py-2 text-sm text-gray-700"
          aria-labelledby="dropdownDefaultButton"></div>
      </div>
    </>
  );
}
