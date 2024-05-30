import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CourseCard = ({ name, lessons, completion, image }) => {
  return (
    <div className="max-w-sm border rounded-lg overflow-hidden shadow-lg bg-white">
      <img className="w-full h-48 object-cover" src={image} alt={name} />
      <div className="p-4">
        <h2 className="font-semibold text-lg mb-2">{name}</h2>
        <div className="flex  items-center justify-between">
          {" "}
          <p className="text-gray-600 mb-4">{lessons} Lessons</p>
          <div className="flex items-center justify-between">
            <CircularProgressbar
              value={completion}
              text={`${completion}%`}
              styles={buildStyles({
                textSize: "24px",
                pathColor: `rgba(62, 152, 199, ${completion / 100})`,
                textColor: "#3e98c7",
                trailColor: "#d6d6d6",
              })}
              className="w-16 h-16"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
