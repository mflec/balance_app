import React from "react";
import { Link } from "react-router-dom";
import Logout from "../utils/logout";

function Nav() {
  
  return (
    <div className="navbar navbar-fixed-top navbar-inverse" role="navigation">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle"
            data-toggle="collapse"
            data-target="#nav-items"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        </div>
        <div id="nav-items" className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
          <li>
          </li>
            <li>
              <Link to={"/add/"}>ADD TRANSACTION</Link>
            </li>
              <li>
                <Link to={"/home"}>ALL TRANSACTIONS </Link> 
              </li>
          </ul>
            <button onClick={Logout} id="logout"> LOGOUT </button>
        </div>
      </div>
    </div>
  );
}

export default Nav;
