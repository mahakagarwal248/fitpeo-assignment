import Activity from "../components/Activity";
import Feedback from "../components/Feedback";
import Menu from "../components/Menu";
import NetProfit from "../components/NetProfit";
import Orders from "../components/Orders";
import TotalCount from "../components/TotalCount";

function Home() {
  return (
    <div className="p-4 text-left w-full h-full overflow-auto custom-scrollbar pb-20">
      <p className="font-semibold text-xl mb-4">Dashboard</p>
      <div className="flex flex-col sm:flex-row w-full">
        <TotalCount />
        <NetProfit />
      </div>
      <div className="flex flex-col sm:flex-row w-full">
        <Activity />
        <Menu />
      </div>
      <div className="flex flex-col sm:flex-row w-full">
        <Orders />
        <Feedback />
      </div>
    </div>
  );
}

export default Home;
