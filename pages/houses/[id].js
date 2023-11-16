import Footer from "@/components/modules/Footer";
import Header from "@/components/modules/Header";
import Sidebar from "@/components/modules/Sidebar";
import React from "react";
import db from "./../../data/db.json";
import { useRouter } from "next/router";

const SingleHouse = () => {
  const router = useRouter();
  const { id: homeID } = router.query;

  const home = db.homes.find((home) => home.id === Number(homeID));

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-[15] w-full">
        <Header />
        <div className="container my-20">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <img src={home?.img} alt="" />
            </div>
            <div className="flex-[2]">
              <div className="flex justify-between">
                <div className="">
                  <h2 className="font-bold text-2xl">{home?.title}</h2>
                  <div className="flex items-center gap-4 mt-2">
                    <div className="bg-green-400 text-white p-1 rounded-md text-sm">
                      ویژه
                    </div>
                    <div className="bg-[#c69963] text-white p-1 rounded-md text-sm">
                      برای اجاره
                    </div>
                  </div>
                  <p className="mt-2">آدرس : شیراز، میدان ارم</p>
                </div>
                <div className="text-2xl font-bold">
                  {home?.price.toLocaleString()} تومان
                </div>
              </div>
              <div className="flex justify-between items-center mt-8 border-b border-slate-400 pb-8">
                <h2 className="text-2xl font-bold">مرور کلی</h2>
                <p>کد ملک : {home?.code}</p>
              </div>
              <ul className="flex justify-between items-center mt-8">
                <li>نوع ملک: {home?.title}</li>
                <li>اتاق: {home?.roomCount}</li>
                <li>متراژ {home?.meterage}</li>
                <li>سال ساخت 1402</li>
              </ul>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-bold border-b border-slate-400 pb-8">
              توضیحات
            </h3>
            <p className="mt-8">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان
              جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد. مشاوران دوطرفه به
              خریدار و فروشنده مشاوره می‌دهند. یک مشاور املاک وظیفه دارد که با
              صداقت به هر دو طرف معامله مشاوره و راهنمایی درستی بدهد. مشاوران
              دوطرفه باید از هر دو طرف چه فروشنده و چه خریدار بخواهند که یک
              قرارداد نمایندگی دوطرفه را امضا کنند. قوانین و مقررات خاصی برای
              مشاوران دوطرفه وجود دارد، این دست از مشاوران نسبت به دو دسته قبل
              کارشان سخت‌تر و پیچیده‌تر است.لورم ایپسوم متن ساختگی با تولید
              سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
              چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم
              است.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default SingleHouse;
