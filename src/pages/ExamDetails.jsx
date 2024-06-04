import React from "react";
import ExamDetails from "../Components/exams/ExamDetails.jsx";
import Layout from "../Components/global/Layout.jsx";
import {useParams} from "react-router-dom";

const ExamDetailsPage = () => {
  const examId = useParams().id
  return (
    <div>
      <Layout>
        <ExamDetails examId={examId}/>
      </Layout>
    </div>
  );
};

export default ExamDetailsPage;
