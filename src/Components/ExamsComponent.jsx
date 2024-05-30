import React, { useState } from "react";
import ExamCard from "../Components/global/ExamCard";
import ExamModal from "../Components/ExamModal";
import { exams } from "../data/index";

const Exam = () => {
  const [selectedExam, setSelectedExam] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleExamClick = (exam) => {
    setSelectedExam(exam);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedExam(null);
  };

  const handleProceed = () => {
    console.log("Proceeding with exam:", selectedExam);
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
          onProceed={handleProceed}
        />
      )}
    </div>
  );
};

export default Exam;
