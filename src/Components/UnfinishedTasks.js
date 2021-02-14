import tasks from "../tasks";
import TaskItems from "./TaskItems";
import { useState } from "react";
import { useSelector } from "react-redux";
import DeleteButton from "./buttons/DeleteButton";

// import UnwatchedButton from "./buttons/UnwatchedButton";

const UnfinishedTasks = () => {
  const tasks = useSelector((state) => state.tasks);
  const unfinishedTasks = tasks
    .filter((task) => task.status === false)
    .map((task) => (
      <div>
        <div task={task} key={task.id}>
          <p>{task.name}</p>
        </div>
        <div>
          {/* <UnwatchedButton task={task}>Unwatched</UnwatchedButton> */}
          <DeleteButton taskId={task.id}>Delete</DeleteButton>
        </div>
      </div>
    ));
  return (
    <div>
      <h2>{`Unfinshed Tasks -- ${unfinishedTasks.length}`} </h2>
      {/* <SearchBar setQuery={setQuery}></SearchBar> */}
      {unfinishedTasks}
    </div>
  );
};

// {
//   const tasks = useSelector((state) => state.tasks);

//   const tasks = data.map((task) => <TaskItems task={task} key={task.id} />);
//   return <div>{tasks}</div>;
// };
export default UnfinishedTasks;
