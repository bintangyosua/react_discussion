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
      console.log(data);
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
        <div className="mb-4">
          <div
            key={index}
            className="max-w-full max-h-full mx-5 bg-white rounded-xl">
            <p className="text-slate-700 text-lg ml-3">{reply.id_user}</p>
            <p className="p-4 text-slate-700">{reply.reply_content}</p>
          </div>
        </div>
      ))}
    </>
  );
}
