import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import {
  FaCheckCircle,
  FaExclamationCircle,
} from "react-icons/fa";
import {Collapse, Spin} from "antd";
import {useGetLessonDetailsQuery, useSubmitAssessmentMutation, useGetUserDetailsQuery} from "../../redux/apis/apiSlice.js";
import ProgressBar from "../global/ProgressModal.jsx";
import {getUser, getUserTarget} from "../../helpers/utils.js";

const LessonAccordion = ({ course }) => {
  const user = getUser()
  const target = getUserTarget(user)
  const lessons = course.lessons
  const courseId = course.id
  const [activeLesson, setActiveLesson] = useState(null);
  const [lessonCompleted, setLessonCompleted] = useState(false)
  const [submittedAnswers, setSubmittedAnswers] = useState({})
  const [selectedAnswers, setSelectedAnswers] = useState({})
  const {data, refetch: refetchLessonDetails} = useGetLessonDetailsQuery({courseId, lessonId:activeLesson}, {skip: !activeLesson})
  const [lessonDetails, setLessonDetails] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null)
  const [submitted, setSubmitted] = useState(false)
  const {data:userData, refetch: refetchUserDetails} = useGetUserDetailsQuery(null, {skip: !submitted})
  const [submitAssessment, { isSubmitting }] = useSubmitAssessmentMutation();
  const [prevPercent, setPrevPercent] = useState(0)
  const [percent, setPercent] = useState(Math.round(user.points/target * 100))
  const [openModal, setOpenModal] = useState(false)
  const [addedPoints, setAddedPoints] = useState(0)


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
        setLessonDetails((prevDetails) => ({
          ...prevDetails,
          [activeLesson]: data,
        }));
      });
    }
  }, [activeLesson, refetchLessonDetails]);

  const handlePanelChange = (key) => {
    setError(null)
    key = parseInt(key)
    if (key) {
      setActiveLesson(key);
    } else {
      setActiveLesson(null);
    }
  };

  const handleAnswerChange = (ev) => {
    let values = ev.target.value.split("_").map((v)=> parseInt(v))
    let lessonAnswers = selectedAnswers[activeLesson] || {}
    lessonAnswers[values[0]] = values[1]
    setSelectedAnswers((prevAnswers) => ({
      ...prevAnswers,
      [activeLesson]: lessonAnswers,
    }));
  }

  const handleSubmit = () => {
    setError(null)
    setSubmitted(false)
    let lesson = lessonDetails[activeLesson]
    let count = Object.keys(selectedAnswers[activeLesson] || {}).length
    if(count !== lesson.assessment.questions.length){
      setError('All questions must be answered!')
      return
    }
    let data = {
      assessmentId: lesson.assessment.id,
      body: {
        answers: selectedAnswers[activeLesson] || {}
      }
    }
    submitAssessment(data).then(async (res) => {
      if (!res?.data) setError(res?.error?.data?.error || 'Something went wrong!');
      else {
        let lesson = lessonDetails[activeLesson]
        setLessonDetails((prevDetails) => ({
          ...prevDetails,
          [activeLesson]: {...lesson, assessment: res.data},
        }));
        setSubmitted(true)
        setSubmittedAnswers(JSON.parse(JSON.stringify(selectedAnswers)))
        setLessonCompleted(res.data.completed)
      }
    })
  }

  useEffect(() => {
    if (submitted) {
      const fetchUserDetails = async () => {
        try {
          const userData = await refetchUserDetails();
          return userData.data;
        } catch (err) {
          console.error("Failed to fetch user details:", err);
        }
      };
      fetchUserDetails().then((userData) => {
        if (userData.points !== user.points){
          setAddedPoints(userData.points - user.points)
          setPrevPercent(percent)
          setPercent(Math.round(userData.points/target * 100))
          setOpenModal(true)
        }
        localStorage.setItem("user", JSON.stringify(userData));
      });
    }
  }, [submitted, refetchUserDetails]);

  const computePoints = (lesson) => {
    if (!lesson) return 0
    let total_points = lesson.assessment.questions.reduce((points, quiz) => {return points + quiz.points},0)
    let total_penalties = lesson.assessment.questions.reduce((penalties, quiz) => {return penalties + quiz.lost_points},0)
    return total_points - total_penalties
  }

  const getCorrectionKlas = (lesson, question, answer) => {
    if (lesson.completed && answer.is_correct) return 'text-success bg-success-light'
    if (submitted) {
      if(submittedAnswers[activeLesson] && submittedAnswers[activeLesson][question.id] === answer.id){
        if(answer.is_correct) return 'text-success bg-success-light'
        else return 'text-danger bg-danger-light'
      }
    }
    return ''
  }

  const isChecked = (lesson, question, answer) => {
    if (answer.is_correct && lesson.completed) return true;
    if (selectedAnswers[activeLesson] && question.id in selectedAnswers[activeLesson]){
      return (selectedAnswers[activeLesson] || {})[question.id] === answer.id
    }
    return false
  }

  const items = lessons?.map((lesson) => ({
      key: lesson.id,
      label: <div className="flex items-center">
        {((lessonCompleted && lesson.id === activeLesson) || lesson.completed) ? (
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
                <div key={optIndex} className={`flex items-center mt-2 ${getCorrectionKlas(lesson, question, answer)} rounded-sm px-2 w-full`}>
                  <input
                    type="radio"
                    name={`answer-${question.id}`}
                    checked={isChecked(lesson, question, answer)}
                    id={`answer-${answer.id}`}
                    className="mr-2"
                    value={`${question.id}_${answer.id}`}
                    onChange={handleAnswerChange}
                  />
                  <label htmlFor={`answer-${question.id}`}>
                    {answer.name}
                  </label>
                </div>
              ))}
            </div>
          ))}
          { lessonDetails[lesson.id]?.assessment?.completed === false &&
            <div className="flex justify-start items-center gap-4 mt-8 mb-4">
              <button onClick={handleSubmit} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Submit</button>
              <p className="rounded-full bg-yellow-400 text-white font-bold text-lg px-2 py-1">+ {computePoints(lessonDetails[lesson.id])}XP</p>
              {error && <p className="text-red-600">{error}</p>}
            </div>
          }
        </div>
      </div>
    })
  )

  return (
    <div>
      {openModal && <ProgressBar percent={percent} from={prevPercent} to={percent} points={addedPoints}/>}
      <Collapse accordion items={items}
                expandIconPosition="end"
                activeKey={activeLesson}
                onChange={handlePanelChange}
      />
    </div>
  );
};

export default LessonAccordion;
