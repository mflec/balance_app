import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Swal from 'sweetalert2';
import axios from "axios";
import { useHistory } from "react-router";

function Home() {
  const history = useHistory()
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
    axios.post("/login", user)
      .then(response => {
        history.push("/" + response.data.user)
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
      <h3> LOG IN </h3>
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
            name="password"
            value={user.password}
            placeholder="Enter your Password..."
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit">
            Login
          </button>
        </div>
        <div>
          <Link to="/register">
            Create Account
          </Link>
        </div>
      </form>
    </p>
  );
}

export default Home;
