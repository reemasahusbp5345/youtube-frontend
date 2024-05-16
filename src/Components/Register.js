import React, { useState } from "react";
import logo from "../assets/logo.jpg";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
    avatar: null,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleFileChange = (e) => {
    console.log(e.target.files[0], "helloworld");
    setFormData({ ...formData, avatar: e.target.files[0] });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/users/register",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      navigate("/login");
      console.log(response?.data);
    } catch (error) {
      console.error("Error: ", error?.response);
    }
  };
  return (
    <div className="bg-black text-white h-screen flex justify-center">
      <div className="w-1/2 m-auto flex flex-col justify-center items-center p-2 border border-white">
        <img src={logo} alt="logo" className="w-24 h-24 object-cover" />
        <form className="p-2" onSubmit={handleSubmit}>
          <div className="p-1 m-1">
            <label>Fullname*</label>
            <input
              className="border border-gray-500 p-1 w-full text-black"
              type="text"
              placeholder="Fullname"
              name="fullName"
              value={formData?.fullName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="p-1 m-1">
            <label>Username*</label>
            <input
              className="border border-gray-500 p-1 w-full text-black"
              type="text"
              placeholder="username"
              name="username"
              value={formData?.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="p-1 m-1">
            <label>Email*</label>
            <input
              className="border border-gray-500 p-1 w-full text-black"
              type="text"
              placeholder="email"
              name="email"
              value={formData?.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="p-1 m-1">
            <label>Password*</label>
            <input
              className="border border-gray-500 p-1 w-full text-black"
              type="text"
              placeholder="password"
              name="password"
              value={formData?.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="p-1 m-1">
            <label>Avatar*</label>
            <input
              className="border border-gray-500 p-1 w-full "
              type="file"
              placeholder="avatar"
              name="avatar"
              accept="image/*"
              onChange={handleFileChange}
              required
            />
          </div>
          <div className="flex justify-center p-1 m-1">
            <button
              type="submit"
              className="bg-purple-500 rounded-sm p-2 m-4 w-1/2"
            >
              Sign up
            </button>
          </div>
          <div className="p-1 m-1 underline flex justify-center">
            <Link to="/login">Already registered!!! Sign In</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
