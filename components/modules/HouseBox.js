import Link from "next/link";
import React from "react";

const HouseBox = ({ title, img, roomCount, meterage, id, price }) => {
  return (
    <div className="flex flex-col bg-[#f9f7f6]">
      <img src={img} className="brightness-50" alt="" />
      <div className="bg-[#101d2c] w-full py-2 px-4 -m-6 z-10 text-white lg:w-60 mx-auto text-center">
        {title}
      </div>
      <div className="p-4 grid grid-cols-2 items-center place-items-center mt-8 gap-4">
        <p>مالدیو</p>
        <p>{roomCount} اتاق</p>
        <p>{meterage} متر مربع</p>
        <p>{price.toLocaleString()} میلیون تومان</p>
      </div>
      <Link
        href={`/houses/${id}`}
        className="bg-[#c69963] text-white text-center p-4 mt-8 font-bold w-full border-none outline-none focus:outline-none hover:bg-[#c69962]/90"
      >
        مشاهده ملک
      </Link>
    </div>
  );
};

export default HouseBox;
