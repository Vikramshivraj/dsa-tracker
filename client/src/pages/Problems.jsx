import { useEffect, useState } from "react";

import API from "../services/api";

import toast from "react-hot-toast";

import socket from "../services/socket";

const Problems = () => {

  // PROBLEMS STATE
  const [problems, setProblems] = useState([]);

  // USER STATE
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user"))
  );

  // LOADING STATE
  const [loading, setLoading] =
    useState(true);


  // FETCH PROBLEMS
  useEffect(() => {

    fetchProblems();

    // REAL-TIME UPDATE
    socket.on(
      "leaderboardUpdated",
      () => {

        fetchProblems();

      }
    );

    return () => {

      socket.off("leaderboardUpdated");

    };

  }, []);


  // GET ALL PROBLEMS
  const fetchProblems = async () => {

    try {

      setLoading(true);

      const res = await API.get(
        "/problems"
      );

      setProblems(res.data);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }
  };


  // SOLVE PROBLEM
  const handleSolve = async (id) => {

    try {

      const res = await API.put(
        `/problems/solve/${id}`,
        {
          userId: user._id,
        }
      );

      // UPDATE LOCAL STORAGE
      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );

      // UPDATE STATE
      setUser(res.data.user);

      toast.success(
        "Problem Solved 🚀"
      );

    } catch (error) {

      toast.error(
        error.response?.data?.message
      );

    }
  };


  // DELETE PROBLEM
  const handleDelete = async (id) => {

    try {

      await API.delete(
        `/problems/${id}`,
        {
          data: {
            role: user.role,
          },
        }
      );

      toast.success(
        "Problem Deleted"
      );

      fetchProblems();

    } catch (error) {

      toast.error(
        error.response?.data?.message
      );

    }
  };


  // LOADING SCREEN
  if (loading) {

    return (

      <div className="text-white text-3xl flex justify-center items-center h-[70vh]">

        Loading Problems...

      </div>

    );
  }


  return (
    <div className="text-white">

      {/* PAGE TITLE */}
      <h1 className="text-4xl font-bold mb-8">

        DSA Problems 💻

      </h1>


      {/* PROBLEMS GRID */}
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">

        {problems.length === 0 ? (

          <div className="text-center col-span-3">

            <h2 className="text-3xl text-zinc-400">

              No Problems Found 😢

            </h2>

          </div>

        ) : (

          problems.map((problem) => (

            <div
              key={problem._id}
              className="bg-zinc-900 p-4 md:p-6 rounded-2xl shadow-lg hover:scale-[1.02] transition-all duration-300"
            >

              {/* TITLE */}
              <h2 className="text-xl md:text-2xl font-bold mb-4">

                {problem.title}

              </h2>


              {/* DIFFICULTY + POINTS */}
              <div className="flex gap-3 mb-4">

                <span
                  className={`px-3 py-1 rounded-full text-sm

                  ${
                    problem.difficulty === "Easy"
                      ? "bg-green-500"
                      : problem.difficulty ===
                        "Medium"
                      ? "bg-yellow-500"
                      : "bg-red-500"
                  }`}
                >

                  {problem.difficulty}

                </span>

                <span className="bg-blue-500 px-3 py-1 rounded-full text-sm">

                  {problem.points} Points

                </span>

              </div>


              {/* TAGS */}
              <div className="flex flex-wrap gap-2 mb-6">

                {problem.tags.map(
                  (tag, index) => (

                    <span
                      key={index}
                      className="bg-zinc-800 px-2 py-1 rounded-lg text-sm"
                    >

                      #{tag}

                    </span>

                  )
                )}

              </div>


              {/* SOLVE BUTTON */}
              <button
                onClick={() =>
                  handleSolve(problem._id)
                }

                disabled={user?.solvedProblems?.includes(
                  problem._id
                )}

                className={`w-full py-3 rounded-xl font-semibold transition-all

                ${
                  user?.solvedProblems?.includes(
                    problem._id
                  )
                    ? "bg-zinc-700 cursor-not-allowed"
                    : "bg-green-500 hover:bg-green-600"
                }`}
              >

                {user?.solvedProblems?.includes(
                  problem._id
                )
                  ? "Solved ✅"
                  : "Solve Problem"}

              </button>


              {/* DELETE BUTTON */}
              {user?.role === "admin" && (

                <button
                  onClick={() =>
                    handleDelete(problem._id)
                  }

                  className="w-full mt-3 bg-red-500 hover:bg-red-600 py-3 rounded-xl font-semibold transition-all"
                >

                  Delete Problem

                </button>

              )}

            </div>

          ))

        )}

      </div>

    </div>
  );
};

export default Problems;