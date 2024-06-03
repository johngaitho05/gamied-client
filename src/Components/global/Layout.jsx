import React from "react";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";

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
