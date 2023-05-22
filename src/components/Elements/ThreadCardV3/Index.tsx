import axios from "axios";
import { getThreadsByUser } from "../../../services/profileAPI";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HTMLinHTML from "../HTMLinHTML";

interface ThreadModel {
  thread_id: string;
  thread_content: string;
  question_id: string;
  question_content: string;
  id_user: string;
  thread_created: string;
}

export default function ThreadCard() {
  const [data, setData] = useState<ThreadModel[]>([]);

  const { id_user } = useParams<{ id_user: string }>();

  useEffect(() => {
    const fetchData = async (id_user?: string) => {
      if (!id_user) return;
      const result = await getThreadsByUser(id_user);
      if (result) {
        setData(result.data);
        console.log(result.data);
      }
    };

    fetchData(id_user);
  }, []);

  return (
    <>
      {data.map((item) => (
        <div key={item.thread_id}>
          <div className="block p-3 bg-white borde">
            <a
              href={`http://localhost:5173/questions/${item.question_id}/threads/${item.thread_id}`}>
              <h5 className=" text-md font-bold tracking-tight text-gray-900 hover:underline hover:underline-offset-1">
                {item.question_content}
              </h5>
            </a>
            <p className="">
              <HTMLinHTML content={item.thread_content} />
            </p>
            <span className="text-sm text-gray-500">
              Created At {item.thread_created}
            </span>
            <button className="flex items-center justify-center mx-auto">
              <svg
                className="w-4 h-4 fill-current flex-shrink-0 mr-2"
                viewBox="0 0 16 16">
                <path d="M8 0C3.6 0 0 3.1 0 7s3.6 7 8 7h.6l5.4 2v-4.4c1.2-1.2 2-2.8 2-4.6 0-3.9-3.6-7-8-7zm4 10.8v2.3L8.9 12H8c-3.3 0-6-2.2-6-5s2.7-5 6-5 6 2.2 6 5c0 2.2-2 3.8-2 3.8z" />
              </svg>
              <span>Reply</span>
            </button>
          </div>
          <hr className="bg-gray-300" />
        </div>
      ))}
    </>
  );
}
