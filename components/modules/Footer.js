import React from "react";

const Footer = () => {
  return (
    <div className="px-8 xl:container bg-[#101d2c] text-white">
      <ul className="my-20 pt-20 flex flex-wrap gap-8 justify-center md:justify-between items-center">
        <li>خانه رویایی خود را پیدا کنید</li>
        <li>درخواست پروپوزال</li>
        <li>برنامه اجاره خانه ها</li>
        <li>با ما تماس بگیرید</li>
        <li>ملک خود را ارسال کنید</li>
        <li>با ما کار کنید</li>
      </ul>
      <div className="flex justify-center pb-4">
        <h4>
          © حقوق مادی معنوی این سایت برای{" "}
          <span className="text-[#c69963]">رضا حمزه‌ای</span> محفوظ میباشد
        </h4>
      </div>
    </div>
  );
};

export default Footer;
