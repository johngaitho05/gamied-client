import React from "react";
import Layout from "../Components/Layout";
import CourseDetails from "../Components/CourseDetail";
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

