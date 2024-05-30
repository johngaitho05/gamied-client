import React, { useState } from "react";
import ExamCard from "../Components/global/ExamCard";
import ExamModal from "../Components/ExamModal";
import { exams } from "../data/index";
import { useNavigate } from "react-router-dom";

const Exam = () => {
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
    navigate(`/exams/${id}`);

    setShowModal(false);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Exams</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {exams.map((exam) => (
          <ExamCard key={exam.id} exam={exam} onClick={handleExamClick} />
        ))}
      </div>
      {showModal && (
        <ExamModal
          exam={selectedExam}
          onClose={handleCloseModal}
          onProceed={handleProceed(1)}
        />
      )}
    </div>
  );
};

export default Exam;
