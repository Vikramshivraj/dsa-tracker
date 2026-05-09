import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { FaEnvelope, FaLock } from "react-icons/fa";

import toast from "react-hot-toast";

import API from "../services/api";

const Login = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const res = await API.post(
        "/auth/login",
        formData
      );

      localStorage.setItem(
        "token",
        res.data.token
      );

      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );

      toast.success("Login Successful");

      navigate("/dashboard");

    } catch (error) {

      toast.error(
        error.response?.data?.message ||
        "Something went wrong"
      );

    }
  };

  return (
    <div className="flex items-center justify-center min-h-[80vh]">

      <form
        onSubmit={handleSubmit}
        className="bg-zinc-900 p-10 rounded-2xl shadow-2xl w-full max-w-md"
      >

        <h2 className="text-4xl text-white font-bold text-center mb-8">
          Login
        </h2>

        <div className="space-y-5">

          <div className="flex items-center bg-zinc-800 px-4 py-3 rounded-lg">

            <FaEnvelope className="text-green-400 mr-3" />

            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              className="bg-transparent outline-none text-white w-full"
              onChange={handleChange}
            />

          </div>

          <div className="flex items-center bg-zinc-800 px-4 py-3 rounded-lg">

            <FaLock className="text-green-400 mr-3" />

            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              className="bg-transparent outline-none text-white w-full"
              onChange={handleChange}
            />

          </div>

          <button
            className="w-full bg-green-500 hover:bg-green-600 transition-all py-3 rounded-lg text-lg font-semibold"
          >
            Login
          </button>

        </div>

      </form>

    </div>
  );
};

export default Login;