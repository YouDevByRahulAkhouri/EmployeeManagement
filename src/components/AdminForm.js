import React , { useState } from "react";
import "./AdminForm.css";

class AdminForm extends React.Component {

    const handleChange = (e) => {
     
        const { id, value } = e.target;
        setState((prevState) => ({
          ...prevState,
          [id]: value,
           //console.log(e.target)
           //e.prevent
        }));
      };
    
    const handleSubmitClick = (e) => {
        e.preventDefault();
        const payload = {

          email: state.email,
          name: state.name,
          password: state.password,
        };
        //const apiUrl = " http://127.0.0.1:5000/lms/admin";
        const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOjEyMzR9.AkulsG22blITRUe4-iROKG25EIqT8H2-5HXLT93nQXc';
        fetch('http://127.0.0.1:5000/lms/admin', {
        method: 'GET',
        headers: {
        Authorization: `token ${token}`
                }
            })
        .then(res => res.json())
        .then(json => console.log(json));
        .catch(err => console.log('something went wrong', err)); 
        // fetch(apiUrl,payload)
        //   .then((response) => response.json())
        //   .then((data) => console.log("This is your data", data));
    
  
  render() 
  {
    return (
      <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
        <form>
          <div className="form-group text-left">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              value={state.email}
              onChange={handleChange}
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group text-left">
            <label htmlFor="exampleInputEmail1">Name</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter name"
              value={state.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group text-left">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              value={state.password}
              onChange={handleChange}
            />
          </div>
          <div className="form-check"></div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmitClick}
          >
            Submit
          </button>
        </form>
       
        <div className="registerMessage">
          <span>Already have an account? </span>
          <span className="loginText">
            Login
          </span>
        </div>
      </div>
    );
  }
  
}
export default AdminForm;
