import React, { Component } from "react";
import axios from "axios";
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import DeleteEmployee from './components/Employee/DeleteEmployee';
import EditEmployee from "./components/Employee/EditEmployee";
import EditEmpclass from "./components/Employee/EditEmpclass";
import { withRouter } from 'react-router-dom';

//import { DataGrid } from '@material-ui/data-grid';

// const columns = [
//   { field: 'id', headerName: 'ID', width: 70 },
//   { field: 'QCI ID', headerName: 'QCI ID', width: 70 },
//   { field: 'Name', headerName: 'Name', width: 70 },
//   { field: 'Email', headerName: 'Email', width: 70 },
//   { field: 'Board', headerName: 'Board', width: 50 },
//   { field: 'designation', headerName: 'designation', width: 50 },
//   { field: 'type of employee', headerName: 'type of employee', width: 50 },
//   { field: 'Gender', headerName: 'Gender', width: 50 },
//   { field: 'Casual Leave', headerName: 'Casual Leave', width: 40 },
//   { field: 'Sick leave', headerName: 'Sick leave', width: 40 },
//   { field: 'privilege leave', headerName: 'Privilege leave', width: 40 },
//   { field: 'Maternity leave', headerName: 'Maternity leave', width: 40 },
//   { field: 'Paternity Leave', headerName: 'Paternity Leave', width: 40 },
//   { field: 'Extraordinary Leave', headerName: 'Extraordinary Leave', width: 40 },
//   { field: 'password', headerName: 'password', width: 70 }

// ];
class empDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      isloaded: false,
      EditRow: ''
    };
  }

  componentDidMount() {
    const token = localStorage.getItem("Token");
    fetch("http://localhost:5000/lms/employeeDetails", {
      headers: { Authorization: `${token}` },
    })
      .then((response) => response.json())
      .then((result) => {
        debugger;
        console.log(result);
        this.setState({
          isloaded: true,
          list: result,
        });
      });
  }

   editData = (item) => {
   
    console.log(item);
    var {list, ...other} = this.state;
    console.log(list.data);
    const DisplayRow = list.data.find(id =>id.qci_id === item);
    console.log(DisplayRow);
    
    //<Link to = "/EmpDetail/Edituser" props ={this.state}> Edit Employee details </Link>
      
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
          password: '0',
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
  
  }
  render() {
    console.log(this.props);
    var { isloaded, list } = this.state;
    return (
      <div>
        <h1> Employee Details</h1>
        {isloaded && (
          <div>
            <Table class="table table-bordered">
              <thead>
                <tr>
                  <th>QCI ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Board</th>
                  <th>designation</th>
                  <th>type of employee</th>
                  <th>Gender</th>
                  <th>Casual Leave</th>
                  <th>Sick leave</th>
                  <th>privilege leave</th>
                  <th>Maternity leave</th>
                  <th>Paternity Leave</th>
                  <th>Extraordinary Leave</th>
                  <th>password</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {list &&
                  list.data.map((item, i) => (
                    <tr key={item.qci_id}>
                      <td>{item.qci_id}</td>
                      <td>{item.name} </td>
                      <td>{item.email}</td>
                      <td>{item.board}</td>
                      <td>{item.designation}</td>
                      <td>{item.type_of_employee} </td>
                      <td>{item.gender}</td>
                      <td>{item.bal_cl}</td>
                      <td>{item.bal_sl}</td>
                      <td>{item.bal_pl} </td>
                      <td>{item.bal_ml}</td>
                      <td>{item.bal_ptl}</td>
                      <td>{item.bal_eol}</td>
                      <td>{item.password}</td>
                      <td>
                        <Button
                          variant="info"
                          onClick = {() => this.editData(item)}                      >
                          Edit
                        </Button>
                        <Button variant="info"
                        onClick ={() => { DeleteEmployee([item.qci_id, item])}}>Delete</Button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          
          </div>
        )}
        
        <Button variant="info">Add  New Employee</Button>
      </div>
    );
  }
}
//<EditEmployee item = {this.state.emp}/>

export default withRouter(empDetail);