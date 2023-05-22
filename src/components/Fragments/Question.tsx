import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from "../Elements/Modal/Button";
import QuillEditor from "../Elements/ReactQuill/QuillEditor";
import ModalThread from "../Elements/Modal/ModelThread";
import { getQuestionById } from "../../services/questionAPI";
import { addThread, getAllThreadsByQuestionId } from "../../services/threadAPI";
import Question from "../../pages/question";
import ThreadCard from "../Elements/ThreadCard/ThreadCard";
import ThreadCardV2 from "../Elements/ThreadCardV2/ThreadCardV2";
import axios from "axios";

interface Question {
  question_id: string;
  question_content: string;
  category_id: string;
  id_user: string;
  category_name: string;
}

interface Thread {
  thread_id: string;
  thread_title: string;
  thread_content: string;
  id_user: string;
  question_id: string;
  question_content: string;
}

export default function QuestionFull() {
  const [question, setQuestion] = useState<Question | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState("");
  const [threads, setThreads] = useState([]);
  const { question_id } = useParams<{ question_id: string }>();
  const id_user = localStorage.getItem("id_user") || "";

  const [data, setData] = useState([]);
  const likes = "5";
  const [image, setImage] = useState("");
  const createdAt = "9 Maret 2023";

  const handleContentChange = (value: string) => {
    setContent(value);
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        const result = await getQuestionById(question_id!);
        setQuestion(result[0]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchQuestion();
  }, []);

  useEffect(() => {
    const fetchImage = async () => {
      const response = await axios.get("https://randomuser.me/api/");
      setImage(response.data.results[0].picture.thumbnail);
    };

    fetchImage();
  }, []);

  useEffect(() => {
    const fetchThreads = async (question_id: string) => {
      try {
        const result = await getAllThreadsByQuestionId(question_id);

        setThreads(result);
        console.log(result);
        console.log("Question_Id", question_id);
      } catch (error) {}
    };

    fetchThreads(question_id!);
  }, []);

  const handleAddThread = async () => {
    try {
      if (!question_id) {
        console.log("Question ID tidak ditemukan");
        return;
      }

      const thread = {
        thread_id: "",
        thread_content: content,
        question_id: question_id,
        id_user: id_user,
      };

      await addThread(thread);

      setContent("");
      closeModal();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="mb-1">
      <div className="container mx-auto mb-1">
        <div className="bg-white rounded-lg shadow-sm px-5 pt-5 mb-1">
          <h2 className="text-2xl font-bold mb-4 text-slate-800">
            {question?.question_content}
          </h2>
          <hr className="mb-3" />
          <div className="flex justify-between">
            <span className="text-gray-600 mb-4">
              Penulis: {question?.id_user}
            </span>{" "}
            <span className="text-gray-600 mb-4">
              Category: {question?.category_name}
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-end mx-3 my-2">
        <Button onClick={openModal}>Jawab</Button>
        <ModalThread
          isOpen={isOpen}
          onClose={closeModal}
          onSend={handleAddThread}
          title="Answer this question">
          <QuillEditor value={content} onChange={handleContentChange} />
        </ModalThread>
      </div>
      {threads.map((thread: Thread) => (
        <ThreadCardV2
          key={thread.thread_id}
          thread_id={thread.thread_id}
          thread_content={thread.thread_content}
          id_user={thread.id_user}
          question_id={thread.question_id}
          image={image}
          createdAt={createdAt}
          question_content={""}
          likes={likes}
        />
      ))}
    </div>
  );
}

// {threads.length > 0 && (
//   <div>
//     {threads.map((thread: Thread) => (
//       <a
//         key={thread.thread_id}
//         href={`http://localhost:5173/page/${thread.thread_id}`}>
//         <div className="flex flex-col gap-4 mb-4">
//           <div
//             className="border border-gray-300 rounded-md p-4 bg-white"
//             key={thread.thread_id}>
//             <p className="text-gray-600 mb-2">
//               Penulis: {thread.id_user}
//             </p>
//             {thread.thread_content !== null ? (
//               <p
//                 className="text-gray-800"
//                 style={{ whiteSpace: "pre-wrap" }}
//                 dangerouslySetInnerHTML={{
//                   __html:
//                     thread.thread_content.length > 400
//                       ? `${thread.thread_content.substring(0, 400)}...`
//                       : thread.thread_content,
//                 }}></p>
//             ) : null}
//           </div>
//         </div>
//       </a>
//     ))}
