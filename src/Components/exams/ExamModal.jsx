import React from "react";
import PropTypes from "prop-types";
import {formatTimeStr} from "../../helpers/utils.js";

const ExamModal = ({ exam, onClose, onProceed }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl">
        <h2 className="text-lg font-bold mb-4">{exam.title}</h2>
        <p className="mb-4">{exam?.description}</p>
        { exam.result.score > 0 &&
          <div className="results leading-7">
            <h3 className="text-md font-bold">Results</h3>
            <p><span className="text-cta">Status:</span> {exam.result.comment}</p>
            <p><span className="text-cta">Score:</span> {exam.result.score}%</p>
            <p><span className="text-cta">Time Taken:</span> {formatTimeStr(exam.result.time_taken)}</p>
          </div>
        }
        <div className="flex justify-end">
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
            onClick={onClose}
          >
            Close
          </button>
          {
            exam.result.score === -1 &&
            <button
              className="bg-blue text-white px-4 py-2 rounded"
              onClick={onProceed}
            >
              Proceed
            </button>
          }
        </div>
      </div>
    </div>
  );
};

ExamModal.propTypes = {
  exam: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  onProceed: PropTypes.func.isRequired,
};

export default ExamModal;
