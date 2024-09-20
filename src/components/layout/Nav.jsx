import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { RiHomeLine } from "react-icons/ri";
import { RiEditBoxLine } from "react-icons/ri";
import { BsPerson } from "react-icons/bs";
import { RiHomeFill } from "react-icons/ri";
import { RiEditBoxFill } from "react-icons/ri";
import { BsPersonFill } from "react-icons/bs";



const Nav = () => {
  // logic

  const location = useLocation();




  
  const navList = [
    {
    id: 1,
    pathName: "/",
    icon: <RiHomeLine size={"28px"}/>,
    activeIcon: <RiHomeFill size={"28px"}/>,
  },
  {
  id: 2,
    pathName: "/post",
    icon: <RiEditBoxLine size={"28px"}/>,
    activeIcon: <RiEditBoxFill size={"28px"}/>,
  },
  {
  id: 3,
    pathName: "/profile",
    icon: <BsPerson size={'28px'}/>,
    activeIcon: <BsPersonFill size={'28px'}/>,
  },
]


  // view
  return (
    <nav className="fixed bottom-0 bg-churead-gray-800 w-full max-w-[572px]">
      <ul className="flex justify-center">
        {navList.map(nav => (
        <li key={nav.id}>
          <Link to={nav.pathName} className="block p-6">
            {location.pathname === nav.pathName ? nav.activeIcon : nav.icon}
          </Link>
        </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
