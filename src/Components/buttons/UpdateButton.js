import { UpdateButtonStyled } from "../../styles";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateTask } from "../../store/actions";
import { useState } from "react";
const UpdateButton = ({ status }) => {
  const dispatch = useDispatch();
  const updateFunc = () => {
    status = true;
    dispatch(updateTask(status));
  };
  // status = true;
  // dispatch(updateTask(status));
  return (
    <div>
      {/* <UpdateButtonStyled
        onClick={() => {
          status = true;
          dispatch(updateTask(status));
        }}
      >
        Done
      </UpdateButtonStyled> */}
      <UpdateButtonStyled onClick={updateFunc}>Done</UpdateButtonStyled>
    </div>
  );
};

export default UpdateButton;
