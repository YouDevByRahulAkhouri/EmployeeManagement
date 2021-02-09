import React, { useState, useEffect } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import HourglassEmptyIcon from "@material-ui/icons/HourglassEmpty";
import Alert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";
import AddEmployees from "./Menu/AddEmployees";
import Modal from "@material-ui/core/Modal";
import MenuItem from "@material-ui/core/MenuItem";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import EditEmployee from "./EditEmployee";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}
const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 500,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(3, 3, 3, 3),
  },
}));

function EmployeeDetails() {
  const [items, setItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [editing, setEditing] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    console.log("useEffect");
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
        // this.setState({
        //   isLoaded: true,
        //   items: result.data,
        // });
        const items = result.data;
        setItems(items);
        setIsLoaded(true);
      })
      .catch((error) => setIsLoaded(true), setError(error));
  }, []);

  const deleteEmployee = (itemId) => {
    const { items } = this.state;
    //alert(itemId);
    console.log(itemId);
    const apiUrl = "http://127.0.0.1:5000/lms/deleteEmployee";
    // const payload = new FormData();
    // payload.append("itemId", itemId);
    const payload = { qci_id: itemId };

    const options = {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        Authorization:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOjEyMzR9.AkulsG22blITRUe4-iROKG25EIqT8H2-5HXLT93nQXc",
      },
    };

    fetch(apiUrl, options)
      .then((res) => res.json())
      .then(
        (result) => {
          //   this.setState({
          //     response: result,
          //     items: items.filter((row) => row.qci_id !== itemId),
          //   });
          console.log(result);
        },
        (error) => {
          //   this.setState({ error });
        }
      );
  };

  return (
    <div>
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
                  <EditIcon onClick={handleOpen} />
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="edit"
                    aria-describedby="edit-employee details"
                  >
                    <EditEmployee />
                  </Modal>

                  <DeleteIcon onClick={() => deleteEmployee(row.qci_id)} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default EmployeeDetails;
