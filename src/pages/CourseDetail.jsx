import React from "react";
import Layout from "../Components/Layout";
import CourseDetails from "../Components/CourseDetail";
import { SingleCourse, singleLesson } from "../data";

const CourseDetailPage = () => {
  return (
    <div>
      <Layout>
        <CourseDetails
          courseDetail={SingleCourse[0]}
          singleLesson={singleLesson[0]}
        />
      </Layout>
    </div>
  );
};

export default CourseDetailPage;
