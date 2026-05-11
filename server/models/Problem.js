const mongoose = require("mongoose");

const problemSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    difficulty: {
      type: String,
      enum: ["Easy", "Medium", "Hard"],
      required: true,
    },
        description: {
      type: String,
    },

    leetcodeLink: {
      type: String,
    },

    youtubeLink: {
      type: String,
    },

    tags: {
      type: [String],
      default: [],
    },

    points: {
      type: Number,
      required: true,
    },
  },

  { timestamps: true }
);

module.exports = mongoose.model(
  "Problem",
  problemSchema
);