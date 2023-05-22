import ProfileCard from "../components/Elements/ProfileCard/Index";
import ProfileTab from "../components/Elements/ProfileTab/Index";
import GeneralLayout from "../components/Layouts/GeneralLayout";

export default function Profile() {
  return (
    <GeneralLayout>
      <ProfileCard />
      <ProfileTab />
    </GeneralLayout>
  );
}
