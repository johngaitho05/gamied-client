import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import {
  FaCheckCircle,
  FaExclamationCircle,
} from "react-icons/fa";
import {Collapse, Spin} from "antd";
import {useGetLessonDetailsQuery} from "../../redux/apis/apiSlice.js";

const LessonAccordion = ({ course }) => {
  const lessons = course.lessons
  const courseId = course.id
  const [activeLesson, setActivePanel] = useState(null);
  const {data, refetch: refetchLessonDetails} = useGetLessonDetailsQuery({courseId, lessonId:activeLesson}, {skip: !activeLesson})
  const [lessonDetails, setLessonDetails] = useState({});
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    if (activeLesson && !lessonDetails[activeLesson]) {
      const fetchLessonDetails = async () => {
        try {
          setLoading(true)
          const lessonData = await refetchLessonDetails();
          setLoading(false)
          return lessonData.data;
        } catch (err) {
          console.error('Failed to fetch lesson details:', err);
        }
      };
      fetchLessonDetails().then(data => {
        console.log("data", data)
        setLessonDetails((prevDetails) => ({
          ...prevDetails,
          [activeLesson]: data,
        }));
      });
    }
  }, [activeLesson, refetchLessonDetails]);

  const handlePanelChange = (key) => {
    key = parseInt(key)
    if (key) {
      setActivePanel(key);
    } else {
      setActivePanel(null);
    }
  };

  const items = lessons?.map((lesson) => ({
      key: lesson.id,
      label: <div className="flex items-center">
        {lesson.completed ? (
          <FaCheckCircle className="text-green-500 inline-block mr-2"/>
        ) : (
          <FaExclamationCircle className="text-orange-500 inline-block mr-2"/>
        )}
        <h4 className={'text-md'}>{lesson.title}</h4>
      </div>,
      children: loading && activeLesson === lesson.id ? <Spin/> : <div className="mt-4">
        <div className="mb-4 ">
          <h4 className="text-md font-semibold">Resources</h4>
          <ul className="list-disc list-inside flex flex-col">
            {lessonDetails[lesson.id]?.content?.map((resource, index) => (
              <Link
                to={`${resource?.href}`}
                key={index}
                target={'_blank'}
                className="text-orange-600"
              >
                {resource?.title}
              </Link>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-md font-semibold">Assessment</h4>
          {lessonDetails[lesson.id]?.assessment?.questions?.map((question, index) => (
            <div key={question.id} className="mb-4">
              <p>
                {index + 1}. {question?.name}
              </p>
              {question?.answers?.map((answer, optIndex) => (
                <div key={optIndex} className="flex items-center mt-2">
                  <input
                    type="radio"
                    name={`answer-${question.id}`}
                    id={`answer-${answer.id}`}
                    className="mr-2"
                    value={`${question.id}_${answer.id}`}
                  />
                  <label htmlFor={`answer-${question.id}`}>
                    {answer.name}
                  </label>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    })
  )

  return (
    <Collapse accordion items={items}
              expandIconPosition="end"
              activeKey={activeLesson}
              onChange={handlePanelChange}
    />
  );
};

export default LessonAccordion;
