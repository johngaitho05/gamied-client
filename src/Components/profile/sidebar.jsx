import userImage from "../../assets/profile2.jpg";
import { useState } from "react";
import { ChevronDown, ArrowLeft } from "lucide-react";
import Levels from "./Levels.jsx";
import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";
import {getUser, parseMedia} from "../../helpers/utils.js";

const Sidebar = ({ sidebar, toggleSidebar }) => {
  const user = getUser();
  const [activeIndex, setActiveIndex] = useState(null);
  const levelIndex = Levels.findIndex(level => level.name === user.rank);

  return (
    <div
      className={`pt-5 top-0 left-0 text-text h-screen transform duration-300 border-r border-gray-300 flex flex-col ${
        activeIndex !== null ? "overflow-y-scroll custom-scrollbar" : ""
      } ${sidebar ? "w-[19rem]" : ""}`}
    >
      {/* user profile */}
      <div className="flex flex-col items-center xl:gap-5 justify-between xl:justify-start pb-5 px-10">
        <span className="bg-gray-200 rounded-[50%]">
          <Avatar src={parseMedia(user?.avatar)} style={{ height: "100px", width: "100px" }} />
        </span>
        <span>
          <p className="flex gap-2">
            <span className="text-cta">Name:</span>
            <span>{user?.name}</span>
          </p>
          <p className="flex gap-2">
            <span className="text-cta">Email:</span>
            <span>{user?.email}</span>
          </p>
          <p className="flex gap-2">
            <span className="text-cta">Rank:</span>
            <span>({user.points}XP)</span>
          </p>
        </span>
        <span
          onClick={toggleSidebar}
          className="border border-gray-400 flex items-start xl:hidden cursor-pointer text-gray-600"
        >
          <ArrowLeft size={24} strokeWidth={2} />
        </span>
      </div>

      <ul className="mt-8 flex w-full flex-col gap-6 text-base pl-5 px-5">
        {Levels.map((level, index) => (
          <li
            key={index}
            className={`flex justify-between flex-col gap-2 transform duration-300 ${
              index <= levelIndex ? "" : "opacity-30"
            }`}
          >
            <div className="flex justify-between w-full">
              <span className="flex items-center gap-5  w-full">
                <div className="h-10 w-10 bg-blue rounded-full flex items-center justify-center">
                  <img
                    src={level.Image}
                    alt=""
                    className="h-8 w-8 rounded-full"
                  />
                </div>
                <p className="flex gap-2 border p-2 text-sm border-blue rounded-lg line-clamp-1 w-[80%] ">
                  <span>{level.name}</span>
                  <span>{level.Points}</span>
                </p>
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
