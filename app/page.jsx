import styles from "./page.module.css";
import Todo from "../components/Todo";
import AddTaskButton from "../components/AddTaskButton";

async function getData() {
  const response = await fetch("http://localhost:3000/api/tasks");
  return response.json();
}

export default async function Home() {
  const data = await getData();
  return (
    <main>
      <input type="text" />
      <AddTaskButton />
      {data.map((task) => {
        return <Todo key={task._id} task={task} />;
      })}
    </main>
  );
}
