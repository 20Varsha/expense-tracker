require('dotenv').config();
const app = require('./app');
const mongoose = require("mongoose")
// const seed_user = require('./src/seed/user')

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true })

mongoose.connection.on("error", err => {
  console.log("err", err)
})

mongoose.connection.once("connected", () => {
  // seed_user();
  console.log("mongoose is connected")
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server is listening to PORT ${PORT}`)
})

const exitHandler = () => {
  console.log("error");
};

const unexpectedErrorHandler = (error) => {
  console.log(error);
  exitHandler();
};

process.on('uncaughtException', unexpectedErrorHandler);
process.on('unhandledRejection', unexpectedErrorHandler);

process.on('SIGTERM', () => {
  console.log('SIGTERM received');
});

