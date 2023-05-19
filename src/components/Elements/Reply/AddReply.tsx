export default function AddReply() {
  return (
    <div className="max-w-full mb-5  mx-auto">
      <div className="mx-4">
        <form action="http://localhost:3000/api/replies/add-reply">
          <div className="">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-90">
              Your Reply
            </label>
            <textarea
              id="message"
              rows={4}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Write your thoughts here..."></textarea>
            <button
              type="submit"
              className="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 mt-1">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
