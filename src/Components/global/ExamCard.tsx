import React from "react";
import PropTypes from "prop-types";
import { FaTimesCircle, FaCheckCircle, FaHourglassHalf } from "react-icons/fa";
import { Card } from "antd";
import { BsClockFill } from "react-icons/bs";

const ExamCard = ({ exam, onClick }) => {
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

  const getStatusIcon = (status) => {
    switch (status) {
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

  return (
    <Card
      className={`border rounded-lg shadow-lg  mb-4 cursor-pointer p-0`}
      onClick={() => onClick(exam)}
      cover={
        <img
          src={exam.image}
          alt={exam.title}
          className="w-full h-48 object-cover  mb-4"
        />
      }
      hoverable
    >
      <h3 className="text-lg font-semibold mb-2 ">{exam?.title}</h3>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span>
            <BsClockFill className="text-gray-500" />{" "}
          </span>
          <p className="text-sm text-gray-600">Time: {exam?.time}</p>
        </div>
        <button
          className={`flex p-1 px-2 text-white items-center gap-2 border rounded-[20px] shadow-lg  cursor-pointer ${getStatusStyle(
            exam.status
          )}`}
        >
          {getStatusIcon(exam.status)}
          <span>{exam.status}</span>
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
