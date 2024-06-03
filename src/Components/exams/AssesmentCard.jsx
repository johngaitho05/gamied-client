import React from "react";

function Assessment({ assessment, handleExamClick }) {
  const { title, description, time_allowed, pass_mark, completed, result } =
    assessment;

  return (
    <div className="bg-white border rounded-lg overflow-hidden shadow-md p-6 m-4">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <p className="text-gray-800 text-base mb-3">{description}</p>
      <ul className="list-disc list-inside text-gray-700">
        <li>Time allowed: {time_allowed} minutes</li>
        <li>Pass mark: {pass_mark}%</li>
        <li>
          Status:{" "}
          <span className={completed ? "text-green-500" : "text-red-500"}>
            {completed ? "Completed" : "Not Completed"}
          </span>
        </li>
        {/* {result.score >= 0 && <li>Score: {result.score}</li>} */}
        {/* {result.comment && <li>Comment: {result.comment}</li>} */}
      </ul>
      {!completed && (
        <button
          className="bg-blue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
          onClick={() => handleExamClick(assessment)}
        >
          Start Assessment
        </button>
      )}
      <div className="mt-6">
        <h3 className="text-lg font-semibold">Exam Instructions:</h3>
        <p className="text-gray-700">
          Please read the following instructions carefully before starting your
          assessment:
        </p>
        <ul className="list-disc list-inside text-gray-600">
          <li>Ensure you are in a quiet environment.</li>
          <li>Keep all necessary materials ready before starting.</li>
          <li>
            Do not use prohibited aids such as mobile phones or textbooks.
          </li>
          <li>Once started, the exam timer cannot be paused.</li>
          <li>Check and save your answers regularly as you proceed.</li>
        </ul>
      </div>
    </div>
  );
}

export default Assessment;
