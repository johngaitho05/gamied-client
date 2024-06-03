import React from "react";
import Exams from "../Components/exams/Exams";
import Layout from "../Components/global/Layout.jsx";

const ExamPage = () => {
  return (
    <div>
      <Layout>
        <Exams />
        <Loading />
      </Layout>
    </div>
  );
};

export default ExamPage;
