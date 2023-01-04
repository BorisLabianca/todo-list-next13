import connectDB from "../../../middlewares/connectDB";
import Task from "../../../models/Task";

const handler = async (req, res) => {
  if (req.method === "GET") {
    try {
      const allTasks = await Task.find();
      res.status(200).json(allTasks);
    } catch (error) {
      res.status(400).json(error);
    }
  } else {
    res.status(404).json("This route doesn't exist.");
  }
};

export default connectDB(handler);
