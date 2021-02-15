import tasks from "../tasks";
import {
  DELETE_TASK,
  ADD_TASK,
  UPDATE_TASK,
  FETCH_TASK,
} from "../store/actions";

const initialState = {
  tasks: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TASK:
      return {
        ...state,
        tasks: action.payload,
      };

    case ADD_TASK:
      const { newTask } = action.payload;

      return {
        ...state,
        tasks: [...state.tasks, newTask],
      };

    case UPDATE_TASK:
      const { updatedTask } = action.payload;
      // updatedTask.status = !updatedTask.status;

      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === updatedTask.id ? updatedTask : task
        ),
      };
    //   ...state,
    //   tasks: [...state.tasks],
    // };

    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload.taskId),
      };
    default:
      return state;
  }
};

export default reducer;
