import Home from "./views/Home";
import { Route } from "react-router-dom";
import Add from "./views/Add";
import Profile from "./views/Profile";
import Register from "./views/Register";
import './App.css';


function App() {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/:id" exact component={Profile} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/add/:id" exact component={Add} />
      <hr />
      <footer id="footer" className="container text-muted">
        Full stack Challenge
      </footer>
    </div>
  );
}

export default App;
