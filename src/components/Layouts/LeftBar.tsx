import CategoryBar from "../Fragments/CategoryBar";
import Links from "../Fragments/Links";

export default function LeftBar() {
  return (
    <div className="w-72 mr-3">
      <CategoryBar />
      <Links />
      <div className="my-3" />
    </div>
  );
}
