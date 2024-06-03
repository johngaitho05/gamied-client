import React, { useState } from "react";
import ExamCard from "./ExamCard.jsx";
import ExamModal from "./ExamModal.jsx";
import { assessments } from "../../data/index.jsx";
import { useNavigate } from "react-router-dom";

const Exams = () => {
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
    navigate(`/exams/assessment/${id}`);

    setShowModal(false);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Exams</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {assessments.map((exam) => (
          <ExamCard
            key={exam.id}
            exam={exam}
            handleExamClick={handleExamClick}/>
        ))}
      </div>

      {showModal && (
        <ExamModal
          exam={selectedExam}
          onClose={handleCloseModal}
          onProceed={() => handleProceed(1)}
        />
      )}
    </div>
  );
};

export default Exams;