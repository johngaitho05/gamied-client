import React from "react";
import CourseCard from "./CoursesCard";
import { courses } from "../../data/index";

const Courses = () => {
  return (
    <div className=" min-h-screen  w-full ">
      <h1 className="text-2xl font-bold mb-2 px-4">Attempted Courses</h1>

      <div className=" p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
