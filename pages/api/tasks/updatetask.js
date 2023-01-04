import connectDB from "../../../middlewares/connectDB";
import Task from "../../../models/Task";

const handler = async (req, res) => {
  if (req.method === "PUT") {
    if (req.body.id && req.body.name) {
      try {
        const taskToUpdate = await Task.findById(req.body.id);
        if (taskToUpdate) {
          taskToUpdate.name = req.body.name;
          await taskToUpdate.save();

          res
            .status(200)
            .json({ message: "Task updated.", task: taskToUpdate });
        } else {
          res.status(401).json({ message: "No task corresponds to this id." });
        }
      } catch (error) {
        res.status(400).json(error);
      }
    } else {
      res.status(401).json({ message: "Missing parameter." });
    }
  } else {
    res.status(404).json("This route doesn't exist.");
  }
};

export default connectDB(handler);
