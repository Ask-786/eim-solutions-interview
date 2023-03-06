const express = require("express");
const router = express();
const {
  postAddStudent,
  secondHighest,
  getStudentsMark,
} = require("../controllers/controller");

router.route("").get((req, res) => {
  res.json({ status: true });
});

router.route("/add-student").post(postAddStudent);
router.route("/get-mark").get(getStudentsMark);
router.route("/get-second-highest").get(secondHighest);
router.route("/get-all-students").get(secondHighest);

module.exports = router;
