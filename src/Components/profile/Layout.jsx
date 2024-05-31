import { useState, useEffect } from "react";
import Sidebar from "./sidebar";
import { Menu } from "lucide-react";

const Layout = ({ children }) => {
  // toggle sidebar
  const [sidebar, setSidebar] = useState(false);
  const toggleSidebar = () => setSidebar(!sidebar);

  // Close sidebar if window width is less than 1200
  useEffect(() => {
    window.innerWidth < 1280 ? setSidebar(false) : setSidebar(true);

    const handleResize = () => {
      // Open sidebar if window width is greater than 1200
      if (window.innerWidth > 1280) {
        setSidebar(true);
      } else {
        setSidebar(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex   ">
      {/* Sidebar */}
      {sidebar && <Sidebar sidebar={sidebar} toggleSidebar={toggleSidebar} />}
      <div
        className={`flex flex-col w-full gap-4  py-2 min-h-screen ${
          sidebar ? "xl:ml-[19rem]" : ""
        }`}
      >
        {/* menu icon to open and close sidebar */}
        <div className=" shadow-lg text-text fixed   flex gap-2 w-full top-0 bg-white text-gray-600 py-3 px-5 z-40 b">
          <Menu onClick={toggleSidebar} className="cursor-pointer" /> Profile
        </div>
        <br />

        <div className="p-[15px] lg:px-20 ">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
