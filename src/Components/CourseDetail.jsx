import React from "react";
import TopicCard from "../Components/global/TopicCard";

const CourseDetail = ({ courseDetail, singleLesson }) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{courseDetail?.title}</h1>
      {courseDetail?.lessons?.map((topic, index) => (
        <TopicCard key={index} singleLesson={singleLesson} />
      ))}
    </div>
  );
};

export default CourseDetail;
