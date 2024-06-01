import React from "react";
import { Row, Col } from "antd";
import Layout from "../Components/Layout";
import Courses from "../Components/profile/courses";
import Sidebar from "../Components/profile/sidebar";

const ProfilePage = () => {
  return (
    <Layout>
      <Row gutter={[16, 16]} className="pb-10">
        <Col xs={24} sm={24} md={8} lg={7}>
          <Sidebar />
        </Col>

        <Col xs={24} sm={24} md={16} lg={17}>
          <Courses />
        </Col>
      </Row>
    </Layout>
  );
};

export default ProfilePage;
