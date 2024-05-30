import React, { useState } from "react";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import { Card } from "antd";

const TopicCard = ({ topic }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card className=" rounded-md shadow-md p-4 mb-4 bg-gray-200">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-semibold">
          {topic.completed ? (
            <FaCheckCircle className="text-green-500 inline-block mr-2" />
          ) : (
            <FaExclamationCircle className="text-orange-500 inline-block mr-2" />
          )}
          {topic.title}
        </h3>
      </div>
      {isOpen && (
        <div className="mt-4">
          <div className="mb-4 ">
            <h4 className="text-md font-semibold">Resources</h4>
            <ul className="list-disc list-inside">
              {topic.resources.map((resource, index) => (
                <li key={index} className="text-orange-600">
                  {resource}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-md font-semibold">Assessment</h4>
            {topic.assessment.map((question, index) => (
              <div key={index} className="mb-4">
                <p>
                  {index + 1}. {question.question}
                </p>
                {question.options.map((option, optIndex) => (
                  <div key={optIndex} className="flex items-center mt-2">
                    <input
                      type="radio"
                      name={`question-${index}`}
                      id={`question-${index}-option-${optIndex}`}
                      className="mr-2"
                    />
                    <label htmlFor={`question-${index}-option-${optIndex}`}>
                      {option}
                    </label>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </Card>
  );
};

export default TopicCard;
