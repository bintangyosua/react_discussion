interface ThreadModel {
  thread_id: string;
  thread_content: string;
  id_user: string;
  question_id: string;
  question_content?: string;
}

export default function ThreadCard({
  thread_id,
  thread_content,
  id_user,
  question_id,
  question_content,
}: ThreadModel) {
  return (
    <div>
      <a key={thread_id} href={`http://localhost:5173/page/${thread_id}`}>
        <div className="flex flex-col gap-4 mb-4">
          <div className="border border-gray-300 rounded-md p-4 bg-white">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              {question_content}
            </h5>
            <p className="text-gray-600 mb-2">Penulis: {id_user}</p>
            {thread_content !== null ? (
              <p
                key={thread_id}
                className="text-gray-800"
                style={{ whiteSpace: "pre-wrap" }}
                dangerouslySetInnerHTML={{
                  __html:
                    thread_content.length > 400
                      ? `${thread_content.substring(0, 400)}...`
                      : thread_content,
                }}></p>
            ) : null}
          </div>
        </div>
      </a>
    </div>
  );
}
