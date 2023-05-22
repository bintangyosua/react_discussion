import React, { useEffect, useState } from "react";
import { addQuestion } from "../../../services/questionAPI";
import { isAuthenticated } from "../../../utils/auth";
import DropDownCategory from "./DropDownCategory";

interface Question {
  question_id: string;
  question_content: string;
  category_id: string;
  id_user: string;
  createdAt: string;
}

export default function AddQuestion() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const questionId = "";
  const [questionContent, setQuestionContent] = useState("");
  const categoryId = "2";
  const userId = localStorage.getItem("id_user") || "";
  if (userId === null) userId === "d";
  const username = localStorage.getItem("id_user") || "";
  const password = localStorage.getItem("password_user") || "";

  useEffect(() => {
    const checkAuthentication = async () => {
      const authenticated = await isAuthenticated();
      setIsLoggedIn(authenticated);
    };

    checkAuthentication();
  }, []);

  const handleAddQuestion = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    addQuestion({
      question_id: questionId,
      question_content: questionContent,
      category_id: categoryId,
      id_user: userId,
    });

    window.location.reload();
  };

  return (
    <form onSubmit={handleAddQuestion}>
      <input type="text" name="question_id" defaultValue="" hidden />
      <input type="text" name="category_id" defaultValue={categoryId} hidden />
      <input type="text" name="id_user" defaultValue={userId} hidden />

      <div className="px-4 py-2 bg-white">
        <input
          type="text"
          name="question_content"
          className="w-full p-3 text-xl text-gray-900 bg-white border-0 focus:ring-0"
          placeholder="Apa yang ingin anda tanyakan?"
          onChange={(e) => setQuestionContent(e.target.value)}
          required
        />
      </div>
      <div className="w-full mb-4 border border-gray-200 bg-gray-50 ">
        <div className="flex items-center justify-between px-3 py-2 border-t">
          <DropDownCategory />
          {/* <div className="flex pl-0 space-x-1 sm:pl-2"></div> */}
          <button
            type="submit"
            defaultValue={"Uncategorized"}
            className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-500 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-blue-600">
            Post Question
          </button>
        </div>
      </div>
    </form>
  );
}
