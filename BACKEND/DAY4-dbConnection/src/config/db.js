const { default: mongoose } = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect(
      "connection string",
    );
    console.log("mongodb connected");
  } catch (error) {
    console.log("error while connecting db", error);
  }
};

module.exports = connectDb;
