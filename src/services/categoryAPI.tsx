import axios from "axios";

interface Category {
  category_id: string;
  category_name: string;
}

export const getAllCategories = async () => {
  try {
    const response = await axios.get("http://localhost:3000/api/categories");
    return response;
  } catch (error) {
    console.error(error);
  }
};
