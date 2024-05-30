import React from "react";
import Navbar from "../Components/common/Navbar";
import Footer from "../Components/common/Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
