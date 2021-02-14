import { UpdateButtonStyled } from "../../styles";
import { Link } from "react-router-dom";

const UpdateButton = ({ taskSlug }) => {
  return (
    <div>
      <Link to={`/products/${taskSlug}/edit`}>
        <UpdateButtonStyled>Edit</UpdateButtonStyled>
      </Link>
    </div>
  );
};

export default UpdateButton;
