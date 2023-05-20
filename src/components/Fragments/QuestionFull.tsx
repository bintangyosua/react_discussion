import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactQuill from "../Elements/ReactQuill/ReactQuill";

interface Question {
  question_id: number;
  question_content: string;
  category_id: 1;
  id_user: string;
}

export default function QuestionFull() {
  const [question, setQuestion] = useState<Question | null>(null);

  const { question_id } = useParams<{ question_id: string }>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/questions/${question_id}`
        );

        if (!response.ok) throw new Error("Request failed");
        const data = await response.json();
        if (Array.isArray(data) && data.length > 0) {
          setQuestion(data[0]);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-1/2">
      <div className="container mx-auto mb-3">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-5">
          <h2 className="text-2xl font-bold mb-4 text-slate-800">
            {question?.question_content}
          </h2>
          <hr className="mb-3" />
          <span className="text-gray-600 mb-4">
            Penulis: {question?.id_user}
          </span>{" "}
          <span className="text-gray-600 mb-4">
            Category: {question?.category_id}
          </span>
        </div>
      </div>
      <div className="bg-white">
        <ReactQuill />
      </div>
    </div>
  );
}
