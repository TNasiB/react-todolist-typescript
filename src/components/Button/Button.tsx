import { MouseEventHandler } from "react";
import "./Button.scss";

interface Button {
  children: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

function Button(props: Button) {
  return <button onClick={props.onClick}>{props.children}</button>;
}

export default Button;
