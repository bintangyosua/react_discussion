import AllThreads from "../Elements/AllThreads/Index";
import Thread from "../Elements/NewThread/Index";

const MainHome = () => {
  return (
    <div className="mr-96">
      <Thread />
      <div className="">
        <AllThreads />
      </div>
    </div>
  );
};

export default MainHome;
