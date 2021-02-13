import React, { useState, useEffect } from "react";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import AddDetail from "./AddDetail";
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
export default function EditEmployee(props) {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [data, setData] = useState({
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
  });

  console.log(props);
  const handleChange = (e) => {
    const { name, value } = e.target;
  };

  useEffect(() => {
    setData(props.edit);
  }, [props.edit]);
  console.log(data);

  const editEmployee = (itemId) => {
    //const { items } = this.state;
    //alert(itemId);
    //console.log(itemId);
    const apiUrl = "http://127.0.0.1:5000/lms/editEmployeeDetails";
    // const payload = new FormData();
    // payload.append("itemId", itemId);
    const payload = { data };
    console.log(payload);

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
      <div style={modalStyle} className={classes.paper}>
        <h2 id="edit">edit details</h2>
        <div>
          <TextField
            required
            label="Name"
            value={data.name}
            onChange={handleChange}
          />
          <TextField
            required
            label="qci_id"
            value={data.qci_id}
            onChange={handleChange}
          />
          <TextField
            required
            label="email"
            value={data.email}
            onChange={handleChange}
          />
          <TextField
            id="select"
            label="Gender"
            value={data.gender}
            select
            fullWidth
            onChange={handleChange}
          >
            <MenuItem value="Men">Men</MenuItem>
            <MenuItem value="women">Women</MenuItem>
            <MenuItem value="others">Others</MenuItem>
          </TextField>
          <TextField
            required
            label="board"
            value={data.board}
            onChange={handleChange}
          />
          <TextField
            required
            label="designation"
            value={data.designation}
            onChange={handleChange}
          />
          <TextField
            onChange={handleChange}
            id="select"
            label="type_of_employee"
            value={data.type_of_employee}
            select
            fullWidth
          >
            <MenuItem value="regular">Regular</MenuItem>
            <MenuItem value="contract">Contract</MenuItem>
            <MenuItem value="professional">Professional</MenuItem>
          </TextField>
          <TextField
            required
            label="bal_cl"
            value={data.bal_cl}
            onChange={handleChange}
          />
          <TextField
            required
            label="bal_sl"
            value={data.bal_sl}
            onChange={handleChange}
          />
          <TextField
            required
            label="bal_pl"
            value={data.bal_pl}
            onChange={handleChange}
          />
          <TextField
            required
            label="bal_ml"
            value={data.bal_ml}
            onChange={handleChange}
          />
          <TextField
            required
            label="bal_ptl"
            value={data.bal_ptl}
            onChange={handleChange}
          />
          <TextField
            required
            label="bal_eol"
            value={data.bal_eol}
            onChange={handleChange}
          />
          <TextField
            required
            value={data.password}
            label="Password"
            type="password"
            autoComplete="current-password"
            onChange={handleChange}
          />
        </div>
        <Button variant="info" onClick={() => props.handleClose()}>
          Cancel
        </Button>{" "}
        <Button variant="info" onClick={() => editEmployee()}>
          Save
        </Button>
      </div>

      <div>
        <AddDetail />
      </div>
    </div>
  );
}
