import React from "react";
import "./LoginForm.css";

class LoginForm extends React.Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      name: ''
    }
  }
  handleChange = (e) => {
    const { id, value } = e.target;
    console.log(id, value)
    this.setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  handleSubmitClick = (e) => {
    e.preventDefault();
    alert('submitting')
    const payload = {
      email: this.state.email,
      password: this.state.password,
    };
    const headers = {
      Authorization: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOjEyMzR9.AkulsG22blITRUe4-iROKG25EIqT8H2-5HXLT93nQXc'
    }
    const options = {
      method: 'POST',
      headers: headers,
      body: payload
    }
    const apiUrl = " http://127.0.0.1:5000/lms/admin";
    fetch(apiUrl, options)
      .then((res) => res.json())
      .then((data) => this.setState({ response: data.response, success: data.success }));

  }

  render() {
    console.log(this.state)
    return (
      <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
        {this.state.success === false && <p style={{ color: 'red' }}>Something went wrong.Try again!</p>}
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
            <label htmlFor="exampleInputPassword1">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="name"
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
          <span>Dont have an account? </span>
          <span className="loginText">
            Register
          </span>
        </div>
      </div>
    );
  }

}
export default LoginForm;
