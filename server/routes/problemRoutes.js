const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require(
  "../middleware/adminMiddleware"
);

const {
  addProblem,
  getProblems,
  solveProblem,
  deleteProblem,
} = require("../controllers/problemController");

const router = express.Router();

router.post(
  "/",
  authMiddleware,
  adminMiddleware,
  addProblem
);

router.get("/", getProblems);

router.put(
  "/solve/:id",
  authMiddleware,
  solveProblem
);

router.delete(
  "/:id",
  authMiddleware,
  adminMiddleware,
  deleteProblem
);

module.exports = router;