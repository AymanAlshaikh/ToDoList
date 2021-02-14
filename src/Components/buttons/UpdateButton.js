import { UpdateButtonStyled } from "../../styles";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateTask } from "../../store/actions";
import { useState } from "react";
const UpdateButton = (props) => {
  const dispatch = useDispatch();

  return (
    <UpdateButtonStyled
      onClick={() => {
        props.task.status = true;
        dispatch(updateTask(props.task.status));
      }}
    >
      done
    </UpdateButtonStyled>
  );
};

export default UpdateButton;
