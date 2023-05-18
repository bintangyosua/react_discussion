import Button from "./Button";

const Content = () => {
  return (
    <div>
      <form action="http://localhost:3000/api/threads" method="POST">
        <input type="text" hidden name="thread_id" defaultValue="" />
        <div className="px-4 py-2 bg-white rounded-t-lg">
          <input
            type="text"
            name="thread_title"
            className="w-full px-0 text-sm text-gray-900 bg-white border-0 focus:ring-0"
            placeholder="Title"
          />
        </div>
        <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 ">
          <div className="px-4 py-2 bg-white rounded-t-lg ">
            <label htmlFor="thread_content" className="sr-only">
              Your comment
            </label>
            <textarea
              id="thread_content"
              rows={4}
              className="w-full px-0 text-sm text-gray-900 bg-white border-0 focus:ring-0"
              placeholder="Write a discussion"
              name="thread_content"
              required></textarea>
          </div>
          <div className="flex items-center justify-between px-3 py-2 border-t">
            <button
              type="submit"
              className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-blue-800">
              Post Discussion
            </button>
            <div className="flex pl-0 space-x-1 sm:pl-2">
              <Button path_d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" />
              <Button path_d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" />
              <Button path_d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Content;
