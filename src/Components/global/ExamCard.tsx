import React from "react";
import PropTypes from "prop-types";
import { FaTimesCircle, FaCheckCircle, FaHourglassHalf } from "react-icons/fa";
import { Card } from "antd";
import { BsClockFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const ExamCard = ({ exam }) => {
  const getStatusStyle = (status) => {
    switch (status) {
      case "failed":
        return "bg-red-600 ";
      case "passed":
        return "bg-green-600 ";
      case "not started":
        return "bg-gray-400 ";
      default:
        return "";
    }
  };

  const getStatusIcon = (comment) => {
    switch (comment.toLowerCase()) {
      case "failed":
        return <FaTimesCircle className="text-white" />;
      case "passed":
        return <FaCheckCircle className="text-white" />;
      case "not started":
        return <FaHourglassHalf className="text-gray-600" />;
      default:
        return null;
    }
  };

  const formatTime = (timeAllowed) => {
    const hours = Math.floor(timeAllowed / 60);
    const minutes = timeAllowed % 60;
    return hours > 0
      ? `${hours} hr${hours > 1 ? "s" : ""} ${
          minutes > 0 ? `${minutes} min` : ""
        }`
      : `${minutes} min`;
  };

  const navigate = useNavigate();

  return (
    <Card
      className={`border rounded-lg shadow-lg mb-4 cursor-pointer p-0`}
      onClick={() => navigate("/exams/1")}
      cover={
        <img
          src={exam.thumbnail}
          alt={exam.title}
          className="w-full h-48 object-cover mb-4"
        />
      }
      hoverable
    >
      <h3 className="text-lg font-semibold mb-2">{exam?.title}</h3>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span>
            <BsClockFill className="text-gray-500" />
          </span>
          <p className="text-sm text-gray-600">
            {formatTime(exam?.time_allowed)}
          </p>
        </div>
        <button
          className={`flex p-1 px-2 text-white items-center gap-2 border rounded-[20px] shadow-lg cursor-pointer ${getStatusStyle(
            exam.result.comment.toLowerCase()
          )}`}
        >
          {getStatusIcon(exam?.result?.comment)}

          <span>{exam?.result?.comment}</span>
        </button>
      </div>
    </Card>
  );
};

ExamCard.propTypes = {
  exam: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ExamCard;
