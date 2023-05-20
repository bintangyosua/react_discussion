import QuestionBar from "../components/Fragments/QuestionBar";
import QuestionFull from "../components/Fragments/QuestionFull";
import Sidebar from "../components/Fragments/SideBar";
import GeneralLayout from "../components/Layouts/GeneralLayout";

export default function Question() {
  return (
    <GeneralLayout>
      <Sidebar />
      <QuestionFull />
      <QuestionBar />
    </GeneralLayout>
  );
}
