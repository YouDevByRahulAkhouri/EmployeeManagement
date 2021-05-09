import React, { Component } from "react";
import axios from "axios";

import Home from "./Home";
import UserCheck from "./UserCheck";
import AdminLogin from "./AdminLogin";
import AdminSignup from "./components/AdminSignup";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
    console.log(props);
  }

  handleEmail = (event) => {
    console.log(event);
    this.setState({
      email: event.target.value,
    });
  };
  handleChange = ({ target: { value, name } }) => {
    var state = { [name]: value };
    //console.log(state);
    this.setState(state);
  };

  fetchUsingAxios = (props) => {
    axios
      .post(`http://localhost:5000/lms/loginAdmin`, {
        email: this.state.email,
        password: this.state.password,
      })
      .then((response) => {
        console.log(response);
        //  this.response = response.data;
        const mess1 = response.data.message;
        this.setState({ message: mess1 });
        if (response.data && response.data.success) {
          localStorage.setItem("Token", response.data.token);
          // UserCheck.login();
          this.props.history.push("/AdminLogin");
          //console.log(this.props);
        }
      })
      .catch((e) => {
        console.log(e);
        this.setState({ ...this.state });
      });
  };
  // handleSubmit = (event) => {
  //   alert(`Your details \n  Email: ${this.state.email}
  //   pass: ${this.state.pass}`);
  // };
  // const fetchAsync = async () => {
  //   const date = await fetch(`http://localhost:5000/lms/loginAdmin`);

  // }

  // fetchData = (key, event) => {
  //   fetch(`http://localhost:5000/lms/loginAdmin`, {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       email: this.state.email,
  //       password: this.state.pass,
  //     }),
  //   })
  //     .then((res) => {
  //       console.log(res);
  //       return res.json();
  //     })
  //     .then((data) => {
  //       if (data) {
  //         const mess1 = data && data.message;
  //         console.log(mess1);

  //         this.setState({ message: mess1, success: data && data.success });
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  render() {
 
    //alert(JSON.stringify(this.state));
    return (
      <div>
        <AdminSignup
          handleEmail={this.handleEmail}
          handleChange={this.handleChange}
          state={this.state}
        />
        <button onClick={this.fetchUsingAxios}> Login</button>
        <p style={{ color: "red" }}>{this.state.message}</p>
      </div>
    );
  }
}

export default Login;

// <button onClick={this.fetchUsingAxios}> Login</button>
// <div>
// <h1> Employee registration</h1>
// <label htmlFor="email">Email :</label>
// <input
//   type="text"
//   name="email"
//   placeholder="email"
//   onChange={this.handleEmail}
// />
// <p>{this.state.email}</p>
// <label htmlFor="password">password:</label>
// <input
//   type="password"
//   name="password"
//   placeholder="password"
//   onChange={this.handleChange}
// />
// </div>
