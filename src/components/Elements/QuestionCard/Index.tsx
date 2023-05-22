import { useEffect, useState } from "react";
import { getQuestionsByUser } from "../../../services/profileAPI";
import { getAnswerQuestionCount } from "../../../services/questionAPI";
import { useParams } from "react-router-dom";

interface QuestionModel {
  category_name: string;
  fullname: string;
  id_user: string;
  question_content: string;
  question_created: string;
  question_id: string;
  role: "user";
  total_answers: string;
}

export default function ThreadCard() {
  const [answerCount, setAnswerCount] = useState(0);
  const [data, setData] = useState<QuestionModel[]>([]);

  const { id_user } = useParams<{ id_user: string }>();

  useEffect(() => {
    const fetchData = async (id_user?: string) => {
      if (!id_user) return;

      const result = await getQuestionsByUser(id_user);
      if (result) {
        const formattedData = result.data.map((item: any) => {
          const dateString = item.question_created;
          const date = new Date(dateString);
          const year = date.getFullYear();
          const month = date.getMonth() + 1; // add 1 to convert from 0-indexed to 1-indexed
          const day = date.getDate();
          const formattedDate = `${year}-${month}-${day}`;
          return { ...item, question_created: formattedDate };
        });
        setData(formattedData);
      }
    };

    fetchData(id_user);
  }, []);

  return (
    <>
      <div className="block p-3 bg-white borde">
        {data.map((item) => (
          <div key={item.question_id}>
            <a href="">
              <h5 className=" text-md font-bold tracking-tight text-gray-900 hover:underline hover:underline-offset-1">
                {item.question_content}
              </h5>
            </a>
            <span className="text-sm text-gray-500">
              {item.total_answers} Answers • Created At {item.question_created}
            </span>
            <div className="flex items-center justify-center">
              <svg
                className="w-4 h-4 fill-current flex-shrink-0 mr-2"
                viewBox="0 0 16 16">
                <path d="M8 0C3.6 0 0 3.1 0 7s3.6 7 8 7h.6l5.4 2v-4.4c1.2-1.2 2-2.8 2-4.6 0-3.9-3.6-7-8-7zm4 10.8v2.3L8.9 12H8c-3.3 0-6-2.2-6-5s2.7-5 6-5 6 2.2 6 5c0 2.2-2 3.8-2 3.8z" />
              </svg>
              <span>Answer</span>
            </div>
          </div>
        ))}
      </div>
      <hr className="bg-gray-300" />
    </>
  );
}
