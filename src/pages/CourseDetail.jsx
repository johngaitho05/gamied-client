import React from "react";
import Layout from "../Components/Layout";
import CourseDetails from "../Components/CourseDetail";
import { courseDetail } from "../data";

const CourseDetailPage = () => {
  return (
    <div>
      <Layout>
        <CourseDetails courseDetail={courseDetail} />
      </Layout>
    </div>
  );
};

export default CourseDetailPage;
