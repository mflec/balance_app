import Home from "./views/Login";
import { Route } from "react-router-dom";
import Add from "./views/Add";
import Profile from "./views/Profile";
import Register from "./views/Register";
import PrivateRoute from "./components/PrivateRoutes";
import './App.css';


function App() {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <PrivateRoute exact path="/home" exact component={Profile} />
      <PrivateRoute exact path="/add" exact component={Add} />
      <Route exact path="/register" component={Register} />
      <footer id="footer" >
        <p>By Lechares Milagros</p>
      </footer>
    </div>
  );
}

export default App;
