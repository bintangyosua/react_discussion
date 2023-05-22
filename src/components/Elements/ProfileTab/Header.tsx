interface OnClick {
  onClickQuestions: React.MouseEventHandler<HTMLButtonElement>; // function of onclick from react. maybe data type
  onClickAnswers: React.MouseEventHandler<HTMLButtonElement>; // same as onclickQuestions.
}

export default function Header({ onClickQuestions, onClickAnswers }: OnClick) {
  return (
    <div className="flex w-full bg-white border mt-3 justify-around">
      <ul
        className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 rounded-t-lg bg-gray-50 "
        id="defaultTab"
        data-tabs-toggle="#defaultTabContent"
        role="tablist">
        <li className="mr-2">
          <button
            id="questions-tab"
            data-tabs-target="#questions"
            type="button"
            role="questions"
            aria-controls="questions"
            aria-selected="true"
            className="inline-block p-4 rounded-tl-lg hover:bg-gray-100"
            onClick={onClickQuestions}>
            Questions
          </button>
        </li>
        <li className="mr-2">
          <button
            id="answers-tab"
            data-tabs-target="#answers"
            type="button"
            role="tab"
            aria-controls="answers"
            aria-selected="true"
            className="inline-block p-4 hover:text-gray-600 hover:bg-gray-100 "
            onClick={onClickAnswers}>
            Answers
          </button>
        </li>
      </ul>
    </div>
  );
}
