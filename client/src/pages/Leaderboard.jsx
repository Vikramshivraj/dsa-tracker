import { useEffect, useState } from "react";
import API from "../services/api";
import socket from "../services/socket";

const Leaderboard = () => {

  const [users, setUsers] = useState([]);

  const [search, setSearch] = useState("");

  useEffect(() => {

  fetchLeaderboard();

  socket.on(
    "leaderboardUpdated",
    () => {

      fetchLeaderboard();

    }
  );

  return () => {

    socket.off("leaderboardUpdated");

  };

}, []);

  const fetchLeaderboard = async () => {

    try {

      const res = await API.get("/leaderboard");

      setUsers(res.data);

    } catch (error) {

      console.log(error);

    }
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(
      search.toLowerCase()
    )
  );

  return (
    <div className="text-white">

      <div className="flex justify-between items-center mb-8">

        <h1 className="text-4xl font-bold">
          Leaderboard 🏆
        </h1>

        <input
          type="text"
          placeholder="Search user..."
          className="bg-zinc-900 px-4 py-2 rounded-lg outline-none"
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

      </div>

      <div className="overflow-x-auto">

        <table className="w-full bg-zinc-900 rounded-2xl overflow-hidden">

          <thead className="bg-zinc-800 text-left">

            <tr>

              <th className="p-4">Rank</th>

              <th className="p-4">Name</th>

              <th className="p-4">Score</th>

              <th className="p-4">Easy</th>

              <th className="p-4">Medium</th>

              <th className="p-4">Hard</th>

              <th className="p-4">Streak</th>

            </tr>

          </thead>

          <tbody>

            {filteredUsers.map((user) => (

              <tr
                key={user._id}
                className="border-b border-zinc-800 hover:bg-zinc-800 transition-all"
              >

                <td className="p-4 font-bold">

                  {user.rank === 1
                    ? "🥇"
                    : user.rank === 2
                    ? "🥈"
                    : user.rank === 3
                    ? "🥉"
                    : user.rank}

                </td>

                <td className="p-4">
                  {user.name}
                </td>

                <td className="p-4 text-green-400 font-bold">
                  {user.score}
                </td>

                <td className="p-4">
                  {user.easySolved}
                </td>

                <td className="p-4">
                  {user.mediumSolved}
                </td>

                <td className="p-4">
                  {user.hardSolved}
                </td>

                <td className="p-4">
                  🔥 {user.streak}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default Leaderboard;