import AThread from "../components/Fragments/AThread";
import Sidebar from "../components/Fragments/SideBar";
import GeneralLayout from "../components/Layouts/GeneralLayout";

export default function Page() {
  return (
    <GeneralLayout>
      <Sidebar />
      <AThread />
    </GeneralLayout>
  );
}
