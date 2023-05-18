import AllThreads from "../Elements/AllThreads/Index";
import Thread from "../Elements/NewThread/Index";

const MainHome = () => {
  return (
    <div className="container my-5 mx-auto w-1/3">
      <Thread />
      <div className="">
        <AllThreads />
      </div>
    </div>
  );
};

export default MainHome;
