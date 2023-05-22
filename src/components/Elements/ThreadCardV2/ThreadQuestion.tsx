interface Question {
  thread_id: string;
  question_content: string;
  thread_content: string;
  question_id: string;
}

export default function ThreadQuestion({
  thread_id,
  question_content,
  thread_content,
  question_id,
}: Question) {
  return (
    <>
      <h2 className="text-xl font-bold">{question_content}</h2>
      <div className="py-0.5">
        {thread_content !== null ? (
          <p
            key={thread_id}
            className="text-gray-800"
            style={{ whiteSpace: "pre-wrap" }}
            dangerouslySetInnerHTML={{
              __html:
                thread_content.length > 400
                  ? `${thread_content.substring(
                      0,
                      600
                    )}... ${`<a href="http://localhost:5173/questions/${question_id}/threads/${thread_id}">(Read more)</a>`}`
                  : thread_content,
            }}></p>
        ) : null}
      </div>
    </>
  );
}
