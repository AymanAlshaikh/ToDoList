import TaskItems from "./TaskItems";
import { useState, useEffect } from "react";
import { updateTask } from "../store/actions";
import { useDispatch, useSelector } from "react-redux";
import DeleteButton from "./buttons/DeleteButton";
import DoneButton from "./buttons/DoneButton";
import UpdateButton from "./buttons/UpdateButton";
import { UpdateButtonStyled } from "../styles";
import DateCountdown from "react-date-countdown-timer";
import Checkbox from "@material-ui/core/Checkbox";

const UnfinishedTasks = (props) => {
  // const calculateTimeLeft = () => {
  // const deadline= task.props.date;
  // let year = new Date().getFullYear();
  // const difference = +new Date(`${year}-10-1`) - +new Date();
  // let timeLeft = {};

  // if (difference > 0) {
  //   timeLeft = {
  //     days: Math.floor(difference / (1000 * 60 * 60 * 24)),
  //     hours: Math.floor((difference / (1000 * 60 * 60)) % 24),

  //   };
  // }

  //   return timeLeft;
  // };
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);
  const [priority, setPriority] = useState("low");
  // const handlePriority = () => {
  //   if (priority === "HIGH") {
  //     tasks.priority = "medium";
  //     setPriority(tasks.priority);

  //     console.log(tasks.priority);
  //   } else if (priority === "medium") setPriority("high");
  //   else setPriority("low");
  // };
  // console.log(priority);
  const handleChange = () => {
    tasks.props.status = true;
    dispatch(updateTask(tasks.props.status));
  };

  const handleSelect = (event) => {
    setPriority(event.target.value);
    tasks.priority = event.target.value;
    dispatch(updateTask(tasks.priority));
  };

  const unfinishedTasks = tasks
    .filter((task) => task.status === false)
    .map((task) => (
      <div>
        <div task={task} key={task.id}>
          <ul>
            <li>Name: {task.name}</li>
            <li>Deadline: {task.date}</li>
            {/* <li>Deadline: {("14 -02-2020", task.date)}</li> */}
            {/* <button on onClick={handlePriority}>
              Priority: {task.priority}
            </button> */}
            {/* <li>{Math.abs(task.date)}</li> */}
            <li>
              Priority:{" "}
              {/* <label>
                Priority:
                <select
                  onChange={handleSelect}
                  name="priority"
                  // onChange={handleChnage}
                >
                  <option name="low" value={task.priority}>
                    Low
                  </option>
                  <option name="medium" value={task.priority}>
                    Medium
                  </option>
                  <option name="high" value={task.priority}>
                    High
                  </option>
                </select>
              </label> */}
            </li>
            {/* <li>Priority: {task.priority}</li> */}
            <li>Status: {task.status ? "Done" : "Not Done"}</li>
          </ul>
        </div>
        <div>
          {/* <UnwatchedButton task={task}>Unwatched</UnwatchedButton> */}
          <DeleteButton taskId={task.id}>Delete</DeleteButton>
          {/* <Checkbox
            onChange={handleChange}
            inputProps={{ "aria-label": "primary checkbox" }}
          /> */}
          {/* <UpdateButton task={task}>Done</UpdateButton> */}
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
