import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import ProfitBar from "./ProfitBar";

const profitData = {
  amount: 6759.25,
  percentage: 3,
  value: "positive",
};
function NetProfit() {
  return (
    <div className="bg-blackColorLight rounded-lg md:h-40 p-3 mt-4 sm:mt-0 sm:ml-6 w-full sm:w-1/3">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex-1 grid grid-rows-3">
          <p className="font-bold">Net Profit</p>
          <p className="text-2xl font-bold ">${profitData?.amount}</p>
          <p
            className={`${
              profitData?.value === "positive"
                ? "text-green-500"
                : "text-red-500"
            }`}
          >
            {profitData?.value === "positive" ? (
              <ArrowUpward />
            ) : (
              <ArrowDownward />
            )}
            {profitData?.percentage}%
          </p>
        </div>
        <div className="flex-1 text-center flex flex-col justify-center items-center">
          <ProfitBar value={70} />
          <p className="text-xs mt-2 sm:mt-0">*The values here has been rounded off.</p>
        </div>
      </div>
    </div>
  );
}

export default NetProfit;
