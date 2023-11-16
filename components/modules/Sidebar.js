import React, { useState } from "react";
import { MdOutlineMenu } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import Menu from "../templates/Menu";

const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <div className="hidden lg:flex min-h-screen bg-[#c69963] flex-1 justify-center">
        {isMenuOpen ? (
          <AiOutlineClose
            className="text-4xl text-white fixed z-50 cursor-pointer mt-4"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        ) : (
          <MdOutlineMenu
            className="text-4xl text-white fixed z-50 cursor-pointer mt-4"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        )}
      </div>
      <div className="lg:hidden fixed z-50 h-[4.5rem] top-0 left-0 right-0 bg-[#c69963] flex justify-center">
        {isMenuOpen ? (
          <AiOutlineClose
            className="text-4xl text-white fixed z-50 cursor-pointer mt-4"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        ) : (
          <MdOutlineMenu
            className="text-4xl text-white fixed z-50 cursor-pointer mt-4"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        )}
      </div>
      {isMenuOpen && <Menu />}
    </>
  );
};

export default Sidebar;
