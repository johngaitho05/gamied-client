import React from "react";
import TopicCard from "../Components/global/TopicCard";

const CourseDetail = ({ courseDetail }) => {
  return (
    <div>
      <div className=" mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">{courseDetail.title}</h1>
        {courseDetail.topics.map((topic, index) => (
          <TopicCard key={index} topic={topic} />
        ))}
      </div>
    </div>
  );
};

export default CourseDetail;
