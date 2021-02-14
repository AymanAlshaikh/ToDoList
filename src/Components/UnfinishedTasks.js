import tasks from "../tasks";
import TaskItems from "./TaskItems";
import { useState } from "react";
import { updateTask } from "../store/actions";
import { useDispatch, useSelector } from "react-redux";
import DeleteButton from "./buttons/DeleteButton";
import UpdateButton from "./buttons/UpdateButton";
// import UnwatchedButton from "./buttons/UnwatchedButton";

const UnfinishedTasks = () => {
  const date2 = "2020-03-31";
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);
  const [priority, setPriority] = useState("low");
  const handlePriority = () => {
    if (priority === "HIGH") {
      tasks.priority = "medium";
      setPriority(tasks.priority);

      console.log(tasks.priority);
    } else if (priority === "medium") setPriority("high");
    else setPriority("low");
  };
  console.log(priority);
  const unfinishedTasks = tasks
    .filter((task) => task.status === false)
    .map((task) => (
      <div>
        <div task={task} key={task.id}>
          <ul>
            <li>Name: {task.name}</li>
            <li>Deadline: {("14 -02-2020", task.date)}</li>
            <button on onClick={handlePriority}>
              Priority: {task.priority}
            </button>
            <li>{Math.abs(task.date)}</li>

            <li>Status: {task.status ? "done" : "not done"}</li>
          </ul>
        </div>
        <div>
          {/* <UnwatchedButton task={task}>Unwatched</UnwatchedButton> */}
          <DeleteButton taskId={task.id}>Delete</DeleteButton>
          {/* <UpdateButton task={task}>done</UpdateButton> */}
          <button
            type="button"
            onClick={() => {
              console.log(task.status);
              task.status = true;
              console.log(task.status);
              dispatch(updateTask(task.status));
            }}
          >
            DONE
          </button>
        </div>
      </div>
    ));

  // const getDifferenceInDays({task.date}, date2)=> {
  //   const diffInMs = Math.abs(date2 - date1);
  //   return diffInMs / (1000 * 60 * 60 * 24);
  // }
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
