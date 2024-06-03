import React from "react";
import Exams from "../Components/ExamsComponent";
import Layout from "../Components/Layout";
import Loading from "../Components/global/Loading";

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
