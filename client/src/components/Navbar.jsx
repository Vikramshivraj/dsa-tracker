import { Link, useNavigate } from "react-router-dom";

import OnlineUsers from "./OnlineUsers";

const Navbar = () => {

  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const handleLogout = () => {

    localStorage.removeItem("token");

    localStorage.removeItem("user");

    navigate("/login");

  };

  return (
    <nav className="bg-zinc-900 text-white shadow-lg px-6 py-4 mb-10 rounded-2xl">

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">


        {/* LOGO */}
        <div className="text-center lg:text-left">

          <Link
            to="/"
            className="text-3xl font-extrabold text-green-400 tracking-wide"
          >

            DSA Tracker 🚀

          </Link>

        </div>


        {/* ONLINE USERS */}
        <div className="flex justify-center">

          <OnlineUsers />

        </div>


        {/* NAV LINKS */}
        <div className="flex flex-wrap justify-center items-center gap-4 text-lg">

          <Link
            to="/"
            className="hover:text-green-400 transition-all"
          >

            Home

          </Link>


          <Link
            to="/leaderboard"
            className="hover:text-green-400 transition-all"
          >

            Leaderboard

          </Link>


          <Link
            to="/problems"
            className="hover:text-green-400 transition-all"
          >

            Problems

          </Link>


          {token ? (
            <>

              <Link
                to="/dashboard"
                className="hover:text-green-400 transition-all"
              >

                Dashboard

              </Link>


              {user?.role === "admin" && (

                <Link
                  to="/admin"
                  className="hover:text-green-400 transition-all"
                >

                  Admin

                </Link>

              )}


              <p className="text-green-400 font-semibold">

                {user?.name}

              </p>


              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg transition-all"
              >

                Logout

              </button>

            </>
          ) : (
            <>

              <Link
                to="/login"
                className="hover:text-green-400 transition-all"
              >

                Login

              </Link>


              <Link
                to="/register"
                className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg transition-all"
              >

                Register

              </Link>

            </>
          )}

        </div>

      </div>

    </nav>
  );
};

export default Navbar;