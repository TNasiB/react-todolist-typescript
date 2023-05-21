import TaskForm from "./components/TaskForm/TaskForm";
import { useEffect, useState } from "react";
import TaskList from "./components/TaskList/TaskList";
import { Task } from "./components/TaskListItem/TaskListItem";

function App() {
  const [tasks, setTasks] = useState<Task[]>(getTasks());

  function getTasks(): Task[] {
    const storedTasks = localStorage.getItem("tasks") ?? "[]";
    const parsedTasks: Task[] = JSON.parse(storedTasks);
    return parsedTasks;
  }

  const setTasksLs = (tasksList: Task[]) => {
    const parsedTasks = JSON.stringify(tasksList);
    localStorage.setItem("tasks", parsedTasks);
  };

  useEffect(() => {
    setTasksLs(tasks);
  }, [tasks]);

  const completedTasks = tasks.filter((task) => task.checked);
  const uncompletedTasks = tasks.filter((task) => !task.checked);

  return (
    <div className="todo-list">
      <TaskForm setTasks={setTasks} />
      <div className="todo-list__lists-wrap">
        <TaskList tasks={uncompletedTasks} setTasks={setTasks} title="Todo" />
        <TaskList tasks={completedTasks} setTasks={setTasks} title="Completed" />
      </div>
    </div>
  );
}

export default App;
