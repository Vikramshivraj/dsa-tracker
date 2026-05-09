import PerformanceChart from "../components/PerformanceChart";

import ActivityFeed from "../components/ActivityFeed";

const Dashboard = () => {

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  return (
    <div className="text-white">

      {/* PAGE TITLE */}
      <h1 className="text-3xl md:text-4xl font-bold mb-8">

        Welcome, {user?.name} 👋

      </h1>


      {/* STATS CARDS */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

        <div className="bg-zinc-900 p-4 md:p-6 rounded-2xl shadow-lg">

          <h2 className="text-lg md:text-xl mb-2">

            Total Solved

          </h2>

          <p className="text-3xl md:text-4xl font-bold text-green-400">

            {user?.totalSolved}

          </p>

        </div>


        <div className="bg-zinc-900 p-4 md:p-6 rounded-2xl shadow-lg">

          <h2 className="text-lg md:text-xl mb-2">

            Easy

          </h2>

          <p className="text-3xl md:text-4xl font-bold text-blue-400">

            {user?.easySolved}

          </p>

        </div>


        <div className="bg-zinc-900 p-4 md:p-6 rounded-2xl shadow-lg">

          <h2 className="text-lg md:text-xl mb-2">

            Medium

          </h2>

          <p className="text-3xl md:text-4xl font-bold text-yellow-400">

            {user?.mediumSolved}

          </p>

        </div>


        <div className="bg-zinc-900 p-4 md:p-6 rounded-2xl shadow-lg">

          <h2 className="text-lg md:text-xl mb-2">

            Hard

          </h2>

          <p className="text-3xl md:text-4xl font-bold text-red-400">

            {user?.hardSolved}

          </p>

        </div>

      </div>


      {/* PROFILE INFO */}
      <div className="mt-10 bg-zinc-900 p-6 md:p-8 rounded-2xl shadow-lg">

        <h2 className="text-2xl md:text-3xl font-bold mb-6">

          Profile Info

        </h2>

        <div className="space-y-4 text-base md:text-lg">

          <p>

            <span className="text-green-400">

              Name:

            </span>{" "}

            {user?.name}

          </p>


          <p>

            <span className="text-green-400">

              Email:

            </span>{" "}

            {user?.email}

          </p>


          <p>

            <span className="text-green-400">

              Score:

            </span>{" "}

            {user?.score}

          </p>


          <p>

            <span className="text-green-400">

              Streak:

            </span>{" "}

            {user?.streak}

          </p>

        </div>

      </div>


      {/* ANALYTICS SECTION */}
      <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {/* PERFORMANCE CHART */}
        <PerformanceChart user={user} />


        {/* LIVE ACTIVITY */}
        <ActivityFeed />


        {/* PERFORMANCE STATS */}
        <div className="bg-zinc-900 p-6 md:p-8 rounded-2xl shadow-lg">

          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">

            Performance Stats 🚀

          </h2>

          <div className="space-y-5">


            {/* PROGRESS BAR */}
            <div>

              <div className="flex justify-between mb-2">

                <span>Progress</span>

                <span>

                  {user?.score}/500

                </span>

              </div>

              <div className="w-full bg-zinc-700 rounded-full h-4">

                <div
                  className="bg-green-500 h-4 rounded-full"
                  style={{
                    width: `${Math.min(
                      (user?.score / 500) * 100,
                      100
                    )}%`,
                  }}
                />

              </div>

            </div>


            {/* STREAK */}
            <div className="bg-zinc-800 p-5 rounded-xl">

              <h3 className="text-lg md:text-xl font-semibold mb-2">

                Current Streak 🔥

              </h3>

              <p className="text-3xl md:text-4xl font-bold text-orange-400">

                {user?.streak}

              </p>

            </div>


            {/* SCORE */}
            <div className="bg-zinc-800 p-5 rounded-xl">

              <h3 className="text-lg md:text-xl font-semibold mb-2">

                Current Score ⭐

              </h3>

              <p className="text-3xl md:text-4xl font-bold text-green-400">

                {user?.score}

              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Dashboard;