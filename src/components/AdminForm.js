import React from "react";
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
//import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
//import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Alert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";
import { Redirect } from "react-router-dom";
import MenuItem from "@material-ui/core/MenuItem";

//import "date-fns";
//import DateFnsUtils from "@date-io/date-fns";
//import { KeyboardDatePicker } from "@material-ui/pickers"
//import "date-fns";
//import DateFnsUtils from "@date-io/date-fns";
// import { KeyboardDatePicker } from "@material-ui/pickers";

class AdminForm extends React.Component {
  constructor(props) {
    super(props);
    //console.log(props);
    this.state = {
      email: "",
      name: "",
      password: "",
      gender: "",
      dob: "",
      formErrors: {},
    };
    this.initialState = this.state;
    this.state = { navigate: false };
    this.login = this.login.bind(this);
  }

  login = function () {
    return this.setState({ navigate: true });
  };

  handleFormValidation() {
    const { name, email, dob, gender, password } = this.state;
    let formErrors = {};
    let formIsValid = true;

    if (!name) {
      formIsValid = false;
      formErrors["NameErr"] = "Cannot be empty";
    }

    if (typeof name !== "undefined") {
      if (!name.match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        formErrors["NameErr"] = "Only letters";
      }
    }
    //Email
    if (!email) {
      formIsValid = false;
      formErrors["emailErr"] = "Email id is .";
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      formIsValid = false;
      formErrors["emailErr"] = "Invalid email id.";
    }

    //DOB
    if (!dob) {
      formIsValid = false;
      formErrors["dobErr"] = "Date of birth is .";
    } else {
      var pattern = /^(0[1-9]|1[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/([0-9]{4})$/;
      if (!pattern.test(dob)) {
        formIsValid = false;
        formErrors["dobErr"] = "Invalid date of birth";
      }
    }

    //Gender
    if (gender === "" || gender === "select") {
      formIsValid = false;
      formErrors["genderErr"] = "Select gender.";
    }
    if (!password) {
      formIsValid = false;
      formErrors["passwordErr"] = "Cannot be empty";
    }
    this.setState({ formErrors: formErrors });
    return formIsValid;
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target);
    this.setState({ [name]: value }, console.log(this.state));
    console.log(name, value);
  };

  handleSubmitClick = (e) => {
    e.preventDefault();
    alert("Submit");

    this.setState({ open: true });
    if (this.handleFormValidation()) {
      alert("You have been successfully registered.");
      this.setState(this.initialState);
    }
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
    const { navigate } = this.state;
    if (navigate) {
      return <Redirect to="/" push={true} />;
    }

    const {
      NameErr,
      emailErr,
      dobErr,
      genderErr,
      passwordErr,
    } = this.state.formErrors;

    //console.log(this.state);
    return (
      <div>
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
            <form className="form">
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    label="Name"
                    id="name"
                    autoFocus
                    onChange={this.handleChange}
                    className={NameErr ? " showError" : ""}
                  />
                  {NameErr && (
                    <span style={{ color: "red", paddingBottom: 10 }}>
                      {NameErr}
                    </span>
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
                    onChange={this.handleChange}
                    className={emailErr ? " showError" : ""}
                  />
                  {emailErr && (
                    <span style={{ color: "red", paddingBottom: 10 }}>
                      {emailErr}
                    </span>
                  )}
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    id="date"
                    label="DOB"
                    type="date"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={this.handleChange}
                    className={dobErr ? " showError" : ""}
                    fullWidth
                  />
                  {dobErr && (
                    <span style={{ color: "red", paddingBottom: 10 }}>
                      {dobErr}
                    </span>
                  )}
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="select"
                    fullWidth
                    variant="outlined"
                    name="gender"
                    label="Gender"
                    onChange={this.handleChange}
                    className={genderErr ? " showError" : ""}
                    select
                  >
                    <MenuItem value="Men">Men</MenuItem>
                    <MenuItem value="women">Women</MenuItem>
                    <MenuItem value="others">Others</MenuItem>
                  </TextField>
                  {genderErr && (
                    <div style={{ color: "red", paddingBottom: 10 }}>
                      {genderErr}
                    </div>
                  )}
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
                    onChange={this.handleChange}
                    className={passwordErr ? " showError" : ""}
                  />
                  {passwordErr && (
                    <span style={{ color: "red", paddingBottom: 10 }}>
                      {passwordErr}
                    </span>
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
                  <Link onClick={this.login} variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </Container>
      </div>
    );
  }
}
export default withRouter(AdminForm);
