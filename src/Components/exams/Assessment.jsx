import React, { useState } from "react";
import AssessmentCard from "./AssesmentCard.jsx";
import { singleAssessment } from "../../data/index.jsx";
import ExamModal from "./ExamModal.jsx";

import { useNavigate } from "react-router-dom";

function App() {
  const [selectedExam, setSelectedExam] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleExamClick = (exam) => {
    setSelectedExam(exam);
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedExam(null);
  };

  const handleProceed = (id) => {
    console.log("Proceeding with exam:", selectedExam);
    navigate(`/exams/assessment/${id}`);

    setShowModal(false);
  };

  return (
    <div className="App">
      <AssessmentCard
        assessment={singleAssessment}
        handleExamClick={handleExamClick}
      />
      {showModal && (
        <ExamModal
          exam={selectedExam}
          onClose={handleCloseModal}
          onProceed={() => handleProceed(1)}
        />
      )}
    </div>
  );
}

export default App;
