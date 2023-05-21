import { useState, useEffect } from "react";
import { getAllThreads } from "../../../services/threadAPI";
import ThreadCard from "../ThreadCard/ThreadCard";

interface Thread {
  thread_id: string;
  thread_title: string;
  thread_content: string;
  id_user: string;
  question_content: string;
}

const Threads = () => {
  const [threads, setThreads] = useState<Thread[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getAllThreads();
      setThreads(result);
      console.log(result);
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto mb-3">
      <div className="rounded-lg shadow-sm">
        {threads.map((thread: Thread) => (
          <ThreadCard
            key={thread.thread_id}
            thread_id={thread.thread_id}
            thread_content={thread.thread_content!}
            id_user={thread.id_user}
            question_id={thread.id_user}
            question_content={thread.question_content}
          />
        ))}
      </div>
    </div>
  );
};

export default Threads;
