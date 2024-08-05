import HomeIcon from "@mui/icons-material/Home";
import TaskOutlinedIcon from "@mui/icons-material/TaskOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import { useState } from "react";

const sidebarItems = [
  {
    id: 1,
    component: HomeIcon,
  },
  {
    id: 2,
    component: AssessmentOutlinedIcon,
  },
  {
    id: 3,
    component: TaskOutlinedIcon,
  },
  {
    id: 4,
    component: AccountBalanceWalletOutlinedIcon,
  },
  {
    id: 5,
    component: LocalMallOutlinedIcon,
  },
];
function Sidebar() {
  const [selected, setSelected] = useState(1);
  return (
    <div className="bg-blackColor h-[calc(100vh-64px)] w-16 py-2 flex flex-col items-center">
      {sidebarItems.map((item) => (
        <item.component
          key={item.id}
          fontSize="large"
          className={`my-3 !w-full cursor-pointer ${
            selected === item?.id &&
            "text-blue-500 border-l-2 border-l-blue-500"
          }`}
          onClick={() => setSelected(item?.id)}
        />
      ))}
      <LogoutOutlinedIcon
        fontSize="large"
        className="mt-auto cursor-pointer mb-3"
      />
    </div>
  );
}

export default Sidebar;
