import React, { useState, useEffect } from "react";
import { singleAssessment } from "../../data/index.jsx"; // Import the questions

const ExamDetails = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(20 * 60); // 20 minutes in seconds
  const questions = singleAssessment?.questions;

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
          clearInterval(timer);
          handleSubmit();
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

  const handleOptionChange = (questionId, option) => {
    setSelectedAnswers({ ...selectedAnswers, [questionId]: option });
  };

  const handleNext = () => {
    setCurrentQuestion((prev) => Math.min(prev + 1, questions.length - 1));
  };

  const handlePrevious = () => {
    setCurrentQuestion((prev) => Math.max(prev - 1, 0));
  };

  const handleSubmit = () => {
    window.removeEventListener("beforeunload", handleBeforeUnload);
    console.log("Submitting exam with answers:", selectedAnswers);
    // Add your submit logic here
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">React Exam</h1>
      <div className="flex justify-between mb-4">
        <span>
          Question {currentQuestion + 1} of {questions.length}
        </span>
        <span>Time Left: {formatTime(timeLeft)}</span>
      </div>
      <div className="border p-4 rounded-lg">
        <h2 className="text-lg font-semibold mb-4">
          {questions[currentQuestion].name}
        </h2>
        <div>
          {questions[currentQuestion].answers?.map((option, index) => (
            <label key={index} className="block mb-2">
              <input
                type="radio"
                name={`question-${currentQuestion}`}
                value={option.name} // Changed from `option` to `option.name`
                checked={
                  selectedAnswers[questions[currentQuestion].id] === option.name
                } // Ensure this is comparing the same thing
                onChange={() =>
                  handleOptionChange(questions[currentQuestion].id, option.name)
                } // Changed to `option.name`
                className="mr-2"
              />
              {option.name}
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
          <button
            onClick={handleNext}
            disabled={currentQuestion === questions.length - 1}
            className="bg-blue hover:bg-blue-500 text-white px-4 py-2 rounded"
          >
            Next
          </button>
        </div>
        {currentQuestion === questions.length - 1 && (
          <div className="flex justify-end mt-4">
            <button
              onClick={handleSubmit}
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              Submit
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExamDetails;
