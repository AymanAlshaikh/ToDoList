import UnfinishedTasks from "./Components/UnfinishedTasks";
import { Router, Switch } from "react-router";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UnfinishedTasks />
      </header>
    </div>
  );
}

export default App;
