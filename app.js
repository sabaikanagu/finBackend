const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");
const authJwt = require("./helpers/jwt");
const errorhandler = require("./helpers/error-handler");
require("dotenv/config");

const api = process.env.API_URL;
const productRouter = require("./routers/product");
const categoryRouter = require("./routers/category");
const userRouter = require("./routers/user");
const orderRouter = require("./routers/order");

//middleware
app.use(cors());
app.options("*", cors());
app.use(express.json());
app.use(morgan("tiny"));
app.use(authJwt());
app.use(errorhandler);

app.use(`${api}/product`, productRouter);
app.use(`${api}/category`, categoryRouter);
app.use(`${api}/user`, userRouter);
app.use(`${api}/order`, orderRouter);

mongoose
  .connect(process.env.connectionString)
  .then(() => {
    console.log("success");
  })
  .catch((e) => {
    console.log(e);
  });

app.listen("3000", () => {
  console.log("server is running started");
});
