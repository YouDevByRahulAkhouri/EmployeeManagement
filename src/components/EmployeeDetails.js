import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import HourglassEmptyIcon from "@material-ui/icons/HourglassEmpty";

class EmployeeDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount() {
    const apiUrl = " http://127.0.0.1:5000/lms/employeeDetails";
    //fetch(" http://127.0.0.1:5000/lms/employeeDetails")
    fetch(apiUrl, {
      method: "GET",
      headers: {
        Authorization:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOjEyMzR9.AkulsG22blITRUe4-iROKG25EIqT8H2-5HXLT93nQXc",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        this.setState({
          isLoaded: true,
          items: result.data,
        });
      })
      .catch((error) =>
        this.setState({
          isLoaded: true,
          error: error,
        })
      );
  }
  deleteProduct(itemId) {
    //const { items } = this.state;
    alert(itemId);
    console.log(itemId);
    const apiUrl = "http://127.0.0.1:5000/lms/deleteEmployee";
    const formData = new FormData();
    formData.append("itemId", itemId);

    const options = {
      method: "POST",
      body: formData,
      headers: {
        Authorization:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOjEyMzR9.AkulsG22blITRUe4-iROKG25EIqT8H2-5HXLT93nQXc",
      },
    };

    fetch(apiUrl, options)
      .then((res) => res.json())
      .then(
        (result) => {
          // this.setState({
          //   response: result,
          //   items: items.filter((item) => item.id !== itemId),
          // });
          console.log(result);
        },
        (error) => {
          this.setState({ error });
        }
      );
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return (
        <div>
          <HourglassEmptyIcon />
        </div>
      );
    } else {
      console.log(this.state);
      return (
        <div>
          {/* {items
            ? items.map((item) => (
                <li key={item.qci_id}>
                  {item.email}
                  {item.name}
                  {item.dob}
                  {item.designation}
                  {item.gender}
                </li>
              ))
            : "Something went wrong"} */}
          <TableContainer component={Paper}>
            <Table className="table" aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>QCI_ID</TableCell>
                  <TableCell align="right">EMAIL</TableCell>
                  <TableCell align="right">NAME</TableCell>
                  <TableCell align="right">DESIGNATION</TableCell>
                  <TableCell align="right">GENDER</TableCell>
                  <TableCell align="right">TYPE-OF-EMPLOYEE</TableCell>
                  <TableCell align="right">BOARD</TableCell>
                  <TableCell align="right">bal_cl</TableCell>
                  <TableCell align="right">bal_ml</TableCell>
                  <TableCell align="right">bal_pl</TableCell>
                  <TableCell align="right">bal_sl</TableCell>
                  <TableCell align="right">bal_ptl</TableCell>
                  <TableCell align="right">bal_eol</TableCell>
                  <TableCell align="right">Activity</TableCell>

                  {/* <TableCell align="right">password</TableCell> */}
                </TableRow>
              </TableHead>
              <TableBody>
                {items.map((row) => (
                  <TableRow key={row.qci_id}>
                    <TableCell align="right">{row.qci_id}</TableCell>
                    <TableCell align="right">{row.email}</TableCell>
                    <TableCell align="right">{row.name}</TableCell>
                    <TableCell align="right">{row.designation}</TableCell>
                    <TableCell align="right">{row.gender}</TableCell>
                    <TableCell align="right">{row.type_of_employee}</TableCell>
                    <TableCell align="right">{row.board}</TableCell>
                    <TableCell align="right">{row.bal_cl}</TableCell>
                    <TableCell align="right">{row.bal_sl}</TableCell>
                    <TableCell align="right">{row.bal_ml}</TableCell>
                    <TableCell align="right">{row.bal_pl}</TableCell>
                    <TableCell align="right">{row.bal_ptl}</TableCell>
                    <TableCell align="right">{row.bal_eol}</TableCell>
                    {/* <TableCell align="right">{row.password}</TableCell> */}
                    <TableCell>
                      <EditIcon /> &nbsp;
                      <DeleteIcon
                        onClick={() => this.deleteProduct(row.qci_id)}
                      />
                      {/* <Button variant="info">Edit</Button>
                      &nbsp;
                      <Button
                        variant="danger"
                        onClick={() => this.deleteProduct(row.qci_id)}
                      >
                        Delete
                      </Button> */}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      );
    }
  }
}

export default EmployeeDetails;
