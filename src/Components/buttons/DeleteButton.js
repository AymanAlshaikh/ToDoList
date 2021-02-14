import { deleteTask } from "../../store/actions";
import { useDispatch } from "react-redux";
// Styling
import { DeleteButtonStyled } from "../../styles";

const DeleteButton = (props) => {
  const dispatch = useDispatch();
  return (
    <DeleteButtonStyled
      onClick={() => dispatch(deleteTask(props.taskId))}
    >
      Delete
    </DeleteButtonStyled>
  );
};

export default DeleteButton;
