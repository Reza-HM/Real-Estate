import Footer from "@/components/modules/Footer";
import HouseBox from "@/components/modules/HouseBox";
import Sidebar from "@/components/modules/Sidebar";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import db from "./../../data/db.json";

const Houses = () => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("-1");
  const [homes, setHomes] = useState([...db.homes]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const newHomes = db.homes.filter((home) => home.title.includes(search));
    setHomes(newHomes);
  }, [search]);

  useEffect(() => {
    switch (sort) {
      case "price": {
        const newHomes = [...homes].sort((a, b) => a.price - b.price);
        setHomes(newHomes);
        break;
      }
      case "room": {
        const newHomes = [...homes].sort((a, b) => a.roomCount - b.roomCount);
        setHomes(newHomes);
        break;
      }
      case "meterage": {
        const newHomes = [...homes].sort((a, b) => a.meterage - b.meterage);
        setHomes(newHomes);
        break;
      }
      default: {
        setHomes([...db.homes]);
      }
    }
  }, [sort]);

  const paginateHandler = (event, page) => {
    event.preventDefault();
    const endIndex = 3 * page;
    const startIndex = endIndex - 3;

    const paginatedHomes = db.homes.slice(startIndex, endIndex);
    setHomes(paginatedHomes);

    // Codes
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-[15] w-full">
        <div className="flex flex-col md:flex-row">
          <div className="px-8 md:container flex flex-col gap-4 flex-[2] bg-[#101d2cef] py-20">
            <img src="/img/logo.png" className="mx-auto w-40" alt="" />
            <div className="my-12">
              <p className="text-[#c69963] font-bold">خانه خودتان:</p>
              <h1 className="text-white text-3xl font-bold mt-4">
                با خرید خانه نهایت آزادی را احساس کنید
              </h1>
            </div>
            <Link
              href="/houses"
              className="bg-[#c69963] text-white text-center p-4 font-bold w-60 border-none outline-none focus:outline-none hover:bg-[#c69962]/90"
            >
              لیست خانه{" "}
            </Link>
          </div>
          <div className="flex flex-col gap-4 flex-1 bg-[#101d2c] justify-center items-center py-20">
            <h3 className="text-[#c69963] text-xl font-bold">
              سه خانه پرطرفدار
            </h3>
            <div className="flex flex-col sm:flex-row md:flex-col items-center md:items-start gap-8">
              <div className="flex items-center gap-2 mt-4">
                <img
                  src="/img/house-1.jpeg"
                  className="w-16 h-16 rounded-[50%]"
                />
                <div className="space-y-2">
                  <p className="text-white text-lg">کاخ سفید</p>
                  <p className="text-slate-400 text-sm">869 فروش خانه</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <img
                  src="/img/house-2.jpeg"
                  className="w-16 h-16 rounded-[50%]"
                />
                <div className="space-y-2">
                  <p className="text-white text-lg">باغ سبز</p>
                  <p className="text-slate-400 text-sm">243 فروش خانه</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <img
                  src="/img/house-3.jpeg"
                  className="w-16 h-16 rounded-[50%]"
                />
                <div className="space-y-2">
                  <p className="text-white text-lg">ویلای لواسون</p>
                  <p className="text-slate-400 text-sm">130 فروش خانه</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container my-16">
          <div className="flex justify-center lg:justify-between flex-wrap gap-8 items-center">
            <select
              name=""
              id=""
              defaultValue={sort}
              onChange={(e) => setSort(e.target.value)}
              className="border border-slate-400 rounded-md py-2 px-4 w-96"
            >
              <option value="-1">انتخاب کنید</option>
              <option value="price">بر اساس قیمت</option>
              <option value="room">بر اساس تعداد اتاق</option>
              <option value="meterage">بر اساس اندازه</option>
            </select>
            <input
              type="text"
              className="py-2 px-4 w-96 rounded-md outline-none focus:outline-none border border-slate-400"
              placeholder="جستجو کنید..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-16">
            {homes.slice(0, 3).map((home) => (
              <HouseBox key={home.id} {...home} />
            ))}
          </div>

          <div className="flex items-center justify-center gap-4 mt-16">
            {Array.from({ length: Math.ceil(db.homes.length / 3) }).map(
              (item, index) => (
                <div
                  key={index + 1}
                  onClick={(event) => paginateHandler(event, index + 1)}
                  className="rounded-[50%] flex justify-center items-center w-12 h-12 cursor-pointer bg-[#c69963] text-white hover:bg-[#54483a] transition-all duration-300"
                  id=""
                >
                  {index + 1}
                </div>
              )
            )}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Houses;
