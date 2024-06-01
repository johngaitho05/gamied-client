import React, {useEffect} from "react";
import LessonAccordion from "./global/LessonAccordion.jsx";
import {
  useGetCourseDetailsQuery,
} from "../redux/apis/apiSlice.js";

const CourseDetail = ({courseId}) => {
  const {data: course, isFetching} = useGetCourseDetailsQuery(courseId)


  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{course?.title}</h1>
      {course ? <LessonAccordion course={course} />: ''}
    </div>
  );
};

export default CourseDetail;
