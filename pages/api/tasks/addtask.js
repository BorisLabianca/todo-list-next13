import connectDB from "../../../middlewares/connectDB";
import Task from "../../../models/Task";

const handler = async (req, res) => {
  if (req.method === "POST") {
    try {
      if (req.body.name && req.body.isDone) {
        const { name, isDone } = req.body;
        const newTask = new Task({
          name: name,
          isDone: isDone,
        });

        await newTask.save();

        res.status(200).json({ message: "Task added.", task: newTask });
      } else {
        res.status(401).json({ message: "Missing parameters." });
      }
    } catch (error) {
      res.status(400).json(error);
    }
  } else {
    res.status(404).json("This route doesn't exist.");
  }
};

export default connectDB(handler);
