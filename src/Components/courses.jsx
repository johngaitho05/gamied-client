import React from "react";
import CourseCard from "./global/CourseCard";
import { courses } from "../data/index";

const Courses = () => {
  return (
    <div className="mt-32 min-h-screen ">
      <h1 className="text-2xl font-bold mb-4 px-4">Courses</h1>

      <div className="max-w-7xl  mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {courses.map((course, index) => (
          <CourseCard
            key={index}
            name={course?.title}
            lessons={course?.lessons}
            completion={course?.progress}
            image={course?.thumbnail}
          />
        ))}
      </div>
    </div>
  );
};

export default Courses;
