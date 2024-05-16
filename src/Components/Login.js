import React, { useState } from "react";
import logo from "../assets/logo.jpg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setLogin } from "../Redux/userSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post("http://localhost:8000/api/v1/users/login", formData, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          console.log(res?.data?.data?.user);
          localStorage.setItem("accessToken", res?.data?.data?.accessToken);
          localStorage.setItem("user", JSON.stringify(res?.data?.data?.user));
          localStorage.setItem("isLoggedIn", true);
          dispatch(setLogin());
          navigate("/");
        })
        .catch((error) => {
          throw new Error();
        });
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
            <label> Email*</label>
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

          <div className="flex justify-center p-1 m-1">
            <button
              type="submit"
              className="bg-purple-500 rounded-sm p-2 m-4 w-1/2"
            >
              Login
            </button>
          </div>
          <div className="p-1 m-1 underline flex justify-center">
            <Link to="/register">New to Playtube?. Sign Up</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
