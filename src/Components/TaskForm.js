import { useState } from "react";
import { SubmitButtonStyled, UpdateButtonStyled } from "../styles";
import { useDispatch, useSelector } from "react-redux";
import { addTask, updateTask } from "../store/actions";
import { useHistory, useParams } from "react-router-dom";

const TaskForm = () => {
  const history = useHistory();

  const dispatch = useDispatch();

  const { taskSlug } = useParams();

  const foundTask = useSelector((state) =>
    state.tasks.find((task) => task.slug === taskSlug)
  );

  const [task, setTask] = useState(
    foundTask
      ? foundTask
      : {
          name: "",
          description: "",
          status: "",
          date: "",
          priority: "",
        }
  );

  const handleChnage = (event) => {
    setTask({ ...task, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (foundTask) dispatch(updateTask(task));
    else dispatch(addTask(task));
    restForm();
    history.push("/tasks");
  };

  const restForm = () => {
    setTask({
      name: "",
      description: "",
      status: "",
      date: "",
      priority: "",
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>{foundTask ? "Update" : "Create"} Task</h1>
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
          Description:
          <input
            type="text"
            name="description"
            value={task.description}
            onChange={handleChnage}
          />
        </label>
        <label>
          status:
          <input
            type="text"
            name="status"
            value={task.status}
            onChange={handleChnage}
          />
        </label>
        <label>
          date:
          <input
            type="text"
            name="date"
            alt=""
            value={task.date}
            onChange={handleChnage}
          />
        </label>
        <label>
          priority:
          <input
            type="text"
            name="priority"
            alt=""
            value={task.priority}
            onChange={handleChnage}
          />
        </label>
        {/* <SubmitButtonStyled type="submit" value="Submit">
          Submit
        </SubmitButtonStyled> */}

        <UpdateButtonStyled type="submit">
          {foundTask ? "Update" : "Create"} Task
        </UpdateButtonStyled>
      </form>
    </div>
  );
};

export default TaskForm;
