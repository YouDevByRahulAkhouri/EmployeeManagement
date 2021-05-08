import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
//import Form from "@material-ui/core/Form";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Alert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";
import { connect } from "react-redux"
import { addEmp } from "../../actions/actionCreator"

class Addemployees extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      qci_id: "",
      email: "",
      name: "",
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
      open: false,

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
    const {
      name,
      email,
      gender,
      board,
      designation,
      type_of_employee,
      bal_cl,
      bal_sl,
      bal_pl,
      bal_ml,
      bal_ptl,
      bal_eol,
      password,
    } = this.state;
    let formErrors = {};
    let formIsValid = true;

    //Student name
    // if (!name) {
    //   formIsValid = false;
    //   formErrors["NameErr"] = "Name is .";
    // }
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
    //board
    if (!board) {
      formIsValid = false;
      formErrors["boardErr"] = "Cannot be empty";
    }
    // designation
    if (!designation) {
      formIsValid = false;
      formErrors["designationErr"] = "Cannot be empty";
    }

    if (!bal_cl) {
      formIsValid = false;
      formErrors["  bal_clErr"] = "Cannot be empty";
    }
    if (!bal_sl) {
      formIsValid = false;
      formErrors["  bal_slErr"] = "Cannot be empty";
    }
    if (!bal_pl) {
      formIsValid = false;
      formErrors["  bal_plErr"] = "Cannot be empty";
    }

    if (type_of_employee === "" || type_of_employee === "select") {
      formIsValid = false;
      formErrors["type_of_employeeErr"] = "Select type_of_employee.";
    }
    if (!bal_ml) {
      formIsValid = false;
      formErrors[" bal_mlErr"] = "Cannot be empty";
    }
    if (!bal_ptl) {
      formIsValid = false;
      formErrors["  bal_ptlErr"] = "Cannot be empty";
    }

    if (!bal_eol) {
      formIsValid = false;
      formErrors["  bal_eolErr"] = "Cannot be empty";
    }
    //Email
    if (!email) {
      formIsValid = false;
      formErrors["emailErr"] = "Email id is .";
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      formIsValid = false;
      formErrors["emailErr"] = "Invalid email id.";
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

  handleClose = () => {
    this.setState({ open: false });
  };

  handleSubmitClick = (e) => {
    e.preventDefault();
    alert("Submit");
    if (this.handleFormValidation()) {
      alert("You have been successfully registered.");
      this.setState(this.initialState);
    }
    const payload = {
      email: this.state.email,
      name: this.state.name,
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
    this.props.addEmp(payload)
    // const apiUrl = " http://127.0.0.1:5000/lms/addEmployee";
    // //const token =
    // // "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOjEyMzR9.AkulsG22blITRUe4-iROKG25EIqT8H2-5HXLT93nQXc";
    // fetch(apiUrl, {
    //   method: "POST",
    //   headers: {
    //     Authorization:
    //       "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOjEyMzR9.AkulsG22blITRUe4-iROKG25EIqT8H2-5HXLT93nQXc",
    //   },
    //   body: JSON.stringify(payload),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     if (data.success) {
    //       //localStorage.setItem("token", data.token);
    //       // this.props.history.push("/homepage");
    //       this.setState({
    //         response: data.response,
    //         message: data.message,
    //         token: data.token,
    //       });
    //       // this.props.history.push("/homepage");
    //     }
    //     console.log("This is your data", data);
    //     this.setState({
    //       response: data.response,
    //       message: data.message,
    //       email: "",
    //       name: "",
    //       password: "",
    //       gender: "",
    //       board: "",
    //       designation: "",
    //       type_of_employee: "",
    //       bal_cl: "",
    //       bal_sl: "",
    //       bal_pl: "",
    //       bal_ml: "",
    //       bal_ptl: "",
    //       bal_eol: "",
    //     });
    //   })
    //   .catch((err) => console.log("something went wrong", err));
  };
  render() {
    const {
      NameErr,
      emailErr,
      dobErr,
      genderErr,
      boardErr,
      designationErr,
      type_of_employeeErr,
      bal_eolErr,
      bal_clErr,
      bal_mlErr,
      bal_pt1Err,
      bal_plErr,
      bal_slErr,
      passwordErr,
    } = this.state.formErrors;
    console.log(this.props)
    return (
      <div className="container">
        {/* {this.props.name} {"  "} {this.props.message}
        <button onClick={() => this.props.changename('sha')}>change name</button>
        <button onClick={() => this.props.addMessage('how are you')}>Add Info</button>
        <button onClick={() => this.props.delMessage('message')}>delete Info</button> */}
        {this.state.success ? (
          <Snackbar
            open={this.state.open}
            autoHideDuration={3000}
            onClose={this.handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <Alert onClose={this.handleClose} severity="success">
              Employee added successfully!!!!
            </Alert>
          </Snackbar>
        ) : (
          <Snackbar
            open={this.state.open}
            autoHideDuration={3000}
            onClose={this.handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <Alert onClose={this.handleClose} severity="error">
              {this.state.message}
            </Alert>
          </Snackbar>
        )}
        <Container component="main" maxWidth="150px">
          <div>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Typography variant="h5" gutterBottom>
                  Emplyoee Personal Details
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="name"
                  name="name"
                  label=" name"
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  autoComplete="given-name"
                  onChange={this.handleChange}
                  className={NameErr ? " showError" : ""}
                />
                {NameErr && (
                  <span style={{ color: "red", paddingBottom: 10 }}>
                    {NameErr}
                  </span>
                )}
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
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
                  id="select"
                  name="gender"
                  label="Gender"
                  fullWidth
                  variant="outlined"
                  margin="normal"
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
              {/* <Grid item xs={12}>
                <TextField

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
                  variant="outlined"
                  margin="normal"
                  id="board"
                  name="board"
                  label="board"
                  fullWidth
                  autoComplete="shipping country"
                  onChange={this.handleChange}
                  className={boardErr ? " showError" : ""}
                />
                {boardErr && (
                  <span style={{ color: "red", paddingBottom: 10 }}>
                    {boardErr}
                  </span>
                )}
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  id="designation"
                  name="designation"
                  label="designation"
                  fullWidth
                  autoComplete="shipping country"
                  onChange={this.handleChange}
                  className={designationErr ? " showError" : ""}
                />
                {designationErr && (
                  <span style={{ color: "red", paddingBottom: 10 }}>
                    {designationErr}
                  </span>
                )}
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
                  className={type_of_employeeErr ? " showError" : ""}
                >
                  <MenuItem value="regular">Regular</MenuItem>
                  <MenuItem value="contract">Contract</MenuItem>
                  <MenuItem value="professional">Professional</MenuItem>
                </TextField>
                {type_of_employeeErr && (
                  <span style={{ color: "red", paddingBottom: 10 }}>
                    {type_of_employeeErr}
                  </span>
                )}
              </Grid>

              <Grid item xs={12} sm={4}>
                <TextField
                  id="bal_cl"
                  name="bal_cl"
                  label="CL"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  autoComplete="shipping country"
                  onChange={this.handleChange}
                  className={bal_clErr ? " showError" : ""}
                />
                {bal_clErr && (
                  <span style={{ color: "red", paddingBottom: 10 }}>
                    {bal_clErr}
                  </span>
                )}
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  id="bal_sl"
                  name="bal_sl"
                  label="SL"
                  fullWidth
                  autoComplete="shipping country"
                  onChange={this.handleChange}
                  className={bal_slErr ? " showError" : ""}
                />
                {bal_slErr && (
                  <span style={{ color: "red", paddingBottom: 10 }}>
                    {bal_slErr}
                  </span>
                )}
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="bal_pl"
                  name="bal_pl"
                  label="PL"
                  autoComplete="shipping country"
                  onChange={this.handleChange}
                  className={bal_plErr ? " showError" : ""}
                />
                {bal_plErr && (
                  <span style={{ color: "red", paddingBottom: 10 }}>
                    {bal_plErr}
                  </span>
                )}
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  id="bal_ml"
                  name="bal_ml"
                  fullWidth
                  label="ML"
                  autoComplete="shipping country"
                  onChange={this.handleChange}
                  className={bal_mlErr ? " showError" : ""}
                />
                {bal_mlErr && (
                  <span style={{ color: "red", paddingBottom: 10 }}>
                    {bal_mlErr}
                  </span>
                )}
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  id="bal_ptl"
                  name="bal_ptl"
                  fullWidth
                  label="PT1"
                  autoComplete="shipping country"
                  onChange={this.handleChange}
                  className={bal_pt1Err ? " showError" : ""}
                />
                {bal_pt1Err && (
                  <span style={{ color: "red", paddingBottom: 10 }}>
                    {bal_pt1Err}
                  </span>
                )}
              </Grid>

              <Grid item xs={12} sm={4}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  id="bal_eol"
                  name="bal_eol"
                  label="EOL"
                  fullWidth
                  autoComplete="shipping country"
                  onChange={this.handleChange}
                  className={bal_clErr ? " showError" : ""}
                />
                {bal_eolErr && (
                  <span style={{ color: "red", paddingBottom: 10 }}>
                    {bal_eolErr}
                  </span>
                )}
              </Grid>

              <Grid item xs={12} sm={4}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  id="password"
                  name="password"
                  label="password"
                  fullWidth
                  autoComplete="password"
                  onChange={this.handleChange}
                  className={passwordErr ? " showError" : ""}
                />
                {passwordErr && (
                  <span style={{ color: "red", paddingBottom: 10 }}>
                    {passwordErr}
                  </span>
                )}
              </Grid>
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
          </div>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    name: state.name,
    message: state.message
  }
}
const mapDispatchToProps = (dispatch) => {
  // alert('dis')
  return {
    // changename: (name) => { dispatch({ type: 'CHANGE_NAME', payload: name }) },
    addEmp: (data) => { dispatch(addEmp(data)) },
    // delMessage: (item) => { dispatch({ type: 'DELETE_MESSAGE', payload: item }) },

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Addemployees);
