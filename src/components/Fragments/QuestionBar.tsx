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
    <div className="ml-3">
      <div className="block w-72 bg-white border pb-4">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 p-3">
          Popular Questions
        </h5>
        {questions.map((item) => (
          <a href={`/questions/${item.question_id}`} key={item.question_id}>
            <div className="hover:bg-gray-100 px-3 py-1">
              <span className="font-normal text-blue-600 text-lg">
                {item.question_content}
              </span>
              <br />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
