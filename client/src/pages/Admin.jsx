import { useState } from "react";

import API from "../services/api";

import toast from "react-hot-toast";

const Admin = () => {

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const [formData, setFormData] = useState({
    title: "",
    difficulty: "Easy",
    tags: "",
    points: "",
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
        "/problems",
        {
          ...formData,
          tags: formData.tags.split(","),
          role: user.role,
        }
      );

      toast.success(
        "Problem Added Successfully 🚀"
      );

      setFormData({
        title: "",
        difficulty: "Easy",
        tags: "",
        points: "",
      });

    } catch (error) {

      toast.error(
        error.response?.data?.message
      );

    }
  };

  return (
    <div className="text-white max-w-2xl mx-auto">

      <h1 className="text-5xl font-bold mb-10 text-center">

        Admin Panel ⚡

      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-zinc-900 p-8 rounded-2xl shadow-lg space-y-6"
      >

        <input
          type="text"
          name="title"
          placeholder="Problem Title"
          value={formData.title}
          onChange={handleChange}
          className="w-full bg-zinc-800 p-4 rounded-xl outline-none"
        />

        <select
          name="difficulty"
          value={formData.difficulty}
          onChange={handleChange}
          className="w-full bg-zinc-800 p-4 rounded-xl outline-none"
        >

          <option>Easy</option>

          <option>Medium</option>

          <option>Hard</option>

        </select>

        <input
          type="text"
          name="tags"
          placeholder="Tags (comma separated)"
          value={formData.tags}
          onChange={handleChange}
          className="w-full bg-zinc-800 p-4 rounded-xl outline-none"
        />

        <input
          type="number"
          name="points"
          placeholder="Points"
          value={formData.points}
          onChange={handleChange}
          className="w-full bg-zinc-800 p-4 rounded-xl outline-none"
        />

        <button
          className="w-full bg-green-500 hover:bg-green-600 py-4 rounded-xl text-xl font-semibold transition-all"
        >

          Add Problem

        </button>

      </form>

    </div>
  );
};

export default Admin;