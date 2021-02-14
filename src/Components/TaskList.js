import data from "../tasks"
import { Route, Switch } from "react-router";
import TaskForm from "./TaskForm";
import UnfinishedTasks from "./UnfinishedTasks"
import FinishedTasks from "./FinishedTasks"
import { UnfinishedWrapper, FinishedTasksWrapper } from "../styles";
const TaskList = () => {
  return (
    <div>
      <Switch>
        <Route path={["/tasks/create", "/tasks/:taskSlug/edit"]}>
          <TaskForm />
        </Route>
        <UnfinishedWrapper>
          {data.length > 0 ? <UnfinishedTasks /> : "No Tasks To Show"}
        </UnfinishedWrapper>
        <FinishedTasksWrapper>
          <FinishedTasks />
        </FinishedTasksWrapper>
      </Switch>
    </div>
  );
};

export default TaskList;
