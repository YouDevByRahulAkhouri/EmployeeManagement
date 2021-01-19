import React, { useState } from "react";
import "./AdminForm.css";
import { withRouter } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import { KeyboardDatePicker } from "@material-ui/pickers";

const validEmailRegex = RegExp(
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);
// const validDateofBirth = RegExp(
//   /^(0[1-9]|1[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/([0-9]{4})$/
// );
const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
  return valid;
};
const [selectedDate, setSelectedDate] = this.setState(
  new Date("2014-08-18T21:11:54")
);

const handleDateChange = (date) => {
  setSelectedDate(date);
};

class AdminForm extends React.Component {
  constructor(props) {
    super(props);
    //console.log(props);
    this.state = {
      email: "",
      name: "",
      password: "",
      gender: "",
      errors: {
        name: "",
        email: "",
        password: "",
      },
      startDate: new Date(),
    };
    this.handleStartChange = this.handleStartChange.bind(this);
  }
  // handleChange = (e) => {
  //   const { id, value } = e.target;
  //   this.setState((prevState) => ({
  //     ...prevState,
  //     [id]: value,
  //   }));
  // };
  handleStartChange = (date) => {
    this.setState({
      startDate: date,
    });
  };
  handleChange = (event) => {
    event.preventDefault();
    const { id, value } = event.target;
    let errors = this.state.errors;

    switch (id) {
      case "name":
        errors.name =
          value.length < 5 ? "Name must be at least 5 characters long!" : "";
        break;
      case "email":
        errors.email = validEmailRegex.test(value) ? "" : "Email is not valid!";
        break;
      // case "dob":
      //   errors.dob = validDateofBirth.test(value) ? "" : "DOB is invalid!";
      //   break;
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
        if (data.success) {
          this.props.history.push("/loginadmin");
          this.setState({ response: data.response, message: data.message });
        }
        console.log("This is your data", data);
        this.setState({
          response: data.response,
          message: data.message,
          email: "",
          password: "",
          name: "",
        });

        //this.props.history.push("/loginadmin");
      })
      .catch((err) => console.log("something went wrong", err));
  };
  render() {
    const { errors } = this.state;

    //console.log(this.state);
    return (
      <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
        {this.state.message && <p>{this.state.message}</p>}
        {this.state.response && <p>{this.state.response}</p>}

        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className="paper">
            <Avatar className="avatar">
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <form className="form" noValidate onSubmit={this.handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="name"
                    name="Name"
                    variant="outlined"
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    autoFocus
                    value={this.state.name}
                    onChange={this.handleChange}
                  />
                  {errors.name.length > 0 && (
                    <span className="error">{errors.name}</span>
                  )}
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                  {errors.email.length > 0 && (
                    <span className="error">{errors.email}</span>
                  )}
                </Grid>
                <Grid item xs={12}>
                  <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    label="Date picker inline"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
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
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox value="allowExtraEmails" color="primary" />
                    }
                    label="I want to receive inspiration, marketing promotions and updates via email."
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className="submit"
                onClick={this.handleSubmitClick}
              >
                Sign Up
              </Button>
              <Grid container justify="flex-end">
                <Grid item>
                  <Link href="#" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
          <Typography variant="body2" color="textSecondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://material-ui.com/">
              Your Website
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Container>
      </div>
    );
  }
}
export default withRouter(AdminForm);
