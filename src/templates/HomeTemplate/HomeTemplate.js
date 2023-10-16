import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

export default function HomeTemplate({ children }) {
  return (
    <div>
      <Header />
      {children}
      <div className="px-16">
        <div className="border-b-2 border-orange-400"></div>
      </div>
      <Footer />
    </div>
  );
}
