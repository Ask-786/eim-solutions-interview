const { Student } = require("../model/Student");

const postAddStudent = async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.json({ status: true, student });
  } catch (err) {
    res.json({ status: false, error: err.message });
  }
};

const getStudentsMark = async (req, res) => {
  try {
    const mark = await Student.aggregate([
      {
        $group: { _id: "", totalMark: { $sum: "$mark" } },
      },
      {
        $project: { _id: 0 },
      },
    ]);
    res.json({ status: true, mark });
  } catch (err) {
    res.json({ status: false, error: err.message });
  }
};

const secondHighest = async (req, res, next) => {
  try {
    const seconHighest = await Student.find()
      .sort({ mark: -1 })
      .skip(1)
      .limit(1);
    res.json({ status: true, secondHighestStudent: seconHighest });
  } catch (err) {
    res.json({ status: false, error: err.message });
  }
};

module.exports = {
  postAddStudent,
  getStudentsMark,
  secondHighest,
};
