import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Swal from 'sweetalert2';
import axios from "axios";

function Home() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post("/login", user)
      .then((response) => {
        window.location.href= "/home"
        localStorage.setItem("token", response.data.token);
      })
      .catch(() => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Wrong password or email!',
          footer: '<a href="/register"> Register</a>'
        })
      }
      );
  }

  return (
    <p>
      <h3 id="title"> LOG IN </h3>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <input
            autocomplete="off"
            id="email"
            type="text"
            required="required"
            name="email"
            value={user.email}
            placeholder="example@mail.com"
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            id="password"
            required="required"
            type="password"
            name="password"
            value={user.password}
            placeholder="Enter your Password..."
            onChange={handleChange}
          />
        </div>
        <br/>
        <div>
          <button className="btn" type="submit">
            Login
          </button>
        </div> 
        <br/>
        <div>
          <Link className="App-link" to="/register">
            Create Account
          </Link>
        </div>
      </form>
    </p>
  );
}

export default Home;
