import Header from "./Header";
import Question from "../QuestionCard/Index";
import ThreadCard from "../ThreadCardV3/Index";
import { useEffect, useState } from "react";

interface OnClick {
  onClickQuestions: React.MouseEventHandler<HTMLButtonElement>; // function of onclick from react. maybe data type
  onClickAnswers: React.MouseEventHandler<HTMLButtonElement>; // same as onclickQuestions.
}

export default function ProfileTab() {
  const [showQuestions, setShowQuestions] = useState(true);

  useEffect(() => {
    // const showAnswers = !showQuestions;
  }, []);

  return (
    <>
      <Header
        onClickQuestions={() => setShowQuestions(true)}
        onClickAnswers={() => setShowQuestions(false)}
      />
      {showQuestions ? <Question /> : <ThreadCard />}
    </>
  );
}
