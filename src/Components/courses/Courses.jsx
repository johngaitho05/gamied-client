import React from "react";
import CourseCard from "../courses/CourseCard";
import Loader from "../global/Loading.jsx";
import { useGetCoursesQuery } from "../../redux/apis/apiSlice.js";

const Courses = () => {
  const { data: courses, isFetching } = useGetCoursesQuery();

  return (
    <div className="mt-32 min-h-screen ">
      <h1 className="text-2xl font-bold mb-4 px-4">Courses</h1>

      <div className="max-w-7xl  mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {courses?.map((course) => (
          <CourseCard
            key={course.id}
            id={course.id}
            name={course?.title}
            lessons_count={course?.lessons_count}
            completion={course?.progress}
            image={course?.thumbnail}
          />
        ))}
      </div>

      {isFetching && <Loader />}
    </div>
  );
};

export default Courses;
