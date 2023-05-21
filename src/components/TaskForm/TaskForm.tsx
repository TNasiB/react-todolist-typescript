import { FormEvent, useState } from "react";
import Button from "../Button/Button";
import TaskInput from "../TaskInput/TaskInput";
import { Task } from "../TaskListItem/TaskListItem";
import { v4 } from "uuid";
import "./TaskForm.scss";

interface TaskForm {
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

function TaskForm(props: TaskForm) {
  const [taskTitle, setTaskTitle] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    createTask();
  }

  function createTask() {
    props.setTasks((tasks) => [...tasks, { title: taskTitle, id: v4() }] as Task[]);
    setTaskTitle("");
  }

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <TaskInput
        value={taskTitle}
        onInput={(e: FormEvent<HTMLInputElement>) =>
          setTaskTitle((e.target as HTMLInputElement).value)
        }
      >
        <span>Title</span>
      </TaskInput>
      <Button onClick={handleSubmit}>Create task</Button>
    </form>
  );
}

export default TaskForm;
