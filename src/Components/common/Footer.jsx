import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 py-10">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} GamiED. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
