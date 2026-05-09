import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Leaderboard from "./pages/Leaderboard";
import ProtectedRoute from "./routes/ProtectedRoute";
import Problems from "./pages/Problems";
import Admin from "./pages/Admin";

function App() {
  return (
    <div className="bg-black min-h-screen">

      <Navbar />

      <div className="p-8">
        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Register />} />

          <Route path="/dashboard" element={
                <ProtectedRoute>
                        <Dashboard />
                </ProtectedRoute>
          }
            />

          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/problems" element={<Problems />} />
          <Route path="/admin" element={<Admin />} />

        </Routes>
      </div>

    </div>
  );
}

export default App;