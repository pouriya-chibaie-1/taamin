import React from "react";

function FooterInfo({ header, children }) {
  return (
    <div className="h-auto w-1/5 first:ml-5 my-2">
      <h2 className="text-sm md:text-lg text-center text-white rounded bg-red-real px-4 py-2 hover:bg-red-700">
        {header}
      </h2>
      <div className="my-2 space-y-1 px-1 flex flex-col last:flex last:justify-center last:items-center">
        {children}
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <div className="sm:text-sm text-base h-min w-full py-3 pb-10 bg-gray-200">
      <div className="mx-auto flex justify-center items-start flex-wrap lg:flex-nowrap space-x-5 px-5 text-sm">
        <FooterInfo header="اطلاعات تماس">
          <p className="text-xs md:text-base">تلفن دفتر فروش</p>
          <a
            href="tel:+982112345678"
            className="text-xs md:text-base hover:bg-gray-100 w-full text-center"
            dir="ltr"
          >
            +۹۸۲۱۱۲۳۴۵۶۷۸
          </a>
          <p className="text-xs md:text-base">تلفن همراه فروش</p>
          <a
            href="tel:09901234567"
            className="text-xs md:text-base hover:bg-gray-100 w-full text-center"
            dir="ltr"
          >
            ۰۹۹۰۱۲۳۴۵۶۷
          </a>
        </FooterInfo>
        <FooterInfo header="خرید از ما">
          <a
            href="#"
            className="text-xs md:text-base hover:bg-gray-100 w-full text-center"
          >
            راهنمای ثبت سفارش
          </a>
          <a
            href="#"
            className="text-xs md:text-base hover:bg-gray-100 w-full text-center"
          >
            رویه ارسال سفارش
          </a>
          <a
            href="#"
            className="text-xs md:text-base hover:bg-gray-100 w-full text-center"
          >
            روش های پرداخت
          </a>
        </FooterInfo>
        <FooterInfo header="خدمات مشتریان">
          <a
            href="#"
            className="text-xs md:text-base hover:bg-gray-100 w-full text-center"
          >
            پرسش های متداول
          </a>
          <a
            href="#"
            className="text-xs md:text-base hover:bg-gray-100 w-full text-center"
          >
            روش های بازگرداندن کالا
          </a>
          <a
            href="#"
            className="text-xs md:text-base hover:bg-gray-100 w-full text-center"
          >
            حریم خصوصی کاربران
          </a>
        </FooterInfo>
        <FooterInfo header="همراه با ما">
          <a
            href="#"
            className="text-xs md:text-base hover:bg-gray-100 w-full text-center"
          >
            درباره ما
          </a>
          <a
            href="#"
            className="text-xs md:text-base hover:bg-gray-100 w-full text-center"
          >
            تماس با ما
          </a>
          <a
            href="#"
            className="text-xs md:text-base hover:bg-gray-100 w-full text-center"
          >
            اخبار صنعت حمل و نقل
          </a>
        </FooterInfo>
        <FooterInfo header="مجوز ها">
          <img
            className="w-[30px] h-[20px] "
            src="https://via.placeholder.com/30x20.png"
            alt="certificates"
          />
        </FooterInfo>
        <img
          className="my-10"
          src="https://via.placeholder.com/90x20.png"
          alt="i don't remember"
        />
      </div>
      <p className="px-5 text-sm">
        مرجع تخصصی و نقد و بررسی و فروش لوازم یدکی خودروهای سنگین در ایران. گروه
        های مختلف لوازم یدکی از قبیل لوازم سیستم ترمز ، سوپاپ های بادی ، بوق ،
        لاستیک ، بوستر ، لنت ، کیسه باد ، ... با تنوعی بی نظیر در فروشگاه آنلاین
        ما عرضه می شوند. مشتریان عزیز می توانند با دریافت اظلاعات جامع و کامل ،
        کالای مورد نظر خود را انتخاب نمایند. همواره بهترین انتخاب و بهترین خدمات
        ، شایسته مشتریان ماست.
      </p>
    </div>
  );
}
