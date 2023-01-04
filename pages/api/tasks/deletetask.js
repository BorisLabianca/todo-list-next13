import connectDB from "../../../middlewares/connectDB";
import Task from "../../../models/Task";

const handler = async (req, res) => {
  if (req.method === "DELETE") {
    if (req.body.id) {
      const taskToDelete = await Task.findByIdAndDelete(req.body.id);
      res.status(200).json({ message: "Task deleted." });
    } else {
      res.status(401).json({ message: "Missing parameters." });
    }
  } else {
    res.status(404).json("This route doesn't exist.");
  }
};

export default connectDB(handler);
