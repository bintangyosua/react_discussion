import MainHome from "../components/Fragments/MainHome";
import Sidebar from "../components/Fragments/SideBar";
import GeneralLayout from "../components/Layouts/GeneralLayout";

const Home = () => {
  return (
    <GeneralLayout>
      <Sidebar />
      <MainHome />
    </GeneralLayout>
  );
};

export default Home;
