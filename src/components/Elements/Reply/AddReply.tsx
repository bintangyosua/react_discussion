import { useParams } from "react-router-dom";

export default function AddReply() {
  const { thread_id } = useParams();
  const id_user = "nicholas";

  return (
    <div className="max-w-full mb-5  mx-auto">
      <div className="mx-4">
        <form
          action="http://localhost:3000/api/replies/add-reply"
          method="POST">
          <input type="text" name="reply_id" defaultValue={""} hidden />
          <input type="text" name="thread_id" defaultValue={thread_id} hidden />
          <input type="text" name="id_user" defaultValue={id_user} hidden />
          <div className="">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-90">
              Your Reply
            </label>
            <textarea
              name="reply_content"
              id="message"
              rows={4}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Write your thoughts here..."></textarea>
            <button
              type="submit"
              className="px-3 py-2 text-xs font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 mt-1">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
