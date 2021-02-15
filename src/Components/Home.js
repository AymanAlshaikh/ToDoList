import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to="/tasks">
        <button>Go to Tasks</button>
      </Link>
    </div>
  );
};

export default Home;
