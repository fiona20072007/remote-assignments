const express = require("express");
// require the express module
const bodyParser = require("body-parser");
// middleware for post req.body
const cookieParser = require("cookie-parser");

const app = express();
// create Express application

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/static", express.static("public"));
//route the static server to static

app.set("view engine", "pug");
//set the view engine to the parameter pug

const mainRoutes = require("./routes");
const cardRoutes = require("./routes/cards");

app.use(mainRoutes);
app.use("/cards", cardRoutes);

// app.use((req, res, next) => {
//   console.log("hello");
//   const err = new Error("err");
//   //This is JavaScript's native error constructor.
//   //We're creating a custom error object and storing it in ERR.
//   err.status = 500;
//   next(err);
// });

app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.locals.error = err;
  res.status(err.status);
  res.render("error");
});

app.listen(3000, () => {
  console.log("The application is running on localhost:3000");
});
// setup the development server, port number 3000
