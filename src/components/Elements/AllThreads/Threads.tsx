import { useState, useEffect } from "react";

interface Thread {
  thread_id: number;
  thread_title: string;
  thread_content: string;
  id_user: string;
}

const Threads = () => {
  const [threads, setThreads] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/threads");
        if (!response.ok) throw new Error("Request failed");
        const data = await response.json();
        setThreads(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto mb-3">
      <div className="bg-white rounded-lg shadow-md p-6">
        {threads.map((thread: Thread) => (
          <a
            key={thread.thread_id}
            href={`http://localhost:5173/page/${thread.thread_id}`}>
            <div className="flex flex-col gap-4 mb-4">
              <div
                className="border border-gray-300 rounded-md p-4"
                key={thread.thread_id}>
                <h3 className="text-lg font-bold text-slate-600 mb-2">
                  {thread.thread_title}
                </h3>
                <p className="text-gray-600 mb-2">Penulis: {thread.id_user}</p>
                <p className="text-gray-800" style={{ whiteSpace: "pre-wrap" }}>
                  {thread.thread_content.length > 200
                    ? thread.thread_content.substring(0, 200) + "..."
                    : thread.thread_content}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Threads;
