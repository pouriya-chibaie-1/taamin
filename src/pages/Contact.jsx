import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

import { useForm } from "react-hook-form";

import { FiPhoneCall } from "@react-icons/all-files/fi/FiPhoneCall";
import { HiMail } from "@react-icons/all-files/hi/HiMail";
import { BiMapPin } from "@react-icons/all-files/bi/BiMapPin";

function ContactCard({ children }) {
  return (
    <div className="w-30 h-auto rounded flex items-center border overflow-hidden text-sm p-3 bg-white mr-0 md:mr-8">
      {children}
    </div>
  );
}

export default function Contact() {
  const { register, handleSubmit, reset } = useForm();
  const onSubmitHandler = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="max-w-[1200px] flex flex-col items-center bg-gray-100">
      {/* <Header /> */}
      <div className="container w-full h-auto m-0 flex flex-col md:flex-row my-3">
        <div className="w-full md:w-5/12 flex flex-col space-y-4 px-2 py-16">
          <ContactCard>
            <div className="mx-4 flex justify-center items-center bg-gray-300 rounded-full h-10 w-10">
              <FiPhoneCall className="text-2xl text-red-real" />
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-3">{`شماره های تماس`}</h2>
              <p>
                <span>{`تلفن ملی : `}</span>
                <span dir="ltr">{`۱۲۳۴`}</span>
              </p>
              <p>
                <span>{`تلفن دفتر مدیریت : `}</span>
                <span dir="ltr">{`۰۲۱-۱۲۳۴۵۶۷۸`}</span>
              </p>
              <p>
                <span>{`تلفن امور مشتریان : `}</span>
                <span dir="ltr">{`۰۲۱-۱۲۳۴۵۶۷۸`}</span>
              </p>
            </div>
          </ContactCard>
          <ContactCard>
            <div className="mx-4 flex justify-center items-center bg-gray-300 rounded-full h-10 w-10">
              <HiMail className="text-2xl text-red-real" />
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-3">{`پست الکترونیکی`}</h2>
              <p>
                <span dir="ltr">{`info@website.com`}</span>
              </p>
            </div>
          </ContactCard>
          <ContactCard>
            <div className="mx-4 flex justify-center items-center bg-gray-300 rounded-full h-10 w-10">
              <BiMapPin className="text-2xl text-red-real" />
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-3">{`آدرس دفتر مرکزی`}</h2>
              <p>
                <span>{`تهران ، کیلومتر چند جاده ، خیابان اصلی ، خیابان فرعی ، مجتمع تامین دیزل`}</span>
              </p>
            </div>
          </ContactCard>
        </div>
        <div className="w-full md:w-7/12 px-10">
          <h2 className="my-4 text-2xl font-semibold">{`تماس با ما`}</h2>
          <p>{`برای ثبت نظرات و پیشنهادات خود و ارتباط با کارشناسان ما ، می توانید از طریق فرم زیر اقدام فرمایید.`}</p>
          <form
            onSubmit={handleSubmit(onSubmitHandler)}
            className="flex flex-col my-8 space-y-3"
          >
            <div className="flex justify-between">
              <input
                className="w-1/2 h-10 py-1 px-4 rounded border border-gray-300 ml-10"
                type="text"
                placeholder={`نام و نام خانوادگی`}
                {...register("full-name")}
              />
              <input
                className="w-1/2 h-10 py-1 px-4 rounded border border-gray-300"
                type="text"
                placeholder={`شماره تماس`}
                {...register("phone-number")}
              />
            </div>
            <div className="flex justify-between">
              <input
                className="w-1/2 h-10 py-1 px-4 rounded border border-gray-300 ml-10"
                type="email"
                placeholder={`پست الکترونیک`}
                {...register("email")}
              />
              <input
                className="w-1/2 h-10 py-1 px-4 rounded border border-gray-300"
                type="text"
                placeholder={`آدرس سایت`}
                {...register("website-address")}
              />
            </div>
            <div>
              <textarea
                className="w-2/3 px-4 w-1/2 rounded border border-gray-300 py-2"
                name="message"
                rows="8"
                placeholder={`متن پیام`}
                {...register("message")}
              ></textarea>
            </div>
            <div className="flex justify-end">
              <button
                className="border rounded w-1/4 py-2 bg-gray-200 hover:bg-gray-300"
                type="submit"
              >{`ارسال پیام`}</button>
            </div>
          </form>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
