import Home from "./views/Home";
import { Route } from "react-router-dom";
import Add from "./views/Add";
import Profile from "./views/Profile";
import Register from "./views/Register";

function App() {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/:id" exact component={Profile} />
      <Route exact path="/:id/add" exact component={Add} />
      <hr />
      <footer id="footer" className="container text-muted">
        Full stack Challenge
      </footer>
    </div>
  );
}

export default App;
