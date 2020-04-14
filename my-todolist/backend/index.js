const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const tasksRoutes = require("./routes/tasks");
const cors = require("cors");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use("/tasks", tasksRoutes);

app.listen(8000, () => {
  console.log("server is running on port 8000");
});
