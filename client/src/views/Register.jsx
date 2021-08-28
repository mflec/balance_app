import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import axios from "axios";
import Swal from 'sweetalert2';


function Register() {
    const history = useHistory()
    const [dontMatch, setDontMatch]= useState(false)
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    function handleChange(e) {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    }


    function handleSubmit(e) {
        e.preventDefault();
        if(user.password!==user.confirmPassword) setDontMatch(true)
        if(user.password==user.confirmPassword) {
        axios.post("/register", user)
        .then(()=>{
                history.push("/")
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Your user has been saved',
                    showConfirmButton: false,
                    timer: 1500
                  })
                }) 
            .catch(()=>{
                Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Something went wrong!',
              footer: '<a href="/login"> Login </a>'
            })}
            )}
        }
      

    return (
        <p>
            <h3> REGISTER </h3>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <input
                        autocomplete="off"
                        id="name"
                        type="text"
                        required="required"
                        name="name"
                        value={user.name}
                        placeholder="Enter your name..."
                        onChange={handleChange}
                    />
                </div>
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
                {dontMatch? <p id="dontmatch">Passwords don't match</p> : null}
                <div>
                    <input
                        id="password"
                        type="password"
                        required="required"
                        name="password"
                        value={user.password}
                        placeholder="Enter your Password..."
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <input
                        id="confirmPassword"
                        type="password"
                        required="required"
                        name="confirmPassword"
                        value={user.confirmPassword}
                        placeholder="Confirm your Password..."
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <button type="submit">
                        Register
                    </button>
                </div>
                <div>
                    <Link to="/">
                        Login
                    </Link>
                </div>
            </form>
        </p>
    );
}

export default Register;