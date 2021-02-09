import React, { useState } from "react";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";

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
export default function EditEmployee() {
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
  return (
    <div>
      <div style={modalStyle} className={classes.paper}>
        <h2 id="edit">edit details</h2>
        <div>
          <TextField required label="Name" value="name" />
          <TextField required label="qci_id" value="qci_id" />
          <TextField required label="email" value="email" />
          <TextField id="select" label="Gender" value="gender" select fullWidth>
            <MenuItem value="Men">Men</MenuItem>
            <MenuItem value="women">Women</MenuItem>
            <MenuItem value="others">Others</MenuItem>
          </TextField>
          <TextField required label="board" value="board" />
          <TextField required label="designation" value="designation" />
          <TextField
            id="select"
            label="type_of_employee"
            value="type_of_employee"
            select
            fullWidth
          >
            <MenuItem value="regular">Regular</MenuItem>
            <MenuItem value="contract">Contract</MenuItem>
            <MenuItem value="professional">Professional</MenuItem>
          </TextField>
          <TextField required label="bal_cl" value="bal_cl" />
          <TextField required label="bal_sl" value="bal_sl" />
          <TextField required label="bal_pl" value="bal_pl" />
          <TextField required label="bal_ml" value="bal_ml" />
          <TextField required label="bal_ptl" value="bal_ptl" />
          <TextField required label="bal_eol" value="bal_eol" />
          <TextField
            required
            value="password"
            label="Password"
            type="password"
            autoComplete="current-password"
          />
        </div>
        <Button variant="info">Cancel</Button>{" "}
        <Button variant="info">Save</Button>
      </div>
    </div>
  );
}
