import Link from "next/link";
import React from "react";

const Stories = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="container bg-[#c69963] flex-1 relative flex justify-center items-center">
        <img
          src="/img/story-1.jpeg"
          className="w-[500px] rounded-lg mb-20 mt-20 md:mt-60"
          alt=""
        />
        <img
          src="/img/story-2.jpeg"
          className="z-10 absolute w-[400px] hidden lg:block -left-12 top-20 shadow-xl rounded-lg"
          alt=""
        />
      </div>
      <div className="bg-[#f9f7f6] container flex-1 flex flex-col justify-center gap-4 mt-8 md:mt-0">
        <h4 className="text-[#c69963] font-bold">مشتریان خوشحال</h4>
        <h1 className="text-4xl font-bold">”بهترین تصمیم زندگی ما“</h1>
        <p>
          متنی ساختگی و بدون معنی است که برای امتحان فونت و یا پر کردن فضا در یک
          طراحی گرافیکی و یا صنعت چاپ استفاده میشود. طراحان وب و گرافیک از این
          متن برای پرکردن
        </p>
        <Link
          href="/houses"
          className="bg-[#c69963] text-white p-4 font-bold w-60 border-none text-center outline-none focus:outline-none hover:bg-[#c69962]/90"
        >
          خانه خود را پیدا کنید
        </Link>
      </div>
    </div>
  );
};

export default Stories;
