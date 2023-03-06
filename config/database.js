const mongoose = require("mongoose");

const connectDb = () => {
  mongoose
    .connect(process.env.DB_CONNECTION_STRING)
    .then(() => {
      console.log("Database connected");
    })
    .catch((err) => {
      console.log(`Error ${err.message}`);
    });
};

module.exports = connectDb;
