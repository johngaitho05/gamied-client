import React, { useEffect, useState } from "react";
import {
  useGetTokenMutation,
  useGetUserDetailsQuery,
} from "../../redux/apis/apiSlice";
import { Alert, Button, Form, Input, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";

const LoginForm = () => {
  const navigate = useNavigate();
  const [getToken, { isLoading }] = useGetTokenMutation();
  const [token, setToken] = useState(null);
  const { refetch: refetchUserDetails } = useGetUserDetailsQuery(null, {
    skip: !token,
  });
  const [error, setError] = useState("");
  const [form] = Form.useForm();

  useEffect(() => {
    if (token) {
      const fetchUserDetails = async () => {
        try {
          const userData = await refetchUserDetails();
          return userData.data;
        } catch (err) {
          console.error("Failed to fetch user details:", err);
        }
      };
      fetchUserDetails().then((userData) => {
        localStorage.setItem("user", JSON.stringify(userData));
        navigate("/");
      });
    }
  }, [token, refetchUserDetails]);

  const handleSubmit = async (formData) => {
    setError("");
    await getToken(formData).then(async function (token_res) {
      if (!token_res?.data) {
        setError(token_res?.error?.data?.error || "Something went wrong!");
      } else {
        localStorage.setItem("gamiedTokens", JSON.stringify(token_res.data));
        setToken(token_res.data.access);
      }
    });
  };

  return (
    <div className="background-pattern min-h-screen flex flex-col items-center justify-center relative overflow-hidden ">
      <div className="absolute top-0 left-0 right-0 h-24 flex justify-between items-center px-6 max-w-7xl mx-auto ">
        <div className="font-bold text-2xl cursor-pointer  gap-1 ">
          <img
            src={logo}
            alt="EventPulse"
            className="w-[5rem] h-[5rem] object-cover"
          />
        </div>
      </div>
      <div className="wave-pattern"></div>
      <div className="p-8 rounded-lg  z-10 mt-32 max-w-md w-full form-container">
        <div className="dot"></div>
        <div className="dot2"></div>
        <div className="flex justify-center mb-4">
          <h2 className="text-3xl font-extrabold text-center text-blue  w-fit gradient-border-bottom ">
            Login
          </h2>
        </div>
        <p className="text-center text-sm text-gray-600">
          Welcome back! Login to access GamiEd.
        </p>
        <Form
          layout="vertical"
          form={form}
          onFinish={handleSubmit}
          className="mt-8 space-y-6"
        >
          <Form.Item
            name="email"
            label="email"
            rules={[{ required: true, message: "Please enter your username" }]}
          >
            <Input
              placeholder="Email"
              className="w-full h-12 px-3 border border-gray-300 rounded-md"
            />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: true, message: "Please input your password" }]}
            hasFeedback
          >
            <Input.Password
              placeholder="Password"
              className="w-full h-12 px-3 border border-gray-300 rounded-md"
            />
          </Form.Item>
          <Form.Item>
            <Button
              // type="primary"
              htmlType="submit"
              className="w-full h-12 bg-gradient-to-r from-pink-500 to-orange-500 text-white hover:from-pink-600 hover:bg-orange-600 rounded-md flex justify-center items-center"
              disabled={isLoading}
            >
              {isLoading ? (
                <Spin
                  indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}
                />
              ) : (
                "CONTINUE"
              )}
            </Button>
          </Form.Item>
          {error && <Alert message={error} type="error" className="my-2" />}
        </Form>
      </div>
    </div>
  );
};

export default LoginForm;
