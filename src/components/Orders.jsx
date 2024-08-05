import TableComp from "./TableComp";

const orderData = [
  {
    id: 1,
    customerName: "John Doe",
    orderNumber: "6467787",
    amount: 786,
    orderStatus: "Delivered",
    imgUrl: "/assets/avatar.png",
  },
  {
    id: 2,
    customerName: "John Doe",
    orderNumber: "6467787",
    amount: 786,
    orderStatus: "Delivered",
    imgUrl: "/assets/avatar.png",
  },
  {
    id: 3,
    customerName: "John Doe",
    orderNumber: "6467787",
    amount: 786,
    orderStatus: "Cancelled",
    imgUrl: "/assets/avatar.png",
  },
  {
    id: 4,
    customerName: "John Doe",
    orderNumber: "6467787",
    amount: 786,
    orderStatus: "Delivered",
    imgUrl: "/assets/avatar.png",
  },
  {
    id: 5,
    customerName: "John Doe",
    orderNumber: "6467787",
    amount: 786,
    orderStatus: "Cancelled",
    imgUrl: "/assets/avatar.png",
  },
];
function Orders() {
  const modifiedData = orderData.map((item) => {
    return {
      customerName: (
        <div className="flex flex-row items-center">
          <img src={item?.imgUrl} alt="avatar" className="h-8 w-8 mr-2" />
          <p>{item?.customerName}</p>
        </div>
      ),
      orderNumber: item?.orderNumber,
      amount: item?.amount,
      orderStatus: (
        <p
          className={`${
            item?.orderStatus === "Delivered"
              ? "bg-greenColorBlur text-green-500"
              : "bg-redColorBlur text-red-500"
          } rounded-xl w-24 text-center`}
        >
          {item?.orderStatus}
        </p>
      ),
    };
  });
  return (
    <div className="grid grid-cols-1 gap-x-3 bg-blackColorLight rounded-lg p-3 w-full sm:w-2/3 my-4 h-96">
      <p className="text-lg font-bold mb-3">Recent Orders</p>
      <div className="h-full overflow-auto custom-scrollbar">
        <TableComp data={modifiedData} />
      </div>
    </div>
  );
}

export default Orders;
