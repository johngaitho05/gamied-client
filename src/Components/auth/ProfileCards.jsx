import React, { useEffect, useState } from "react";
import ProfileCard from "./ProfileCard.jsx";
import {useGetAssessmentsQuery, useGetCoursesQuery} from "../../redux/apis/apiSlice.js";
import ProfileLoader from "../global/ProfileLoader.jsx";

const ProfileCards = () => {
  const [userCourses, setUserCourses] = useState([]);
  const { data: courses, isFetching:fetchingCourses } = useGetCoursesQuery();
  const { data: exams, isFetching: fetchingExams } = useGetAssessmentsQuery();

  useEffect(() => {
    setUserCourses(courses?.filter((course) => course.progress > 0));
  }, [courses]);

  return (
    <div className=" min-h-screen  w-full ">
      <h2 className="text-2xl font-bold mb-2 px-4">Attempted Courses</h2>
      <div className=" p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {userCourses?.map((course, index) => (
          <ProfileCard
            key={index}
            name={course?.title}
            lessons={course?.lessons}
            progress={course?.progress}
            image={course?.thumbnail}
          />
        ))}
        {!userCourses?.length && !fetchingCourses && <p>No thing here yet!</p>}
      </div>
      {fetchingCourses && <ProfileLoader/>}
      <h2 className="text-2xl font-bold mt-7 px-4">Attempted Exams</h2>
      <div className=" p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {exams?.filter((exam) => exam.completed)?.map((exam) => (
          <ProfileCard
            key={exam.id}
            name={exam?.title}
            progress={100}
            image={exam?.thumbnail}
          />
        ))}
        {!fetchingExams && <p>No thing here yet!</p>}
      </div>
      {fetchingExams && <ProfileLoader/>}
    </div>
  );
};

export default ProfileCards;
