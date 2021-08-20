const mongoose = require("mongoose");

const DB = process.env.DATABASE

// connenction to mongoDb database....
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log(`connection successful`);
  })
  .catch((err) => {
    console.log(err);
  });
