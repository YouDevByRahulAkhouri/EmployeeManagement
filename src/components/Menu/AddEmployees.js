import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
//import Form from "@material-ui/core/Form";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

class Addemployees extends React.Component {
  constructor(props) {
    super(props);
    //console.log(props);
    this.state = {
      qci_id: "",
      email: "",
      Name: "",
      password: "",
      gender: "select",
      board: "",
      designation: "",
      type_of_employee: "select",
      bal_cl: "",
      bal_sl: "",
      bal_pl: "",
      bal_ml: "",
      bal_ptl: "",
      bal_eol: "",
      formErrors: {},

      // isDisabled: true,
      // errors: {
      //   email: "",
      //   firstName: "",
      //   lastName: "",
      //   password: "",
      //   gender: "",
      //   board: "",
      //   designation: "",
      //   type_of_employee: "",
      //   bal_cl: "",
      //   bal_sl: "",
      //   bal_pl: "",
      //   bal_ml: "",
      //   bal_ptl: "",
      //   bal_eol: "",
      // },
    };
    this.initialState = this.state;
  }
  handleFormValidation() {
    const { firstName, lastName, email, dob, gender } = this.state;
    let formErrors = {};
    let formIsValid = true;

    //Student name
    if (!firstName) {
      formIsValid = false;
      formErrors["firstNameErr"] = "firstName is required.";
    }
    if (!lastName) {
      formIsValid = false;
      formErrors["lastNameErr"] = "lastName is required.";
    }

    //Email
    if (!email) {
      formIsValid = false;
      formErrors["emailErr"] = "Email id is required.";
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      formIsValid = false;
      formErrors["emailErr"] = "Invalid email id.";
    }

    //DOB
    if (!dob) {
      formIsValid = false;
      formErrors["dobErr"] = "Date of birth is required.";
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

    this.setState({ formErrors: formErrors });
    return formIsValid;
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value }, console.log(this.state));
    console.log(name, value);
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.handleFormValidation()) {
      alert("You have been successfully registered.");
      this.setState(this.initialState);
    }
  };

  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   if (validateForm(this.state.errors)) {
  //     console.info("Valid Form");
  //   } else {
  //     console.error("Invalid Form");
  //   }
  // };
  handleSubmitClick = (e) => {
    e.preventDefault();
    //alert("Submit");
    const payload = {
      email: this.state.email,
      name: this.state.Name,
      qci_id: this.state.qci_id,
      password: this.state.password,
      gender: this.state.gender,
      board: this.state.board,
      designation: this.state.designation,
      type_of_employee: this.state.type_of_employee,
      bal_cl: this.state.bal_cl,
      bal_sl: this.state.bal_sl,
      bal_pl: this.state.bal_pl,
      bal_ml: this.state.bal_ml,
      bal_ptl: this.state.bal_pt1,
      bal_eol: this.state.bal_eol,
    };
    console.log(payload);
    const apiUrl = " http://127.0.0.1:5000/lms/addEmployee";
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
          //localStorage.setItem("token", data.token);
          // this.props.history.push("/homepage");
          this.setState({
            response: data.response,
            message: data.message,
            token: data.token,
          });
          // this.props.history.push("/homepage");
        }
        console.log("This is your data", data);
        this.setState({
          response: data.response,
          message: data.message,
          email: "",
          name: "",
          password: "",
          gender: "",
          board: "",
          designation: "",
          type_of_employee: "",
          bal_cl: "",
          bal_sl: "",
          bal_pl: "",
          bal_ml: "",
          bal_ptl: "",
          bal_eol: "",
        });
      })
      .catch((err) => console.log("something went wrong", err));
  };
  render() {
    const {
      firstNameErr,
      lastNameErr,
      emailErr,
      dobErr,
      genderErr,
    } = this.state.formErrors;

    return (
      <div className="container">
        <Container component="main" maxWidth="150px">
          <form onSubmit={this.handleSubmit}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Typography variant="h5" gutterBottom>
                  Emplyoee Personal Details
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="Name"
                  name="Name"
                  label=" name"
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  autoComplete="given-name"
                  onChange={this.handleChange}
                  className={firstNameErr ? " showError" : ""}
                />
                {firstNameErr && (
                  <span style={{ color: "red", paddingBottom: 10 }}>
                    {firstNameErr}
                  </span>
                )}
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="qci_id"
                  name="qci_id"
                  label=" qci_id"
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  autoComplete="qci_id"
                  onChange={this.handleChange}
                />
              </Grid>

              {/* <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="lastName"
                  name="lastName"
                  label="Last name"
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  autoComplete="family-name"
                  onChange={this.handleChange}
                  className={lastNameErr ? " showError" : ""}
                />
                {lastNameErr && (
                  <span style={{ color: "red", paddingBottom: 10 }}>
                    {lastNameErr}
                  </span>
                )}
              </Grid> */}

              <Grid item xs={12} sm={4}>
                <TextField
                  required
                  id="email"
                  name="email"
                  label="Email "
                  fullWidth
                  variant="outlined"
                  margin="normal"
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

              <Grid item xs={12} sm={4}>
                <TextField
                  id="date"
                  name="dob"
                  label="DOB"
                  variant="outlined"
                  margin="normal"
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
              <Grid item xs={12} sm={4}>
                <TextField
                  id="select"
                  name="gender"
                  label="Gender"
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  onChange={this.handleChange}
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
              {/* <Grid item xs={12}>
                <TextField
                  required
                  variant="outlined"
                  margin="normal"
                  name
                  fullWidth
                  id="address1"
                  name="address1"
                  label="Address "
                  autoComplete="shipping address-line1"
                />
              </Grid> */}

              <Grid item xs={12} sm={4}>
                <TextField
                  required
                  variant="outlined"
                  margin="normal"
                  id="board"
                  name="board"
                  label="board"
                  fullWidth
                  autoComplete="shipping country"
                  onChange={this.handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  required
                  variant="outlined"
                  margin="normal"
                  id="designation"
                  name="designation"
                  label="designation"
                  fullWidth
                  autoComplete="shipping country"
                  onChange={this.handleChange}
                />
              </Grid>
              <Grid fullWidth item xs={12} sm={4}>
                <TextField
                  id="select"
                  variant="outlined"
                  name="type_of_employee"
                  margin="normal"
                  label="Type of Employee"
                  fullWidth
                  onChange={this.handleChange}
                  select
                >
                  <MenuItem value="regular">Regular</MenuItem>
                  <MenuItem value="contract">Contract</MenuItem>
                  <MenuItem value="professional">Professional</MenuItem>
                </TextField>
              </Grid>

              <Grid item xs={12} sm={4}>
                <TextField
                  required
                  id="bal_cl"
                  name="bal_cl"
                  label="CL"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  autoComplete="shipping country"
                  onChange={this.handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  required
                  variant="outlined"
                  margin="normal"
                  id="bal_sl"
                  name="bal_sl"
                  label="SL"
                  fullWidth
                  autoComplete="shipping country"
                  onChange={this.handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  required
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="bal_pl"
                  name="bal_pl"
                  label="PL"
                  autoComplete="shipping country"
                  onChange={this.handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  required
                  variant="outlined"
                  margin="normal"
                  id="bal_ml"
                  name="bal_ml"
                  fullWidth
                  label="ML"
                  autoComplete="shipping country"
                  onChange={this.handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  required
                  variant="outlined"
                  margin="normal"
                  id="bal_ptl"
                  name="bal_ptl"
                  fullWidth
                  label="PT1"
                  autoComplete="shipping country"
                  onChange={this.handleChange}
                />
              </Grid>

              <Grid item xs={12} sm={4}>
                <TextField
                  required
                  variant="outlined"
                  margin="normal"
                  id="bal_eol"
                  name="bal_eol"
                  label="EOL"
                  fullWidth
                  autoComplete="shipping country"
                  onChange={this.handleChange}
                />
              </Grid>

              <Grid item xs={12} sm={4}>
                <TextField
                  required
                  variant="outlined"
                  margin="normal"
                  id="password"
                  name="password"
                  label="password"
                  fullWidth
                  autoComplete="password"
                  onChange={this.handleChange}
                />
              </Grid>
              {this.state.passwordError ? (
                <span style={{ color: "red" }}>Please enter some value</span>
              ) : (
                ""
              )}
            </Grid>
            <Grid>
              <Button
                marginLeft={30}
                type="submit"
                variant="contained"
                color="primary"
                className="submit"
                // disabled={this.state.isDisabled}
                onClick={this.handleSubmitClick}
              >
                Sign Up
              </Button>
              {/* <Button
                marginRight={30}
                type="save"
                variant="contained"
                color="primary"
                className="save"
                // disabled={this.state.isDisabled}
              >
                Save
              </Button> */}
            </Grid>
          </form>
        </Container>
      </div>
    );
  }
}

export default Addemployees;
