import { Link } from "react-router-dom";

import DeleteButton from "./buttons/DeleteButton";
import UpdateButton from "./buttons/UpdateButton";

const TaskItems = (props) => {
  const task = props.task;

  return (
    <div>
      <ul>
        <li>{props.task.name}</li>
        <li>{props.task.description}</li>
        <li>{props.task.status ? "done" : "not done"}</li>
        <li>{props.task.date}</li>
        <li>{props.task.priority}</li>
      </ul>
      <DeleteButton taskId={task.id} deleteTask={props.deleteTask} />
    </div>
  );
};
export default TaskItems;
