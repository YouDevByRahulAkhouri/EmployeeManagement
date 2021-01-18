import React from "react";
import "./LoginNew.css";
import Button from "@material-ui/core/Button";

//import { makeStyles } from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";
//import { withRouter } from "react-router-dom";
//import TextField from "@material-ui/core/TextField";

class LoginNewForm extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      email: "",
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
      password: this.state.password,
    };
    console.log(payload);
    const apiUrl = " http://127.0.0.1:5000/lms/loginAdmin";
    //const token =
    // "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOjEyMzR9.AkulsG22blITRUe4-iROKG25EIqT8H2-5HXLT93nQXc";
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
        if (data.success) {
          this.props.history.push("/homepage");
          this.setState({
            response: data.response,
            message: data.message,
            token: data.token,
          });
          console.log(data);
        }
        console.log("This is your data", data);
        this.setState({
          response: data.response,
          message: data.message,
          email: "",
          password: "",
        });

        //this.props.history.push("/loginadmin");
      })
      .catch((err) => console.log("something went wrong", err));
  };
  render() {
    console.log(this.state);
    return (
      <div className="cointainer">
        <div>
          <form className="form" noValidate autoComplete="off">
            <header>
              <h2>LOGIN ADMIN</h2>
            </header>

            <label>Email address</label>
            <TextField
              id="standard-basic"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <label htmlFor="exampleInputPassword1">Password</label>
            <TextField
              required
              id="standard-basic"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <Button
              variant="contained"
              color="primary"
              href="#contained-buttons"
            >
              LogIn
            </Button>
            <div className="registerMessage">
              <span>If you don't have an account</span>
              <span className="loginText">SignUp</span>
            </div>
          </form>
        </div>

        {/* <div className="registerMessage">
          <span>Already have an account? </span>
          <span className="loginText">Login</span>
        </div> */}
      </div>
    );
  }
}
export default LoginNewForm;
