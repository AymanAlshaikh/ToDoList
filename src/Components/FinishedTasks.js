import tasks from "../tasks";
import TaskItems from "./TaskItems";
import { useState } from "react";
import { useSelector } from "react-redux";
import AddButton from "./buttons/AddButton";
import DeleteButton from "./buttons/DeleteButton";
import UpdateButton from "./buttons/UpdateButton";
// import UnwatchedButton from "./buttons/UnwatchedButton";

const FinishedTasks = () => {
  const tasks = useSelector((state) => state.tasks);
  const finishedTasks = tasks
    .filter((task) => task.status === true)
    .map((task) => (
      <div>
        <div task={task} key={task.id}>
          <p>{task.name}</p>
        </div>
        <div>
          {/* <UnwatchedButton task={task}>Unwatched</UnwatchedButton> */}
          <DeleteButton taskId={task.id}>Delete</DeleteButton>
          <UpdateButton task={task}>Undone</UpdateButton>
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
