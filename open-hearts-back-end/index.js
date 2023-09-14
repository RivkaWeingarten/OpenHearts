require("dotenv").config();
const express = require("express");
const app = express();
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use("/families", require("./controllers/families"));

app.get("/", (req, res) => {
  res.send("Open Hearts!");
});

app.get("*", (req, res) => {
  res.status(404).send("<h1>404 Page</h1>");
});

app.listen(process.env.PORT);
