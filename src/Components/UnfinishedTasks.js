import data from "../data";
import TaskItems from "./TaskItems";
const UnfifnshedTasks = () => {
  const tasks = data.map((task) => <TaskItems task={task} key={task.id} />);
  return <div>{tasks}</div>;
};
export default UnfifnshedTasks;
