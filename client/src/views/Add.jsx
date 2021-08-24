import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import Swal from 'sweetalert2';
import Nav from '../components/Nav';


function Add() {
  const { id } = useParams();

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
    axios.post('/transaction', {...values, id})
    .then(()=> {
      return Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your transaction has been saved',
        showConfirmButton: false,
        timer: 1500
      })
    })
    .catch(
      ()=> {
        return Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Something went wrong',
          showConfirmButton: false,
          timer: 1500
        })
      }
    )
  }

  return (
    <p>
      <Nav id={id} />
      <h3>Add a Transaction</h3>
      <hr />
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="concept" className="col-sm-2 control-label">
            Concetp
          </label>
          <div className="col-sm-10">
            <input onChange={handleChange} value={values.concept} name="concept" type="text" className="form-control" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="amount" className="col-sm-2 control-label">
            Amount
          </label>
          <div className="col-sm-10">
            <input onChange={handleChange} value={values.amount} name="amount" type="text" className="form-control" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="type" className="col-sm-2 control-label">
            Type
          </label>
          <div className="col-sm-10">
            <input onChange={handleChange} value={values.type} name="type" type="text" className="form-control" />
          </div>
        </div>
        <div className="col-sm-offset-2 col-sm-10">
          <button
            type="submit"
            className="btn btn-primary"
            style={{ marginTop: "10px", float: "right" }}
          >
            SUBMIT
          </button>
        </div>
      </form>
    </p>
  );
}

export default Add;
