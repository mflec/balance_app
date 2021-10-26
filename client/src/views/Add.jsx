import axios from "axios";
import React from "react";
import Swal from 'sweetalert2';
import Nav from '../components/Nav';
import { useHistory } from "react-router";
import {
  Select
} from '@chakra-ui/react'

function Add() {
  const history = useHistory()
  const [values, setValues] = React.useState({
    concept: "",
    amount: "",
    type: ""
  });

  function handleChange(e) {
    setValues(values => ({
      ...values,
      [e.target.name]: e.target.value
    }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const token = localStorage.getItem("token")
    axios
      .post('/transaction/post', { ...values, token: token })
      .then(() => {
        history.push("/home")
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Your transaction has been saved',
          showConfirmButton: false,
          timer: 1500
        })
      })
      .catch(
        () => {
          return Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Something was wrong',
            showConfirmButton: false,
            timer: 1500
          })
        }
      )
  }

  return (
    <p id="addform">
      <Nav />
      <h3 className="addtransaction">ADD A TRANSACTION</h3>
      <form id="addinput" onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="col-sm-30">
            <input
              onChange={handleChange}
              value={values.concept}
              name="concept"
              type="text"
              className="form-control"
              placeholder="Concept"
              required />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-30">
            <input
              onChange={handleChange}
              value={values.amount}
              name="amount"
              type="text"
              className="form-control"
              placeholder="Amount"
              required />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-30">
            <select
              onChange={handleChange}
              value={values.type}
              name="type"
              type="text"
              className="form-control"
              placeholder="Type"
              required>
              <option>Select a type</option>
              <option value="egress">Egress</option>
              <option value="ingress">Ingress</option>
            </select>
          </div>
        </div>
        <div className="col-sm-offset-1 col-sm-30">
          <button
            type="submit"
            className="btn"
          >
            SUBMIT
          </button>
        </div>
      </form>
      <br />
    </p>
  );
}

export default Add;
