import React from "react";
import { Button, Form, Input, message } from "antd";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { https } from "../../services/Config";
import { setLogin } from "../../redux/userSlice";
import { userLocalStorage } from "../../services/localStorage";

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const FormLogin = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();

  const onFinish = (values) => {
    https
      .post("/QuanLyNguoiDung/DangNhap", values)
      .then((res) => {
        console.log(res);
        dispatch(setLogin(res.data.content));

        message.success("Dang nhap thanh cong");
        navigate(-1);
        userLocalStorage.set(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Form
      className="w-1/2"
      layout="vertical"
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 20,
      }}
      // style={{
      //   maxWidth: 600,
      // }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="taiKhoan"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="matKhau"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      {/* <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 20,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item> */}

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 20,
        }}
      >
        <Button type="primary" className="bg-orange-400" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
  // <div>
  // </div>
};
export default FormLogin;
