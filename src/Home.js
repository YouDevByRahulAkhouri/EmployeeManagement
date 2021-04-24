import React from "react";
import { UserCheck } from "./UserCheck";
import EmpDetail from "./EmpDetail";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Home extends React.Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
      qci_id: "",
      name: "",
      email: "",
      board: "",
      designation: "",
      type_of_employee: "",
      gender: "",
      bal_cl: "",
      bal_sl: "",
      bal_pl: "",
      bal_ml: "",
      bal_ptl: "",
      bal_eol: "",
      password: "",
    };
    console.log(props);
  }
  change = (e) => {
    console.log(e.target.name, e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = () => {
    console.log(this.state);
  };
  logOut = () => {
    localStorage.removeItem("Token");
  };

  AddEmployee = () => {
    //alert("this is hit");
    console.log(this.state);
    fetch(`http://localhost:5000/lms/addEmployee`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: localStorage.getItem("Token"),
      },
      body: JSON.stringify({
        qci_id: this.state.qci_id,
        name: this.state.name,
        email: this.state.email,
        board: this.state.board,
        designation: this.state.designation,
        type_of_employee: this.state.type_of_employee,
        gender: this.state.gender,
        bal_cl: this.state.bal_cl,
        bal_sl: this.state.bal_sl,
        bal_pl: this.state.bal_pl,
        bal_ml: this.state.bal_ml,
        bal_ptl: this.state.bal_ptl,
        bal_eol: this.state.bal_eol,
        password: this.state.password,
      }),
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((data) => {
        console.log(data);
        // if (data) {
        //   const mess1 = data && data.message;
        //   console.log(mess1);
        //   this.setState({ message: mess1, success: data && data.success });
        // }
        
        if (data && data.message) {
          const mess1 = "Successfully added one more employee";
          console.log(mess1);
          this.setState({ output: mess1, success: data && data.success });
          console.log(data.message);
        }

        if (this.data && this.data.success) {
          //localStorage.setItem("Token", this.response.token);
          this.props.history.push("/empDetail");
          //console.log(this.props);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    console.log("Home.js");
    return (
        <form>
          <h1> Successful Admin Login, Create Employee registration</h1>
          <label htmlFor="QCI Id">QCI ID of new enrolled employee:</label>
          <input
            name="qci_id"
            placeholder="QCI ID of new enrolled employee"
            onChange={(e) => this.change(e)}
          />{" "}
          <br /> <br />
          <label htmlFor="Name">name of employee:</label>
          <input
            name="name"
            placeholder="name of employee"
            onChange={(e) => this.change(e)}
          />{" "}
          <br /> <br />
          <label htmlFor="email">email id of employee:</label>
          <input
            name="email"
            placeholder="email"
            onChange={(e) => this.change(e)}
          />{" "}
          <label htmlFor="board">Board of employee working in:</label>
          <input
            name="board"
            placeholder="board of employee"
            onChange={(e) => this.change(e)}
          />{" "}
          <br /> <br />
          <label htmlFor="Designation">Designation of employee:</label>
          <input
            name="designation"
            type="designation"
            placeholder="Designation of employee"
            onChange={(e) => this.change(e)}
          />{" "}
          <br /> <br />
          <label htmlFor="type_of_employee">
            Type of employee, whether regular,professional or contract:
          </label>
          <input
            name="type_of_employee"
            type="type_of_employee"
            placeholder="type_of_employee"
            onChange={(e) => this.change(e)}
          />{" "}
          <br /> <br />
          <label htmlFor="gender">Gender of employee:</label>
          <input
            name="gender"
            placeholder="Gender of employee"
            onChange={(e) => this.change(e)}
          />{" "}
          <br /> <br />
          <label htmlFor=" bal_cl">Balance casual leave of employee</label>
          <input
            name="bal_cl"
            placeholder="Balance casual leave of employee"
            onChange={(e) => this.change(e)}
          />{" "}
          <br /> <br />
          <label htmlFor="bal_sl">Balance sick leave of employee:</label>
          <input
            name="bal_sl"
            placeholder="Balance sick leave of employee"
            onChange={(e) => this.change(e)}
          />{" "}
          <br /> <br />
          <label htmlFor=" bal_pl">Balance privilege leave of Employee:</label>
          <input
            name="bal_pl"
            placeholder="Balance privilege leave of Employee"
            onChange={(e) => this.change(e)}
          />{" "}
          <br /> <br />
          <label htmlFor="bal_ml">
            Balance maternity leave only for female Employee:
          </label>
          <input
            name="bal_ml"
            placeholder="maternity leave only for female Emp"
            onChange={(e) => this.change(e)}
          />{" "}
          <br /> <br />
          <label htmlFor="bal_ptl">
            Balance paternity leave only for male employee:
          </label>
          <input
            name="bal_ptl"
            placeholder="Balance paternity leave only for male employee"
            onChange={(e) => this.change(e)}
          />{" "}
          <br /> <br />
          <label htmlFor="bal_eol">
            Balance extra ordinary leave for employee:
          </label>
          <input
            name="bal_eol"
            placeholder="Balance extra ordinary leave for employee"
            onChange={(e) => this.change(e)}
          />{" "}
          <label htmlFor="password">password:</label>
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={(e) => this.change(e)}
          />{" "}
          <br /> <br />
          <button onClick={this.logOut}> logOut</button>
          <button type="button" onClick={this.AddEmployee}>
            {" "}
            Add Employee
          </button>
          <p>{this.state.output}</p>

          <br />
          <br />
          <Link to = "/EmpDetail"> Employee details </Link>

        </form>
    );
  }
}

export default Home;

