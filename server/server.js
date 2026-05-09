const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const http = require("http");

const { Server } = require("socket.io");

const authRoutes = require("./routes/authRoutes");

const leaderboardRoutes = require(
  "./routes/leaderboardRoutes"
);

const problemRoutes = require(
  "./routes/problemRoutes"
);

const app = express();

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT"],
  },
});


// MIDDLEWARE
app.use(
  cors({
    origin:
      "https://dsa-tracker-vert-six.vercel.app",

    credentials: true,
  })
);

app.use(express.json());


// ROUTES
app.use("/api/auth", authRoutes);

app.use(
  "/api/leaderboard",
  leaderboardRoutes
);

app.use("/api/problems", problemRoutes);

// SOCKET CONNECTION
let onlineUsers = 0;

io.on("connection", (socket) => {

  onlineUsers++;

  console.log(
    "User Connected:",
    socket.id
  );

  // SEND ONLINE USERS COUNT
  io.emit(
    "onlineUsers",
    onlineUsers
  );

  socket.on("disconnect", () => {

    onlineUsers--;

    console.log(
      "User Disconnected"
    );

    io.emit(
      "onlineUsers",
      onlineUsers
    );

  });

});

app.set("io", io);

app.get("/", (req, res) => {
  res.send("API Running...");
});

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {

    console.log("MongoDB Connected");

    server.listen(PORT, () => {

      console.log(
        `Server running on port ${PORT}`
      );

    });

  })
  .catch((err) => console.log(err));