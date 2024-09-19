import React from "react";
import { Link } from "react-router-dom";
import { RiEditBoxLine } from "react-icons/ri";
import { IoPersonSharp } from "react-icons/io5";

const Nav = () => {
  // logic

  // view
  return (
    <nav className="fixed bottom-0 bg-churead-gray-800 w-full max-w-[572px]">
      <ul className="flex justify-center">
        <li>
          <Link to="/" className="block p-6">
            <img src="./images/icon-home.svg" alt="Home으로 가기" />
          </Link>
        </li>
        <li>
          <Link to="/" className="block p-6">
            {/* <img src="./images/icon-home.svg" alt="Home으로 가기" /> */}
            <RiEditBoxLine size={"28px"}/>
          </Link>
        </li>
        <li>
          <Link to="/" className="block p-6">
            {/* <img src="./images/icon-home.svg" alt="Home으로 가기" /> */}
            <IoPersonSharp size={'28px'}/>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
