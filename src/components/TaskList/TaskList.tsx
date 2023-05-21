import TaskListItem, { Task } from "../TaskListItem/TaskListItem";
import "./TaskList.scss";

interface TaskList {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  title?: string;
}

function TaskList(props: TaskList) {
  return (
    <div className="task-list__wrap">
      <span>{props.title}</span>
      <ul className="task-list">
        {props.tasks.map((task) => (
          <TaskListItem
            title={task.title}
            checked={task.checked}
            key={task.id}
            id={task.id}
            setTasks={props.setTasks}
          />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
