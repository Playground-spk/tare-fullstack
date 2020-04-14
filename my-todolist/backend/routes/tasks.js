const express = require("express");
const app = express();
const router = express.Router();
const _ = require("lodash");

const taskList = [];

//create

router.post("/", (req, res) => {
  let task = req.body.task;

  let newTask = {
    id: Number(_.uniqueId()),
    isCompleted: false,
    task,
  };

  taskList.push(newTask);
  res.status(201).send(newTask);
});

//read

router.get("/", (req, res) => {
  res.status(200).send(taskList);
});

//update

router.put("/:id", (req, res) => {
  let targetId = Number(req.params.id);
  let targetIndex = taskList.findIndex((task) => task.id === targetId);
  let updatedTask = req.body.task;
  const updatedIsCompleted = Boolean(Number(req.body.isCompleted));

  taskList[targetIndex] = {
    id: targetId,
    isCompleted: updatedIsCompleted,
    task: updatedTask ? updatedTask : taskList[targetIndex].task,
  };

  res.status(204).send();
});

//delete

router.delete("/:id", (req, res) => {
  const targetId = Number(req.params.id);
  const targetIndex = taskList.findIndex((task) => task.id === targetId);
  taskList.splice(targetIndex, 1);
  res.status(204).send();
});

module.exports = router;
