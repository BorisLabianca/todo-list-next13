import { Schema, models, model } from "mongoose";

const task = new Schema({
  name: String,
  isDone: Boolean,
});

const Task = models.Task || model("Task", task);

export default Task;
