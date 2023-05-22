import { useEffect, useState } from "react";
import ThreadCardV2 from "./ThreadCardV2";
import { getAllThreadsV2 } from "../../../services/threadAPI";
import axios from "axios";

interface Thread {
  thread_id: string;
  thread_title: string;
  thread_content: string;
  id_user: string;
  question_content: string;
  question_id: string;
}

export default function Threads() {
  // Getting random image
  const [data, setData] = useState<Thread[]>([]);
  const likes = "5";
  const [image, setImage] = useState("");
  const createdAt = "9 Maret 2023";

  useEffect(() => {
    const fetchImage = async () => {
      const response = await axios.get("https://randomuser.me/api/");
      setImage(response.data.results[0].picture.thumbnail);
    };

    fetchImage();
  }, []);

  useEffect(() => {
    const fetchThread = async () => {
      const response = await getAllThreadsV2();
      setData(response);
    };

    fetchThread();
  }, []);
  return (
    <>
      {data.map((thread: any) => (
        <ThreadCardV2
          key={thread.thread_id}
          thread_id={thread.thread_id}
          id_user={thread.id_user}
          image={image}
          createdAt={createdAt}
          question_content={thread.question_content}
          likes={likes}
          thread_content={thread.thread_content}
          question_id={thread.quesion_id}></ThreadCardV2>
      ))}
    </>
  );
}
