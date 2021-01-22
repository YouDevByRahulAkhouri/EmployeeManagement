import React from "react";
import "./LoginForm.css";
//import { browserHistory } from "react-router";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
//import Snackbar from "@material-ui/core/Snackbar";
//import MuiAlert from "@material-ui/lab/Alert";
//import Box from "@material-ui/core/Box";
//import { makeStyles } from "@material-ui/core/styles";

import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
//import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
//import { withRouter } from "react-router-dom";
//import TextField from "@material-ui/core/TextField";
//import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import Alert from "@material-ui/lab/Alert";
const validEmailRegex = RegExp(
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);
const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
  return valid;
};

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    const { id, value } = event.target;
    let errors = this.state.errors;

    switch (id) {
      case "email":
        errors.email = validEmailRegex.test(value) ? "" : "Email is not valid!";
        break;

      case "password":
        errors.password =
          value.length < 8
            ? "Password must be at least 8 characters long!"
            : "";
        break;

      default:
        break;
    }

    this.setState({ errors, [id]: value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm(this.state.errors)) {
      console.info("Valid Form");
    } else {
      console.error("Invalid Form");
    }
  };

  handleSubmitClick = (e) => {
    e.preventDefault();
    //alert("Submit");
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
          localStorage.setItem("token", data.token);
          this.props.history.push("/homepage");
          this.setState({
            response: data.response,
            message: data.message,
            token: data.token,
          });
          this.props.history.push("/homepage");
        }
        console.log("This is your data", data);
        this.setState({
          response: data.response,
          message: data.message,
          email: "",
          password: "",
        });
      })
      .catch((err) => console.log("something went wrong", err));
  };
  render() {
    console.log(this.state);
    const { errors } = this.state;

    return (
      <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className="paper">
            <Avatar className="avatar">
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>

            <form className="form" onSubmit={this.handleSubmit}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  value={this.state.email}
                  onChange={this.handleChange}
                />
                {errors.email.length > 0 && (
                  <span className="error">{errors.email}</span>
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
                {errors.password.length > 0 && (
                  <span className="error">{errors.password}</span>
                )}
              </Grid>
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className="submit"
                onClick={this.handleSubmitClick}
              >
                LOGIN
              </Button>
              {/* <Alert severity="success" onSubmit={this.handleSubmit}>
                Logged in!{" "}
              </Alert> */}

              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </Container>
        {/* <div>
          <Snackbar
            //open={open}
            autoHideDuration={6000}
            onClose={this.handleSubmitClick}
          >
            <Alert onClose={this.handleSubmitClick} severity="success">
              This is a success message!
            </Alert>
          </Snackbar>
        </div> */}
        <Typography variant="body2" color="textSecondary" align="center">
          {"Copyright © "}
          <Link color="inherit" href="https://material-ui.com/">
            Your Website
          </Link>{" "}
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </div>
    );
  }
}
export default LoginForm;
