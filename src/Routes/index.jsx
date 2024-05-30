import React from "react";
import { Routes, Route } from "react-router-dom";
import CoursesPage from "../pages/courses";
import CoursesDetailPage from "../pages/CourseDetail";
import ExamsPage from "../pages/ExamsPage";

const index = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<CoursesPage />} />
        <Route path="/course/:id" element={<CoursesDetailPage />} />
        <Route path="/exams" element={<ExamsPage />} />
      </Routes>
    </div>
  );
};

export default index;
