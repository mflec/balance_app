import React from "react";
import Logout from "../utils/logout";

function Nav() {

  return (
    <nav className="nav">
      <ul className="nav-list">
        <a href={"/add/"}>ADD TRANSACTION</a>
        <a href={"/home"}>ALL TRANSACTIONS </a>
      </ul>
      <button onClick={Logout} id="logout"> LOGOUT </button>
    </nav>
  );
}

export default Nav;
