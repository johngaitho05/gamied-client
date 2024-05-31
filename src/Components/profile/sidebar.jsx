import userImage from "../../assets/profile2.jpg";
import { useState } from "react";
import { ChevronDown, ArrowLeft } from "lucide-react";
import navItems from "./NavLinks";
import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";

const Sidebar = ({ sidebar, toggleSidebar }) => {
  const user = "";
  console.log(user);
  const [activeIndex, setActiveIndex] = useState(null);

  // function to toggle active index
  const toggleActiveIndex = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div
      className={` pt-5  top-0 left-0    text-text   h-screen   transform duration-300  shadow-lg border-r border-t  flex flex-col  ${
        activeIndex !== null ? "overflow-y-scroll custom-scrollbar" : ""
      } ${sidebar ? "w-[19rem]" : ""}`}
    >
      {/* user profile */}
      <div className="flex flex-col items-center xl:gap-5 justify-between xl:justify-start  border-b  pb-5 px-10">
        <span className="bg-gray-200 rounded-[50%] ">
          <Avatar src={userImage} style={{ height: "100px", width: "100px" }} />
          {/* <img src={user} alt="" className="w-14 h-14 object-fit" /> */}
        </span>
        <span className="">
          <p className="flex gap-2 ">
            <span className="text-cta">Name:</span>
            <span>Jane Doe</span>
          </p>
          <p className="flex gap-2 ">
            <span className="text-cta">Email:</span>
            <span>jane@gmail.com</span>
          </p>
          <p className="flex gap-2 ">
            <span className="text-cta">Rank:</span>
            <span>(8540XP)</span>
          </p>
        </span>
        <span
          onClick={toggleSidebar}
          className="border border-gray-400 flex items-start xl:hidden cursor-pointer text-gray-600"
        >
          <ArrowLeft size={24} strokeWidth={2} />
        </span>
      </div>
      {/* overview */}
      <div className="flex justify-between mt-5 items-center text-center text-sm"></div>

      <ul className="mt-8 flex w-full flex-col gap-6 text-base pl-5 px-5">
        {navItems.map((item, index) => (
          <li
            key={index}
            className="flex justify-between flex-col gap-2 transform duration-300"
          >
            <Link
              to={item.link}
              onClick={() => toggleActiveIndex(index)}
              className="flex justify-between w-full"
            >
              <span className="flex items-center gap-5">
                <div className="h-10 w-10 bg-blue rounded-full flex items-center justify-center">
                  <img
                    src={item?.Image}
                    alt=""
                    className="h-8  w-8 rounded-full"
                  />
                </div>
                <p className="flex gap-2 border p-2 text-sm border-blue rounded line-clamp-1 w-[13rem]">
                  <span>{item.label}</span>
                  <span>{item.Points}</span>
                </p>
              </span>
              {item.children && (
                <ChevronDown
                  size={20}
                  className={`${
                    activeIndex === index
                      ? "transform rotate-180 duration-300"
                      : ""
                  }`}
                />
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
