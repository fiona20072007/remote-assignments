const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static("public"));

app.set("view engine", "pug");

const mainRoutes = require("./routes");
const nameRoutes = require("./routes/myName");

app.use(mainRoutes);
app.use("/myName", nameRoutes);

app.listen(3000);
