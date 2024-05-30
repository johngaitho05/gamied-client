import React from "react";
import PropTypes from "prop-types";

const ExamModal = ({ exam, onClose, onProceed }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl">
        <h2 className="text-lg font-bold mb-4">{exam.title}</h2>
        <p className="mb-4">{exam?.description}</p>
        <div className="flex justify-end">
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={onProceed}
          >
            Proceed
          </button>
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
