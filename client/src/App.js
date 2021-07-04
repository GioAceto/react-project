import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavHead from "./components/header"
import Home from "./components/pages/about"
import Gallery from "./components/pages/gallery"
import Contact from "./components/pages/contact"

function App() {
  return (
    <>
      <Router>
        <NavHead />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
