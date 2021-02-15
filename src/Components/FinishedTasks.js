import tasks from "../tasks";
import TaskItems from "./TaskItems";
import { useState } from "react";
import { updateTask } from "../store/actions";
import AddButton from "./buttons/AddButton";
import DeleteButton from "./buttons/DeleteButton";
import UpdateButton from "./buttons/UpdateButton";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import UnwatchedButton from "./buttons/UnwatchedButton";

const FinishedTasks = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);
  const finishedTasks = tasks
    .filter((task) => task.status)
    .map((task) => (
      <div>
        <div task={task} key={task.id}>
          <ul>
            <li>Name: {task.name}</li>
            <li>Deadline: {task.date}</li>
            <li>Priority: {task.priority}</li>

            <li>Status: {task.status ? "done" : "not done"}</li>
          </ul>
        </div>
        <div>
          {/* <UnwatchedButton task={task}>Unwatched</UnwatchedButton> */}
          <DeleteButton taskId={task.id}>Delete</DeleteButton>
          {/* <UpdateButton task={task}>Undone</UpdateButton> */}
          {/* <Link to={`/tasks/${task.name}/edit`}> */}
          <button
            type="button"
            onClick={() => {
              console.log(task.status);
              task.status = false;
              console.log(task.status);
              dispatch(updateTask(task.status));
            }}
          >
            DONE
          </button>
          {/* </Link> */}
        </div>
      </div>
    ));
  return (
    <div>
      <h2>{`Finshed Tasks -- ${finishedTasks.length}`} </h2>
      {/* <SearchBar setQuery={setQuery}></SearchBar> */}
      {finishedTasks}
    </div>
  );
};

// {
//   const tasks = useSelector((state) => state.tasks);

//   const tasks = data.map((task) => <TaskItems task={task} key={task.id} />);
//   return <div>{tasks}</div>;
// };
export default FinishedTasks;
