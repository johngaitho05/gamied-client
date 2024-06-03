import React from "react";
import Layout from "../Components/global/Layout";
import CourseDetails from "../Components/courses/CourseDetail.jsx";
import {useParams} from "react-router-dom";

const CourseDetailPage = () => {
  const courseId = useParams().id

  return (
    <div>
      <Layout>
        <CourseDetails courseId={courseId}/>
      </Layout>
    </div>
  );
};

export default CourseDetailPage;

