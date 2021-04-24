import React, { Component } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";

export default class empDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      isloaded: false,
    };
  }

  componentDidMount() {
    const token = localStorage.getItem("Token");
    fetch("http://localhost:5000/lms/employeeDetails", {
      headers: { Authorization: `${token}`},
    })
      .then((response) => response.json())
      .then((result) => {
        debugger;
        console.log(result);
        this.setState({ 
          isloaded: true,
          list: result
         });
      });
  }
  render() {
    // console.log(this.state.list);
    // if (this.state.list == undefined) {
    //   return null;
    // }
    // var list = this.state.list;
    // console.log(list);
    // var x = this.state.list.map(x=>x);
    var {isloaded, list} = this.state;
    console.log(list);
    return (
      <div>
        <h1> Employee Details</h1>
        {isloaded && (
          <div>
            <Table striped bordered hover>
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
                </tr>
              </thead>
              <tbody>
                {list && list.data.map((item, i) => (
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
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        )}
      </div>
    );
  }
}

// export default class empDetail extends Component {
//   render() {
//     // axios
//     //   .get(`http://localhost:5000/lms/employeeDetails`, {
//     //   })
//     //   .then((response) => {
//     //     console.log(response);
//     //   })
//     //   .catch((e) => {
//     //     console.log(e);
//     //     this.setState({ ...this.state });
//     //   });
//     return (
//       <div>
//         <p>Hello </p>
//       </div>
//     );
//   }
// }
