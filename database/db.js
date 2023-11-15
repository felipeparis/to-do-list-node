const mongoose = require("mongoose");

const connectToDb = () => {
  mongoose
    .connect(
      "mongodb+srv://root:admin@to-do-list-node.bprycwa.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => {
      console.log("MongoDB Atlas Connected");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectToDb;
