import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";

function Nav() {
  const { id } = useParams();
  
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
          <Link className="navbar-brand" to="/">
            Full Stack Challenge
          </Link>
        </div>
        <div id="nav-items" className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <li>
              <Link to={"/"+ id +"/add"}>ADD TRANSACTION</Link>
              <Link to={"/"+ id }>ALL TRANSACTIONS </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Nav;
