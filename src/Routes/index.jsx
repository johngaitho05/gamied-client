import React from "react";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import CoursesPage from "../pages/courses";
import CoursesDetailPage from "../pages/CourseDetail";
import ExamsPage from "../pages/ExamsPage";
import ExamsDetailPage from "../pages/ExamDetails";
// import AssessmentPage from "../pages/AssesmentPage";
import Profile from "../pages/ProfilePage";
import { getUser } from "../helpers/utils.js";
import Login from "../pages/Login.jsx";

const PrivateRoutes = () => {
  const user = getUser();
  return user ? <Outlet /> : <Navigate to="/login" />;
};

const PublicRoutes = () => {
  const user = getUser();
  return user ? <Navigate to="/" /> : <Outlet />;
};

const Index = () => {
  return (
    <div>
      <Routes>
        <Route element={<PublicRoutes />}>
          <Route path="/login" element={<Login />} />
        </Route>
        {/* <Route element={<PrivateRoutes/>}> */}
        <Route path="/" element={<CoursesPage />} />
        <Route path="/course/:id" element={<CoursesDetailPage />} />
        <Route path="/exams" element={<ExamsPage />} />
        {/* <Route path="/exams/:id" element={<AssessmentPage />} /> */}
        <Route path="/exams/assessment/:id" element={<ExamsDetailPage />} />
        <Route path="/profile" element={<Profile />} />
        {/* </Route> */}
      </Routes>
    </div>
  );
};

export default Index;
