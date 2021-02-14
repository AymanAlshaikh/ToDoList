import tasks from "../tasks";
import slugify from "slugify";

import {
  DELETE_TASK,
  ADD_TASK,
  UPDATE_TASK,
  FETCH_TASK,
} from "../store/actions";

const initialState = {
  tasks: tasks,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload.taskId),
      };

    case ADD_TASK:
      const { newtask } = action.payload;
      newtask.slug = slugify(newtask.name, { lower: true });
      newtask.id = state.tasks[state.tasks.length - 1].id + 1;
      return {
        ...state,
        tasks: [...state.tasks, newtask],
      };

    case UPDATE_TASK:
      const { updatedtask } = action.payload;
      updatedtask.slug = slugify(updatedtask.name, { lower: true });

      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === updatedtask.id ? updatedtask : task
        ),
      };

    case FETCH_TASK:
      return {
        ...state,
        tasks: action.payload.tasks,
      };

    default:
      return state;
  }
};

export default reducer;
