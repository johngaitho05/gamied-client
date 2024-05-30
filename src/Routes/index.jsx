import React from "react";
import { Routes, Route } from "react-router-dom";
import CoursesPage from "../pages/courses";
import CoursesDetailPage from "../pages/CourseDetail";
import ExamsPage from "../pages/ExamsPage";
import ExamsDetailPage from "../pages/ExamDetails";

const index = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<CoursesPage />} />
        <Route path="/course/:id" element={<CoursesDetailPage />} />
        <Route path="/exams" element={<ExamsPage />} />
        <Route path="/exams/:id" element={<ExamsDetailPage />} />
      </Routes>
    </div>
  );
};

export default index;
