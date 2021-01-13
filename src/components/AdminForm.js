import React from "react";
import "./AdminForm.css";
import { withRouter } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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

        <form onSubmit={this.handleSubmit} noValidate>
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
            {errors.email.length > 0 && (
              <span className="error">{errors.email}</span>
            )}
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group text-left">
            <label htmlFor="exampleInputEmail1">Name</label>
            <input
              type="name"
              className="form-control"
              id="name"
              placeholder="Enter name"
              value={this.state.name}
              onChange={this.handleChange}
            />
            {errors.name.length > 0 && (
              <span className="error">{errors.name}</span>
            )}
          </div>
          <div>
            <label htmlFor="text">Birth Date</label>
            <div className="filters">
              <DatePicker
                selected={this.state.startDate}
                onChange={this.handleStartChange}
              />
            </div>
          </div>
          <div>
            <label htmlFor="gender">Gender</label>
            <select
              name="gender"
              onChange={this.handleChange}
              className="gender"
              value={this.state.gender}
            >
              <option value="select">--Select--</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="female">Other</option>
            </select>
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
          {errors.password.length > 0 && (
            <span className="error">{errors.password}</span>
          )}
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
