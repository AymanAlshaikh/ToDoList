import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import DeleteButton from "./buttons/DeleteButton";
import UpdateButton from "./buttons/UpdateButton";
import { updateTask } from "../store/actions";
const TaskItems = (props) => {
  const task = props.task;
  const dispatch = useDispatch();
  return (
    <div>
      <ul>
        <li>{props.task.name}</li>
        <li>{props.task.date}</li>
        <li>{props.task.priority}</li>

        <li>{props.task.status ? "done" : "not done"}</li>
      </ul>
      <DeleteButton taskId={task.id} deleteTask={props.deleteTask} />
      {/* <UpdateButton task={props.task}>done</UpdateButton> */}
      <button
        type="button"
        onClick={() => {
          task.status = true;
          dispatch(updateTask(task.status));
        }}
      >
        DONE
      </button>
    </div>
  );
};
export default TaskItems;
