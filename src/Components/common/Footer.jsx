import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white py-10">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} GamiED. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
