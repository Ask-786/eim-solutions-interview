const mongoose = require("mongoose");
const { Schema } = mongoose;

const studentSchema = new Schema(
  {
    name: { type: String, required: true },
    mark: { type: Number, required: true },
  },
  { timestamps: true }
);

const Student = mongoose.model("Student", studentSchema);
module.exports = { Student };
