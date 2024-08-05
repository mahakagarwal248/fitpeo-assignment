import { ArrowRight } from "@mui/icons-material";

const menuData = [
  {
    id: 1,
    title: "Goals",
    imgUrl: "/assets/goals.png",
  },
  {
    id: 2,
    title: "Dishes",
    imgUrl: "/assets/dishes.png",
  },
  {
    id: 3,
    title: "Menus",
    imgUrl: "/assets/menu.png",
  },
];
function Menu() {
  return (
    <div className="bg-blackColorLight rounded-lg p-3 sm:ml-6 mt-4 w-full sm:w-1/3 grid grid-rows-3">
      {menuData.map((item) => (
        <div key={item?.id} className="flex flex-row items-center p-2">
          <img src={item?.imgUrl} alt="icon" className="w-12 h-12 mr-3" />
          <p className="text-lg font-bold">{item?.title}</p>
          <button className="ml-auto p-1 rounded-full bg-blackColorLighter">
            <ArrowRight fontSize="medium" />
          </button>
        </div>
      ))}
    </div>
  );
}

export default Menu;
