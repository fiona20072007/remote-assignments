const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));

const mainRoutes = require("./routes");

app.use(mainRoutes);

app.listen(3000);
