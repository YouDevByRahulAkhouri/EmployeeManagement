import React from "react";
import { useHistory } from "react-router-dom";
import { Table, Button } from "react-bootstrap";

export default function EditEmployee(props) {
    console.log(props)
  const editData = (DisplayRow) => {

    fetch(`http://localhost:5000/lms/editEmployeeDetails`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: localStorage.getItem("Token"),
      },
      body: JSON.stringify({
        qci_id: DisplayRow.qci_id,
        name: DisplayRow.name,
        email: DisplayRow.email,
        board: DisplayRow.board,
        designation: DisplayRow.designation,
        type_of_employee: DisplayRow.type_of_employee,
        gender: DisplayRow.gender,
        bal_cl: DisplayRow.bal_cl,
        bal_sl: DisplayRow.bal_sl,
        bal_pl: DisplayRow.bal_pl,
        bal_ml: DisplayRow.bal_ml,
        bal_ptl: DisplayRow.bal_ptl,
        bal_eol: DisplayRow.bal_eol,
        password: "0",
      }),
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((data) => {
        console.log(data);
        debugger;
        if (data && data.message) {
          const mess1 = "Successful Edit";
          console.log(mess1);
          this.setState({ output: mess1, success: data && data.success });
          console.log(data.message);
          this.props.history.push("/EmpDetail")
        }

        if (this.data && this.data.success) {
          //localStorage.setItem("Token", this.response.token);
          //   this.props.history.push("/empDetail/Edituser");
          //console.log(this.props);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const change = (e) => {
    console.log(e.target.name, e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  return (

    <form>

      <h1> Employee Details to be updated</h1>
          <label htmlFor="QCI Id">QCI ID of new enrolled employee:</label>
          <input
            name="qci_id"
            placeholder="QCI ID of new enrolled employee"
            onChange={(e) => change(e)}
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
    </form>
  );
}
