import React from "react";
import { Routes, Route } from "react-router-dom";
import CoursesPage from "../pages/courses";
import CoursesDetailPage from "../pages/CourseDetail";
import ExamsPage from "../pages/ExamsPage";
import ExamsDetailPage from "../pages/ExamDetails";
import AssessmentPage from "../pages/AssesmentPage";
import Profile from "../pages/ProfilePage";

const index = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<CoursesPage />} />
        <Route path="/course/:id" element={<CoursesDetailPage />} />
        <Route path="/exams" element={<ExamsPage />} />
        <Route path="/exams/:id" element={<AssessmentPage />} />
        <Route path="/exams/assessment/:id" element={<ExamsDetailPage />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default index;
