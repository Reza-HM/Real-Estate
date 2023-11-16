import React from "react";

const Menu = () => {
  return (
    <div className="w-screen h-screen bg-[#101d2c] fixed flex z-40 justify-center items-center transition-all duration-200 ease-linear">
      <ul className="flex flex-col gap-8">
        <li className="bg-[#c69963] text-white p-4 flex justify-center items-center">
          صفحه اصلی
        </li>
        <li className="bg-[#c69963] text-white p-4 flex justify-center items-center">
          ویژگی ها
        </li>
        <li className="bg-[#c69963] text-white p-4 flex justify-center items-center">
          نظرات
        </li>
        <li className="bg-[#c69963] text-white p-4 flex justify-center items-center">
          خانه ها
        </li>
        <li className="bg-[#c69963] text-white p-4 flex justify-center items-center">
          گالری
        </li>
      </ul>
    </div>
  );
};

export default Menu;
