import { useEffect, useLayoutEffect, useState } from "react";

function Navbar() {
  const [width, setWidth] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const getWidth = () => {
    setWidth(window.innerWidth);
  };

  useLayoutEffect(() => {
    getWidth();
    window.addEventListener("resize", getWidth);
    getWidth();
    return () => window.removeEventListener("resize", getWidth);
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      setShowMenu(false);
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleMenuClick = () => setShowMenu(!showMenu);
  const handleItemClick = () => setShowMenu(!showMenu);

  return (
    <div className="bg-blackColor h-16 p-2 flex flex-row items-center">
      <img src="/assets/logo.png" alt="logo" className="h-9 w-9 ml-3" />
      <div className="flex flex-row h-9 items-center mx-2 sm:mx-8 border border-grey-500 bg-blackColorLight rounded-lg">
        <img
          src="/assets/search-icon.png"
          alt="logo"
          className="h-5 w-5 mx-2 mr-3"
        />
        <input
          className="bg-blackColorLight w-32 sm:w-full"
          placeholder="Search"
        />
      </div>
      {width > 640 ? (
        <div className="flex flex-row ml-auto">
          <div className="rounded-full p-2 bg-blackColorLighter mx-2">
            <img src="/assets/message.png" alt="message" className="h-5 w-5" />
          </div>
          <div className="rounded-full p-2 bg-blackColorLighter mx-2">
            <img src="/assets/setting.png" alt="message" className="h-5 w-5" />
          </div>
          <div className="rounded-full p-2 bg-blackColorLighter mx-2">
            <img
              src="/assets/notification.png"
              alt="message"
              className="h-5 w-5"
            />
          </div>
          <img
            src="/assets/avatar.png"
            alt="message"
            className="h-9 w-9 mx-2"
          />
        </div>
      ) : (
        <div className={`flex flex-col ml-auto ${showMenu && "mt-[220px]"}`}>
          <button
            className="border border-white rounded-lg py-2 px-4 text-center"
            onClick={handleMenuClick}
          >
            <img
              src="/assets/hamburger.png"
              alt="menu"
              className="h-6 w-6 m-auto"
            />
          </button>
          {showMenu && (
            <div className="bg-blackColor ml-auto z-50 px-2 mt-3 py-1 rounded-lg">
              <div
                className="rounded-full p-2 bg-blackColorLighter my-2"
                onClick={handleItemClick}
              >
                <img
                  src="/assets/message.png"
                  alt="message"
                  className="h-6 w-6"
                />
              </div>
              <div
                className="rounded-full p-2 bg-blackColorLighter my-2"
                onClick={handleItemClick}
              >
                <img
                  src="/assets/setting.png"
                  alt="message"
                  className="h-6 w-6"
                />
              </div>
              <div
                className="rounded-full p-2 bg-blackColorLighter my-2"
                onClick={handleItemClick}
              >
                <img
                  src="/assets/notification.png"
                  alt="message"
                  className="h-6 w-6"
                />
              </div>
              <img
                src="/assets/avatar.png"
                alt="message"
                className="h-10 w-10 my-2"
                onClick={handleItemClick}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Navbar;
