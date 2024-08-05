import ActivityChart from "./ActivityChart";

function Activity() {
  return (
    <div className="grid grid-cols-1 gap-x-3 bg-blackColorLight rounded-lg p-3 w-full sm:w-2/3 mt-4">
      <p className="text-lg font-bold mb-3">Acitivity</p>
      <ActivityChart />
    </div>
  );
}

export default Activity;
