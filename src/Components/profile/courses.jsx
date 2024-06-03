import React, {useEffect, useState} from "react";
import CourseCard from "./CoursesCard";
import {useGetCoursesQuery} from "../../redux/apis/apiSlice.js";
import coursesCard from "./CoursesCard";


const Courses = () => {
  const [userCourses, setUserCourses] = useState([])
  const { data:courses, isFetching } = useGetCoursesQuery()

  useEffect(() => {
    setUserCourses(courses?.filter(course => course.progress > 0))
  }, [courses]);


  return (
    <div className=" min-h-screen  w-full ">
      <h1 className="text-2xl font-bold mb-2 px-4">Attempted Courses</h1>

       <div className=" p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {userCourses?.map((course, index) => (
          <CourseCard
            key={index}
            name={course?.title}
            lessons={course?.lessons}
            progress={course?.progress}
            image={course?.thumbnail}
          />
        ))}
         {!userCourses?.length && !isFetching && <p>No thing here yet!</p>}
      </div>
    </div>
  );
};

export default Courses;
