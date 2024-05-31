import React from "react";
import {
  FaCheckCircle,
  FaExclamationCircle,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import { Card, Collapse } from "antd";
import { Link } from "react-router-dom";
// import "antd/dist/antd.css";

const { Panel } = Collapse;

const TopicCard = ({ singleLesson }) => {
  console.log(singleLesson.assessment.questions);
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
              {singleLesson.completed ? (
                <FaCheckCircle className="text-green-500 inline-block mr-2" />
              ) : (
                <FaExclamationCircle className="text-orange-500 inline-block mr-2" />
              )}
              <h3 className="text-lg font-semibold">{singleLesson.title}</h3>
            </div>
          }
          key="1"
        >
          <div className="mt-4">
            <div className="mb-4 ">
              <h4 className="text-md font-semibold">Resources</h4>
              <ul className="list-disc list-inside flex flex-col">
                {singleLesson?.content?.map((resource, index) => (
                  <Link
                    to={`${resource?.href}`}
                    key={index}
                    className="text-orange-600"
                  >
                    {resource?.title}
                  </Link>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-md font-semibold">Assessment</h4>
              {singleLesson?.assessment?.questions?.map((question, index) => (
                <div key={index} className="mb-4">
                  <p>
                    {index + 1}. {question?.name}
                  </p>
                  {question?.answers?.map((option, optIndex) => (
                    <div key={optIndex} className="flex items-center mt-2">
                      <input
                        type="radio"
                        name={`question-${index}`}
                        id={`question-${index}-option-${optIndex}`}
                        className="mr-2"
                      />
                      <label htmlFor={`question-${index}-option-${optIndex}`}>
                        {option.name}
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
