import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useNavigate } from "react-router-dom";
import { Card } from "antd";

const CourseCard = ({ id, name, lessons_count, completion, image }) => {
  const navigate = useNavigate();
  return (
    <Card
      className="max-w-sm border rounded-lg overflow-hidden shadow-lg bg-white p-0"
      onClick={() => navigate(`course/${id}`)}
      cover={
        <img className="w-full h-48 object-cover" src={image} alt={name} />
      }
      hoverable
    >
      <div className="p-4 pb-0">
        <h2 className="font-semibold text-lg mb-2">{name}</h2>
        <div className="flex  items-center justify-between mt-7">
          <p className="text-gray-600">{lessons_count} Lessons</p>
          <div className="flex items-center justify-between">
            <CircularProgressbar
              value={completion}
              text={`${completion}%`}
              styles={buildStyles({
                textSize: "24px",
                pathColor: `rgb(33 131 235)`,
                textColor: "#454646",
                trailColor: "#d6d6d6",
              })}
              className="w-16 h-16"
            />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CourseCard;
