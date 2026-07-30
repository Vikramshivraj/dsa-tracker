const Problem = require("../models/Problem");
const User = require("../models/User");

const addProblem = async (req, res) => {
  try {
    const {
      title,
      difficulty,
      description,
      leetcodeLink,
      youtubeLink,
      tags,
      points,
    } = req.body;
    
    const problem = await Problem.create({
      title,
      difficulty,
      description,
      leetcodeLink,
      youtubeLink,
      tags,
      points,
    });

    res.status(201).json(problem);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Something went wrong",
    });
  }
};

const getProblems = async (req, res) => {
  try {
    const problems = await Problem.find();

    res.status(200).json(problems);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Something went wrong",
    });
  }
};

const solveProblem = async (req, res) => {
  try {
    const problem = await Problem.findById(req.params.id);
    const user = await User.findById(req.user._id);

    if (!problem || !user) {
      return res.status(404).json({
        message: "Not Found",
      });
    }
    const alreadySolved = user.solvedProblems.includes(
      problem._id.toString()
    );

    if (alreadySolved) {
      return res.status(400).json({
        message: "Problem already solved",
      });
    }

    user.totalSolved += 1;
    user.score += problem.points;

    if (problem.difficulty === "Easy") {
      user.easySolved += 1;
    }

    if (problem.difficulty === "Medium") {
      user.mediumSolved += 1;
    }

    if (problem.difficulty === "Hard") {
      user.hardSolved += 1;
    }

    user.streak += 1;
    user.solvedProblems.push(problem._id.toString());

    await user.save();

    const io = req.app.get("io");

    io.emit("leaderboardUpdated");

    io.emit("newActivity", {
      user: user.name,
      problem: problem.title,
    });

    res.status(200).json({
      message: "Problem Solved",
      user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Something went wrong",
    });
  }
};

const deleteProblem = async (req, res) => {
  try {
    const problem = await Problem.findByIdAndDelete(req.params.id);
    
    if (!problem) {
      return res.status(404).json({ message: "Problem not found" });
    }
    
    res.status(200).json({ message: "Problem Deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports = {
  addProblem,
  getProblems,
  solveProblem,
  deleteProblem,
};