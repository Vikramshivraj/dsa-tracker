const User = require("../models/User");

const getLeaderboard = async (req, res) => {

  try {

    const users = await User.find()
      .select("-password")
      .sort({ score: -1 });

    const rankedUsers = users.map((user, index) => ({
      rank: index + 1,
      ...user._doc,
    }));

    res.status(200).json(rankedUsers);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

module.exports = {
  getLeaderboard,
};