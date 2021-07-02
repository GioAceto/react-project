import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./components/landing"

function App() {
  return (
    <>
      <Router>
        <Landing />
        <Switch>
          <Route path="/" exact />
        </Switch>
      </Router>
    </>
  );
}

export default App;
