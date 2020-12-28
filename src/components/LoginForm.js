import React , { useState } from "react";
import "./LoginForm.css";

class LoginForm extends React.Component {
  componentDidMount() {
    const apiUrl = " http://127.0.0.1:5000/lms/loginAdmin";
    fetch(apiUrl,payload)
      .then((response) => response.json())
      .then((data) => console.log("This is your data", data));

    const [state, setState] = useState({
        email: "",
        password: "",
        successMessage: null,
      });
    const handleChange = (e) => {
        const { id, value } = e.target;
        setState((prevState) => ({
          ...prevState,
          [id]: value,
        }));
      };
    
    const handleSubmitClick = (e) => {
        e.preventDefault();
        const payload = {
          email: state.email,
          password: state.password,
        };
    
  }
  
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
