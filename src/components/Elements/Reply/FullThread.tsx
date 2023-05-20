import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReplySection from "./ReplySection";
import AddReply from "./AddReply";

interface Thread {
  thread_id: number;
  thread_title: string;
  thread_content: string;
  id_user: string;
}

const FullThreadPage = () => {
  const [thread, setThread] = useState<Thread | null>(null);
  const { thread_id } = useParams<{ thread_id: string }>();

  useEffect(() => {
    // Logic for fetching thread data from API
    const fetchThread = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/threads/${thread_id}`
        );
        if (!response.ok) throw new Error("Request failed");
        const data = await response.json();
        if (Array.isArray(data) && data.length > 0) {
          setThread(data[0]);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchThread();
  }, []);

  if (!thread) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto mb-3 mr-96">
      <div className="bg-white rounded-lg shadow-md p-6 mb-5">
        <h2 className="text-2xl font-bold mb-4 text-slate-800">
          {thread.thread_title}
        </h2>
        <hr className="mb-3" />
        <p className="text-gray-600 mb-4">Penulis: {thread.id_user}</p>
        <p className="text-gray-800" style={{ whiteSpace: "pre-line" }}>
          {thread.thread_content}
        </p>
      </div>
      <AddReply />
      <ReplySection />
    </div>
  );
};

export default FullThreadPage;
