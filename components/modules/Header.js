import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="px-8 md:container flex flex-col items-center md:items-start justify-center gap-4 flex-[2] bg-[#101d2cef] py-20">
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
          املاک ما را مشاهده کنید
        </Link>
        <p className="text-slate-400 text-center font-bold grid grid-cols-3 items-center before:bg-slate-400 before:block before:content-[''] before:h-px after:bg-slate-400 after:contents-[''] after:h-px after:block">
          دیده می‌شود در:
        </p>
        <figure className="flex justify-center md:justify-between flex-wrap items-center gap-8">
          <img src="/img/logo-bbc.png" className="w-32 opacity-60" alt="" />
          <img src="/img/logo-bi.png" className="w-32 opacity-60" alt="" />
          <img src="/img/logo-forbes.png" className="w-32 opacity-60" alt="" />
          <img
            src="/img/logo-techcrunch.png"
            className="w-32 opacity-60"
            alt=""
          />
        </figure>
      </div>
      <div className="flex flex-col gap-4 flex-1 bg-[#101d2c] justify-center items-center py-20">
        <h3 className="text-[#c69963] text-xl font-bold">سه مالک برتر</h3>
        <div className="flex flex-col sm:flex-row md:flex-col items-center md:items-start gap-8">
          <div className="flex items-center  gap-2">
            <img
              src="/img/realtor-1.jpeg"
              className="w-16 h-16 rounded-[50%]"
            />
            <div className="space-y-2">
              <p className="text-white text-lg">مهدی ایلخانی نسب</p>
              <p className="text-slate-400 text-sm">869 فروش خانه</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <img
              src="/img/realtor-2.jpeg"
              className="w-16 h-16 rounded-[50%]"
            />
            <div className="space-y-2">
              <p className="text-white text-lg">کوثر بهشتی</p>
              <p className="text-slate-400 text-sm">243 فروش خانه</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <img
              src="/img/realtor-3.jpeg"
              className="w-16 h-16 rounded-[50%]"
            />
            <div className="space-y-2">
              <p className="text-white text-lg">عرشیا احسنی</p>
              <p className="text-slate-400 text-sm">130 فروش خانه</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
