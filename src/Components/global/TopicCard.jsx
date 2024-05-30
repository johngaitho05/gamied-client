import React from "react";
import {
  FaCheckCircle,
  FaExclamationCircle,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import { Card, Collapse } from "antd";
// import "antd/dist/antd.css";

const { Panel } = Collapse;

const TopicCard = ({ topic }) => {
  return (
    <div className=" mb-4 bg-gray-200">
      <Collapse
        expandIcon={({ isActive }) =>
          isActive ? <FaChevronUp /> : <FaChevronDown />
        }
      >
        <Panel
          header={
            <div className="flex items-center">
              {topic.completed ? (
                <FaCheckCircle className="text-green-500 inline-block mr-2" />
              ) : (
                <FaExclamationCircle className="text-orange-500 inline-block mr-2" />
              )}
              <h3 className="text-lg font-semibold">{topic.title}</h3>
            </div>
          }
          key="1"
        >
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
        </Panel>
      </Collapse>
    </div>
  );
};

export default TopicCard;
