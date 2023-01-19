import React from "react";
import AdBanner from "../components/adBanner/AdBanner";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Main from "../components/main/Main";
import Navigation from "../components/navigation/Navigation";

export default function Gategory() {
  return (
    <div style={{direction:"rtl"}} className="bg-gray-100 relative h-full">
      {/* <Header /> */}
      <AdBanner />
      <Main />
      <AdBanner />
      {/* <Footer /> */}
    </div>
  );
}
