import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavHead from "./components/header"

function App() {
  return (
    <>
      <Router>
        <NavHead />
        <Switch>
          <Route path="/" exact />
        </Switch>
      </Router>
    </>
  );
}

export default App;
