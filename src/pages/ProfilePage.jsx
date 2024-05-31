import React from "react";
import Layout from "../Components/Layout";
import Courses from "../Components/profile/courses";
import Sidebar from "../Components/profile/sidebar";

const ProfilePage = () => {
  return (
    <Layout>
      <div className="flex gap-4 flex-wrap lg:flex-nowrap pb-10">
        <Sidebar className="md:col-span-1" />
        <Courses className="md:col-span-2" />
      </div>
    </Layout>
  );
};

export default ProfilePage;
