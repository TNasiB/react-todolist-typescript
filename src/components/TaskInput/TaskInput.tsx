import { FormEventHandler, useRef } from "react";
import "./TaskInput.scss";

interface TaskInput {
  placeholder?: string;
  children: JSX.Element;
  onInput: FormEventHandler<HTMLInputElement>;
  value: string;
}

function TaskInput(props: TaskInput) {
  const inputEl = useRef(null);

  return (
    <div>
      <label className="t-input__wrap">
        <span className="t-input__placeholder">{props.children}</span>
        <input
          onInput={props.onInput}
          ref={inputEl}
          value={props.value}
          placeholder={props.placeholder}
          className="t-input"
        />
      </label>
    </div>
  );
}

export default TaskInput;
