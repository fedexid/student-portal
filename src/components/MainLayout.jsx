import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const MainLayout = ({ children }) => {
  return (
    <div className="bg-primary flex min-h-screen w-full flex-col">
      <Navbar />
      <div className="flex-grow">{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
