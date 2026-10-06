const { default: mongoose } = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://raushankumar9rs_db_user:blaezi@cluster0.c5crmhf.mongodb.net/",
    );
    console.log("mongodb connected");
  } catch (error) {
    console.log("error while connecting db", error);
  }
};

module.exports = connectDb;
