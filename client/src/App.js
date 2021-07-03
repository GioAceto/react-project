import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavHead from "./components/header"
import Home from "./components/pages/about"

function App() {
  return (
    <>
      <Router>
        <NavHead />
        <Switch>
          <Route path="/" exact component=
            {Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
