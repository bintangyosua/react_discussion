import MainHome from "../components/Fragments/MainHome";
import Sidebar from "../components/Fragments/SideBar";
import GeneralLayout from "../components/Layouts/GeneralLayout";
import QuestionBar from "../components/Fragments/AllQuestionsCard";

const Home = () => {
  return (
    <GeneralLayout>
      <Sidebar />
      <MainHome />
      <QuestionBar />
    </GeneralLayout>
  );
};

export default Home;
