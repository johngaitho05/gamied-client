import React, { useState, useEffect } from "react";
import {useGetAssessmentDetailsQuery, useGetUserDetailsQuery, useSubmitAssessmentMutation} from '../../redux/apis/apiSlice.js'
import {LoadingOutlined} from "@ant-design/icons";
import {Spin} from "antd";
import {formatTimeClock, getUser, getUserTarget} from '../../helpers/utils.js'
import ProgressBar from "../global/ProgressModal.jsx";
import {useNavigate} from "react-router-dom";

const ExamDetails = ({examId}) => {
  const user = getUser();
  const target = getUserTarget(user)
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [questions, setQuestions] = useState([])
  const {data: exam, isFetching} = useGetAssessmentDetailsQuery(examId)
  const [timeLeft, setTimeLeft] = useState(60);
  const [submitAssessment, { isSubmitting }] = useSubmitAssessmentMutation();
  const [submitted, setSubmitted] = useState(false)
  const {data:userData, refetch: refetchUserDetails} = useGetUserDetailsQuery(null, {skip: !submitted})
  const [error, setError] = useState(null)
  const [prevPercent, setPrevPercent] = useState(0)
  const [percent, setPercent] = useState(Math.round(user.points/target * 100))
  const [openModal, setOpenModal] = useState(false)
  const [addedPoints, setAddedPoints] = useState(0)
  const navigate = useNavigate();

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      const message =
        "You have unfinished changes. Are you sure you want to leave?";
      event.returnValue = message;
      return message;
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if(exam) {
      setQuestions(exam.questions)
      setTimeLeft(exam.time_allowed * 60)
    }
  }, [exam]);

  useEffect(() => {
    if(timeLeft <= 0){
      handleSubmit()
    }
  }, [timeLeft]);


  const handleOptionChange = (questionId, answerId) => {
    setSelectedAnswers({ ...selectedAnswers, [questionId]: answerId });
  };

  const handleNext = () => {
    setCurrentQuestion((prev) => Math.min(prev + 1, questions?.length - 1));
  };

  const handlePrevious = () => {
    setCurrentQuestion((prev) => Math.max(prev - 1, 0));
  };

  const handleSubmit = () => {
    setError(null)
    setSubmitted(false)
    if(isSubmitting) return
    let data = {
      assessmentId: examId,
      body: {
        answers: selectedAnswers,
        time_taken: Math.round((exam.time_allowed * 60 - timeLeft)/60)
      },
    }
    submitAssessment(data).then((res)=> {
      if (!res?.data) setError(res?.error?.data?.error || 'Something went wrong!');
      else {
        setSubmitted(true)
      }
    })
  };

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
        if (userData.points !== user.points) {
          setAddedPoints(userData.points - user.points)
          setPrevPercent(percent)
          setPercent(Math.round(userData.points / target * 100))
          setOpenModal(true)
          localStorage.setItem("user", JSON.stringify(userData));
        }else{
          navigate('/exams')
        }
      });
    }
  }, [submitted, refetchUserDetails]);

  return (

    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{exam?.title}</h1>
      <div className="flex justify-between mb-4">
        <span>
          Question {currentQuestion + 1} of {questions?.length}
        </span>
        <span>Time Left: {formatTimeClock(timeLeft)}</span>
      </div>
      <div className="border p-4 rounded-lg">
        <h2 className="text-lg font-semibold mb-4">
          {questions && questions[currentQuestion]?.name}
        </h2>
        <div>
          {questions && questions[currentQuestion]?.answers?.map((answer) => (
            <label key={answer.id} className="block mb-2">
              <input

                type="radio"
                name={`answer-${answer.id}`}
                value={answer.id}
                onChange={() =>
                  handleOptionChange(questions[currentQuestion].id, answer.id)
                }
                checked={
                  selectedAnswers[questions[currentQuestion].id] === answer.id
                }
                className="mr-2"
              />
              {answer.name}
            </label>
          ))}
        </div>
        <div className="flex justify-between mt-4">
          <button
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className="bg-gray-500 text-white px-4 py-2 rounded disabled:opacity-50"
          >
            Previous
          </button>
          {error && <p className="text-red-600 float-end mt-2">{error}</p>}
          {currentQuestion !== questions?.length - 1 &&
            (<button
              onClick={handleNext}
              className="bg-blue hover:bg-blue-500 text-white px-4 py-2 rounded"
            >
              Next
            </button>)
          }
          {currentQuestion === questions?.length - 1 && (
            <div className="flex justify-end">
              <button
                onClick={handleSubmit}
                className={`bg-green-500 text-white px-4 py-2 rounded ${isSubmitting && 'opacity-75 cursor-not-allowed'}`}
              >
                { isSubmitting ?
                  <Spin className="text-white min-w-12"
                        indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}
                  /> :
                  'Submit'
                }
              </button>
            </div>
          )}
        </div>
      </div>
      {openModal && <ProgressBar percent={percent} from={prevPercent} to={percent} points={addedPoints} onClose={() => navigate('/exams')}/>}
    </div>
  );
};

export default ExamDetails;
