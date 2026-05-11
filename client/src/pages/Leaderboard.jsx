import { useEffect, useState } from "react";

import API from "../services/api";

import socket from "../services/socket";

const Leaderboard = () => {

  const [users, setUsers] =
    useState([]);

  const [search, setSearch] =
    useState("");

  useEffect(() => {

    fetchLeaderboard();

    socket.on(
      "leaderboardUpdated",
      () => {

        fetchLeaderboard();

      }
    );

    return () => {

      socket.off(
        "leaderboardUpdated"
      );

    };

  }, []);


  const fetchLeaderboard =
    async () => {

      try {

        const res = await API.get(
          "/leaderboard"
        );

        setUsers(res.data);

      } catch (error) {

        console.log(error);

      }
    };


  const filteredUsers =
    users.filter((user) =>

      user.name
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )

    );


  return (

    <div className="text-white max-w-6xl mx-auto">

      {/* HEADER */}

      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10">

        <h1 className="text-5xl font-bold">

          Leaderboard 🏆

        </h1>


        <input
          type="text"
          placeholder="Search user..."
          className="bg-zinc-900 px-5 py-3 rounded-xl outline-none w-full md:w-80"

          value={search}

          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

      </div>


      {/* LEADERBOARD */}

      <div className="space-y-5">

        {filteredUsers.map(
          (user, index) => (

            <div
              key={user._id}

              className={`

                flex items-center justify-between

                bg-zinc-900

                p-5 rounded-2xl

                shadow-lg

                transition-all duration-300

                hover:scale-[1.02]

                ${
                  index === 0
                    ? "border-2 border-yellow-400"
                    : index === 1
                    ? "border-2 border-zinc-400"
                    : index === 2
                    ? "border-2 border-orange-500"
                    : ""
                }

              `}
            >

              {/* LEFT */}

              <div className="flex items-center gap-5">

                <div className="text-3xl font-bold">

                  {index === 0
                    ? "🥇"
                    : index === 1
                    ? "🥈"
                    : index === 2
                    ? "🥉"
                    : `#${index + 1}`}

                </div>


                <div>

                  <h2 className="text-2xl font-bold">

                    {user.name}

                  </h2>

                  <p className="text-zinc-400 mt-1">

                    {user.totalSolved}
                    {" "}
                    Problems Solved

                  </p>

                </div>

              </div>


              {/* RIGHT */}

              <div className="text-right">

                <p className="text-3xl font-bold text-green-400">

                  {user.score}

                </p>

                <p className="text-zinc-400 text-sm">

                  Points

                </p>

              </div>


              {/* EXTRA STATS */}

              <div className="hidden lg:flex gap-8 text-center">

                <div>

                  <p className="text-green-400 font-bold text-xl">

                    {user.easySolved}

                  </p>

                  <p className="text-zinc-400 text-sm">

                    Easy

                  </p>

                </div>


                <div>

                  <p className="text-yellow-400 font-bold text-xl">

                    {user.mediumSolved}

                  </p>

                  <p className="text-zinc-400 text-sm">

                    Medium

                  </p>

                </div>


                <div>

                  <p className="text-red-400 font-bold text-xl">

                    {user.hardSolved}

                  </p>

                  <p className="text-zinc-400 text-sm">

                    Hard

                  </p>

                </div>


                <div>

                  <p className="text-orange-400 font-bold text-xl">

                    🔥 {user.streak}

                  </p>

                  <p className="text-zinc-400 text-sm">

                    Streak

                  </p>

                </div>

              </div>

            </div>

          )
        )}

      </div>

    </div>

  );
};

export default Leaderboard;