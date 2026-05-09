const express = require("express");
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
  adminMiddleware,
  addProblem
);

router.get("/", getProblems);

router.put("/solve/:id", solveProblem);

router.delete(
  "/:id",
  adminMiddleware,
  deleteProblem
);

module.exports = router;