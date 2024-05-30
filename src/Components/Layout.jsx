import React from "react";
import Navbar from "../Components/common/Navbar";
import Footer from "../Components/common/Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="mt-32 max-w-7xl mx-auto min-h-[80vh]">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
