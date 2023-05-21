import { FormEvent } from "react";
import "./TaskListItem.scss";

export interface Task {
  title: string;
  checked: boolean;
  id: string;
}

export type TaskListItemProps = Task & {
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};

function TaskListItem(props: TaskListItemProps) {
  const handleCheck = (e: FormEvent) =>
    props.setTasks((tasks) =>
      tasks.map((task) => {
        if (task.id === props.id) {
          const checked = (e.target as HTMLInputElement).checked;
          return { ...task, checked };
        }
        return task;
      })
    );

  return (
    <li className="task-item">
      <label className="task-item__inn">
        <input type="checkbox" onChange={handleCheck} checked={props.checked} />
        <span>{props.title}</span>
      </label>
    </li>
  );
}

export default TaskListItem;
