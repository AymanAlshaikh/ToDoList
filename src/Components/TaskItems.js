const TaskItems = (props) => {
  return (
    <div>
      <ul>
        <li>{props.task.name}</li>
        <li>{props.task.description}</li>
        <li>{props.task.status ? "done" : "not done"}</li>
        <li>{props.task.date}</li>
        <li>{props.task.priority}</li>
      </ul>
    </div>
  );
};
export default TaskItems;
