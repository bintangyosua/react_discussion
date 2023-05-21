import { useState, useEffect } from "react";
import { getAllQuestions, QuestionModel } from "../../services/questionAPI";

export default function QuestionBar() {
  const [questions, setQuestions] = useState<QuestionModel[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllQuestions();
        setQuestions(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="mr-96 ml-3">
      <div className="block w-72 p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          Popular Questions
        </h5>
        {questions.map((item) => (
          <a href={`/question/${item.question_id}`} key={item.question_id}>
            <span className="font-normal text-blue-600 text-lg">
              {item.question_content}
            </span>
            <br />
          </a>
        ))}
      </div>
    </div>
  );
}
