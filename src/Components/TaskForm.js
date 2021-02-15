// import {
//   SubmitButtonStyled,
//   UpdateButtonStyled,
//   AddButtonStyled,
// } from "../styles";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, updateTask } from "../store/actions";
import { useHistory, useParams } from "react-router-dom";
import AddButton from "./buttons/AddButton";
import SubmitButton from "./buttons/SubmitButton"

const TaskForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [task, setTask] = useState({
    name: "",
    status: false,
    date: "",
    priority: "",
  });

  const handleChnage = (event) => {
    setTask({ ...task, [event.target.name]: event.target.value });
  };

  const restForm = () => {
    setTask({
      name: "",
      status: false,
      date: "",
      priority: "",
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addTask(task));
    restForm();
    history.push("/");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Add Task</h1>
        {/* <h1>{foundTask ? "Create" : "Update"} Task</h1> */}
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={task.name}
            onChange={handleChnage}
          />
        </label>
        <label>
          Priority:
          <select
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
        </label>

        <label>
          Status:
          <input
            type="string"
            name="status"
            value={task.status}
            onChange={handleChnage}
          />
        </label>

        <label>
          Date:
          <input
            type="date"
            name="date"
            value={task.date}
            // min="2021-02-14 "
            onChange={handleChnage}
          />
        </label>

        <SubmitButton type="submit" value="Submit">
          Submit
        </SubmitButton>
        {/* <AddButton type="submit"></AddButton> */}
        {/* <UpdateButtonStyled type="submit">
          {foundTask ? "Create" : "Update"} Task
        </UpdateButtonStyled> */}
      </form>
    </div>
  );
};

export default TaskForm;
