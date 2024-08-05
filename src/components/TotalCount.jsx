import { ArrowDownward, ArrowUpward } from "@mui/icons-material";

const countData = [
  {
    id: 1,
    title: "Total Orders",
    imgUrl: "/assets/total-orders.png",
    percentage: 3,
    count: 75,
    value: "positive",
  },
  {
    id: 2,
    title: "Orders Delivered",
    imgUrl: "/assets/orders-delivered.png",
    percentage: 3,
    count: 70,
    value: "negative",
  },
  {
    id: 3,
    title: "Orders Cancelled",
    imgUrl: "/assets/orders-cancelled.png",
    percentage: 3,
    count: 5,
    value: "positive",
  },
  {
    id: 4,
    title: "Total Revenue",
    imgUrl: "/assets/revenue.png",
    percentage: 3,
    count: 12,
    value: "negative",
  },
];
export default function TotalCount() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-1 lg:gap-3 w-full sm:w-2/3">
      {countData.map((item) => (
        <div
          key={item?.id}
          className="bg-blackColorLight rounded-lg p-2 sm:p-3 h-40 grid grid-rows-3 text-left"
        >
          <img src={item?.imgUrl} alt="icon" className="w-12 h-12" />
          <p className="font-semibold my-2">{item?.title}</p>
          <div className="flex flex-row items-center justify-between">
            <p className="text-xl lg:text-2xl font-bold">{item?.count}</p>
            <p
              className={`${
                item?.value === "positive" ? "text-green-500" : "text-red-500"
              }`}
            >
              {item?.value === "positive" ? <ArrowUpward /> : <ArrowDownward />}
              {item?.percentage}%
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
