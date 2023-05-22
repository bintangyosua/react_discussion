import ThreadAttributes from "./ThreadAttributes";
import ThreadQuestion from "./ThreadQuestion";
import ThreadProfile from "./ThreadProfile";
import ThreadReply from "./ThreadReply";

interface ThreadCardV2Props {
  thread_id: string;
  id_user: string;
  image: string;
  createdAt: string;
  question_content: string;
  thread_content: string;
  likes: string;
  question_id: string;
}

export default function ThreadCardV2({
  thread_id,
  id_user,
  image,
  createdAt,
  question_content,
  thread_content,
  likes,
  question_id,
}: ThreadCardV2Props) {
  return (
    <article className="mb-4 break-inside p-6 rounded-xl bg-white flex flex-col bg-clip-border shadow-sm">
      <div className="flex pb-1 items-center justify-between">
        <ThreadProfile
          id_user={id_user}
          imgLink={image}
          createdAt={createdAt}
        />
      </div>
      <ThreadQuestion
        thread_id={thread_id}
        question_content={question_content}
        thread_content={thread_content}></ThreadQuestion>
      <div className="py-4">
        <ThreadAttributes like={likes} />
      </div>
      <div className="relative">
        <ThreadReply />
      </div>
    </article>
  );
}
