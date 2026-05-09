import { Link } from "react-router-dom";

import {
  FaTrophy,
  FaCode,
  FaChartLine,
  FaFire,
} from "react-icons/fa";

import FeatureCard from "../components/FeatureCard";

const Home = () => {

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  return (
    <div className="text-white">

      {/* HERO SECTION */}

      <div className="min-h-[85vh] flex flex-col justify-center items-center text-center">

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight mb-8">

          Master DSA <br />

          <span className="text-green-400">
            Climb The Leaderboard 🚀
          </span>

        </h1>

        <p className="text-zinc-400 text-xl max-w-3xl mb-10 leading-relaxed">

          Practice coding problems, track your
          progress, compete with friends and
          improve your problem-solving skills
          with real-time rankings.

        </p>

        <div className="flex gap-5 flex-wrap justify-center">

          <Link to="/problems">

            <button className="bg-green-500 hover:bg-green-600 px-8 py-4 rounded-xl text-xl font-semibold transition-all">

              Start Solving

            </button>

          </Link>

          <Link to="/leaderboard">

            <button className="bg-zinc-800 hover:bg-zinc-700 px-6 py-3 md:px-8 md:py-4 text-lg md:text-xl font-semibold transition-all">

              View Leaderboard

            </button>

          </Link>

        </div>

      </div>


      {/* STATS SECTION */}

      <div className="grid md:grid-cols-3 gap-8 mb-24">

        <div className="bg-zinc-900 p-8 rounded-2xl text-center">

          <h2 className="text-5xl font-bold text-green-400 mb-3">
            100+
          </h2>

          <p className="text-zinc-400 text-lg">
            DSA Problems
          </p>

        </div>

        <div className="bg-zinc-900 p-8 rounded-2xl text-center">

          <h2 className="text-5xl font-bold text-yellow-400 mb-3">
            Live
          </h2>

          <p className="text-zinc-400 text-lg">
            Real-time Rankings
          </p>

        </div>

        <div className="bg-zinc-900 p-8 rounded-2xl text-center">

          <h2 className="text-5xl font-bold text-red-400 mb-3">
            24/7
          </h2>

          <p className="text-zinc-400 text-lg">
            Track Progress
          </p>

        </div>

      </div>


      {/* FEATURES */}

      <div className="mb-24">

        <h2 className="text-5xl font-bold text-center mb-16">

          Platform Features 🔥

        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          <FeatureCard
            icon={<FaCode />}
            title="DSA Problems"
            desc="Practice coding questions with multiple difficulty levels."
          />

          <FeatureCard
            icon={<FaTrophy />}
            title="Leaderboard"
            desc="Compete with other coders using live rankings."
          />

          <FeatureCard
            icon={<FaChartLine />}
            title="Analytics"
            desc="Track your coding performance visually."
          />

          <FeatureCard
            icon={<FaFire />}
            title="Daily Streak"
            desc="Maintain consistency and improve daily."
          />

        </div>

      </div>


      {/* USER SECTION */}

      {user && (

        <div className="bg-gradient-to-r from-green-500 to-green-700 p-10 rounded-3xl text-center mb-20">

          <h2 className="text-4xl font-bold mb-5">

            Welcome Back, {user.name} 👋

          </h2>

          <p className="text-xl mb-8">

            Continue solving problems and climb the leaderboard.

          </p>

          <Link to="/dashboard">

            <button className="bg-black text-white px-8 py-4 rounded-xl text-lg font-semibold hover:scale-105 transition-all">

              Go To Dashboard

            </button>

          </Link>

        </div>

      )}


      {/* FOOTER */}

      <div className="border-t border-zinc-800 py-10 text-center text-zinc-500">

        © 2026 DSA Tracker • Built with MERN Stack 🚀

      </div>

    </div>
  );
};

export default Home;