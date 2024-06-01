import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { AlignJustify, X, User } from "lucide-react";
import { links } from "../../data";
import { Button, Dropdown, Select, Avatar } from "antd";
import { DownOutlined } from "@ant-design/icons";
import Image from "../../assets/profile2.jpg";
import {getUser, parseMedia} from "../../helpers/utils.js";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState(getUser())
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    window.location('/')
  };

  const items = [
    {
      key: "2",
      label: <Link to={"/profile"}>Profile</Link>,
    },
    {
      key: "3",
      label: (
        <Link to={"/"} onClick={handleLogout}>
          Logout
        </Link>
      ),
    },
  ];

  return (
    <div
      className={`w-full fixed top-0 left-0 z-20  ${
        scrolled ? "bg-white shadow-md" : " lg:bg-transparent"
      }  ${open ? "bg-white lg:bg-transparent" : " "}`}
    >
      <div className="md:flex items-center justify-between  py-2 md:px-0 px-7   max-w-7xl mx-auto">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center gap-1"
          onClick={() => navigate("/")}
        >
          <img
            src={Logo}
            alt="EventPulse"
            className="w-[4rem] h-[4rem] object-cover"
          />
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7"
        >
          {open ? <X color="#222" /> : <AlignJustify color="#222" />}
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in text-secondary ${
            open ? "top-12" : "top-[-490px]"
          } ${open ? "bg-white lg:bg-transparent " : " bg-transparent"}`}
        >
          {links.map((link) => (
            <li
              key={link.name}
              className="md:ml-8 md:my-0 my-7 font-semibold flex capitalize lg:text-secondary gap-4 lg:pr-20  "
            >
              <a
                href={link.link}
                className={` hover:text-cta duration-500  ${
                  location.pathname === link.link
                    ? "text-cta border-b-4 border-blue"
                    : ""
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
          <div>
            {user ? (
              <Dropdown
                menu={{ items }}
                placement="bottomRight"
                className="p-0"
              >
                <div className="border-none text-white text-md flex gap-2">
                  <img
                    src={parseMedia(user.avatar) || 'https://bit.ly/3Rbhgml'}
                    alt=""
                    className="h-[2rem ] w-[2rem] rounded-full"
                  />
                  <DownOutlined className="text-black mr-2 mt-2" />
                </div>
              </Dropdown>
            ) : (
              <div className="flex font-semibold gap-2">
                <User />
                <Link to={"/login"}> Login</Link>
              </div>
            )}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Header;
