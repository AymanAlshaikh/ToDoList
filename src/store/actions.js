import axios from "axios";

export const ADD_TASK = "ADD_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const UPDATE_TASK = "UPDATE_TASK";
export const FETCH_TASK = "FETCH_TASK";

export const fetchTask = () => {
  return async (dispatch) => {
    try {
      const respone = await axios.get("http://localhost:8000/tasks");
      dispatch({
        type: FETCH_TASK,
        payload: { tasks: respone.data },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteTask = (taskId) => {
  return async (dispatch) => {
    try {
      await axios.delete(`http://localhost:8000/tasks/${taskId}`);
      dispatch({
        type: DELETE_TASK,
        payload: { taskId: taskId },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const addTask = (newTask) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`http://localhost:8000/tasks`, newTask);
      dispatch({
        type: ADD_TASK,
        payload: { newTask: response.data },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateTask = (updatedTask) => {
  return async (dispatch) => {
    try {
      await axios.put(
        `http://localhost:8000/tasks/${updatedTask.id}`,
        updatedTask
      );
      dispatch({
        type: UPDATE_TASK,
        payload: { updatedTask: updatedTask },
      });
    } catch (error) {
      console.log(error);
    }
  };
};
