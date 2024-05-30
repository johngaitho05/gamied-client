import React from "react";
import { Routes, Route } from "react-router-dom";
import CoursesPage from "../pages/courses";

const index = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<CoursesPage />} />
      </Routes>
    </div>
  );
};

export default index;
