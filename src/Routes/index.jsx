import React from "react";
import { Routes, Route } from "react-router-dom";
import CoursesPage from "../pages/courses";
import CoursesDetailPage from "../pages/CourseDetail";

const index = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<CoursesPage />} />
        <Route path="/course/:id" element={<CoursesDetailPage />} />
      </Routes>
    </div>
  );
};

export default index;
