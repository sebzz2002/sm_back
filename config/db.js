const mongoose = require("mongoose");

const db = async () => {
  await mongoose
    .connect(
      "mongodb+srv://AUGU:aug@cluster01.lnog86w.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => console.log("Connected to db"))
    .catch((err) => console.log("Connection to db failed", err));
};

module.exports = db;
