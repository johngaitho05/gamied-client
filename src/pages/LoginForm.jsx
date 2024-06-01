import React, {useEffect, useState} from 'react';

import {
  useGetTokenMutation,
  useGetUserDetailsQuery,
} from "../redux/apis/apiSlice";
import {Alert, Button, Form, Input, Spin} from "antd";
import {LoadingOutlined} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const [getToken, { isLoading }] = useGetTokenMutation()
  const [token, setToken] = useState(null);
  const [userDetails, setUserDetails] = useState(null);
  const { data, refetch: refetchUserDetails } = useGetUserDetailsQuery(null, {
    skip: !token, // Skip the query if the token is not yet available
  });
  const [error, setError] = useState("")
  const [form] = Form.useForm();

  useEffect(() => {
    if (token) {
      // Refetch user details when token is set
      const fetchUserDetails = async () => {
        try {
          const userData = await refetchUserDetails();
          return userData.data;
        } catch (err) {
          console.error('Failed to fetch user details:', err);
        }
      };
      fetchUserDetails().then(userData => setUserDetails(userData));
    }
  }, [token, refetchUserDetails]);

  useEffect(() => {
    if (userDetails) {
      localStorage.setItem('user', JSON.stringify(userDetails));
      navigate('/')
    }
  }, [userDetails]);

  const handleSubmit = async (formData) => {
    setError("")
    await getToken(formData).then(async function (token_res) {
      if (!token_res?.data) {
        setError(token_res?.error?.data?.error || "Something went wrong!")
      } else {
        localStorage.setItem('gamiedTokens', JSON.stringify(token_res.data))
        setToken(token_res.data.access)
      }
    })
  };
  return (
    <div className=" h-full px-4 w-full lg:w-[45%] flex flex-col items-center ">
      <Form layout="vertical" form={form} onFinish={handleSubmit}>
        <Form.Item name="email" label="Email"  rules={[{
          required: true,
          type: "email",
          message: 'Please enter a valid email'
        }]}>
          <Input placeholder="Your email" className="w-full h-[40px]"/>
        </Form.Item>
        <Form.Item name="password" label="Password"
                   rules={[{
                     required: true,
                     message: 'Please input your password'
                   }]} hasFeedback>
          <Input.Password className="w-full h-[40px]"/>
        </Form.Item>
        <Form.Item className="mb-2">
          <Button type="primary" htmlType="submit"
                  className="w-full bg-black text-center h-[40px] hover:bg-gray-950"
                  disabled={isLoading}>
            {isLoading ? <Spin indicator={<LoadingOutlined style={{fontSize: 24}} spin/>}/> : 'Submit'}
          </Button>
        </Form.Item>
        {error && <Alert className="my-2" message={error} type="error" />}
      </Form>
    </div>
  );
};

export default LoginForm;
