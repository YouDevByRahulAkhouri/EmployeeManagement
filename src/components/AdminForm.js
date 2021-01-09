import React from "react";
import "./AdminForm.css";
import { withRouter } from "react-router-dom";

class AdminForm extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      name: "",
      password: "",
    };
  }
  handleChange = (e) => {
    const { id, value } = e.target;
    this.setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  handleSubmitClick = (e) => {
    e.preventDefault();
    const payload = {
      email: this.state.email,
      name: this.state.name,
      password: this.state.password,
    };
    const apiUrl = " http://127.0.0.1:5000/lms/admin";
    // const token =
    //   "";
    fetch(apiUrl, {
      method: "POST",
      headers: {
        Authorization:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOjEyMzR9.AkulsG22blITRUe4-iROKG25EIqT8H2-5HXLT93nQXc",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("This is your data", data);
        this.setState({ response: data.response, message: data.message });
      })
      .catch((err) => console.log("something went wrong", err));
  };
  render() {
    console.log(this.state);
    return (
      <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
        {this.state.message && <p>{this.state.message}</p>}
        {this.state.response && <p>{this.state.response}</p>}

        <form>
          <div className="form-group text-left">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              value={this.state.email}
              onChange={this.handleChange}
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
              id="name"
              placeholder="Enter name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group text-left">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-check"></div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={this.handleSubmitClick}
          >
            Submit
          </button>
        </form>

        <div className="registerMessage">
          <span>Already have an account? </span>
          <span className="loginText">Login</span>
        </div>
      </div>
    );
  }
}
export default withRouter(AdminForm);
