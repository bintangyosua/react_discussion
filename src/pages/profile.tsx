import AllThreads from "../components/Elements/AllThreads/Index";
import ProfileCard from "../components/Elements/ProfileCard/Index";
import Sidebar from "../components/Fragments/SideBar";
import GeneralLayout from "../components/Layouts/GeneralLayout";

export default function Profile() {
  return (
    <GeneralLayout>
      <Sidebar />
      <div>
        <ProfileCard />
        <AllThreads />
      </div>
    </GeneralLayout>
  );
}
