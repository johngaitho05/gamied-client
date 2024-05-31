import React, { useState } from "react";
import ExamCard from "../Components/global/ExamCard";
import ExamModal from "../Components/ExamModal";
import { assessments } from "../data/index";

const Exam = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Exams</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {assessments.map((exam) => (
          <ExamCard key={exam.id} exam={exam} />
        ))}
      </div>
    </div>
  );
};

export default Exam;
