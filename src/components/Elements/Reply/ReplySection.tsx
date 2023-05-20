import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Reply {
  children: string;
  reply_id: number;
  reply_content: string;
  id_user: string;
  thread_id: number;
}

export default function ReplySection() {
  const [replies, setReplies] = useState<Reply[]>([]);
  const { thread_id } = useParams();

  async function fetchData() {
    try {
      const result = await fetch("http://localhost:3000/api/replies", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          thread_id: thread_id,
        }),
      });
      if (!result.ok) throw new Error("Request Failed");
      const data = await result.json();
      setReplies(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {replies.map((reply, index) => (
        <div className="mb-4 w-full" key={index}>
          <div className="block max-w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 w-full">
            <h5 className="font-semibold tracking-tight text-gray-900 ">
              {reply.id_user}
            </h5>
            <p className="block font-normal text-gray-700">
              {reply.reply_content}
            </p>
          </div>
        </div>
      ))}
    </>
  );
}
