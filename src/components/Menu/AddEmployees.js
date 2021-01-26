import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
//import Form from "@material-ui/core/Form";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";

class Addemployees extends React.Component {
  constructor(props) {
    super(props);
    //console.log(props);
    this.state = {
      fields: {
        email: "",
        firstName: "",
        lastName: "",
        password: "",
        gender: "",
        board: "",
        designation: "",
        type_of_employee: "",
        bal_cl: "",
        bal_sl: "",
        bal_pl: "",
        bal_ml: "",
        bal_ptl: "",
        bal_eol: "",
      },

      errors: {
        email: "",
        firstName: "",
        lastName: "",
        password: "",
        gender: "",
        board: "",
        designation: "",
        type_of_employee: "",
        bal_cl: "",
        bal_sl: "",
        bal_pl: "",
        bal_ml: "",
        bal_ptl: "",
        bal_eol: "",
      },
    };
  }
  handleValidation() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    //FirstName
    if (!fields["firstName"]) {
      formIsValid = false;
      errors["firstName"] = "Cannot be empty";
    }

    if (typeof fields["firstName"] !== "undefined") {
      if (!fields["firstName"].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors["firstName"] = "Only letters";
      }
    }
    //lastName
    if (!fields["lastName"]) {
      formIsValid = false;
      errors["lastName"] = "Cannot be empty";
    }

    if (typeof fields["lastName"] !== "undefined") {
      if (!fields["lastName"].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors["lastName"] = "Only letters";
      }
    }

    //Email
    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "Cannot be empty";
    }

    if (typeof fields["email"] !== "undefined") {
      let lastAtPos = fields["email"].lastIndexOf("@");
      let lastDotPos = fields["email"].lastIndexOf(".");

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          fields["email"].indexOf("@@") === -1 &&
          lastDotPos > 2 &&
          fields["email"].length - lastDotPos > 2
        )
      ) {
        formIsValid = false;
        errors["email"] = "Email is not valid";
      }
    }

    this.setState({ errors: errors });
    return formIsValid;
  }
  contactSubmit(e) {
    e.preventDefault();

    if (this.handleValidation()) {
      alert("Form submitted");
    } else {
      alert("Form has errors.");
    }
  }

  handleChange(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  }
  render() {
    return (
      <div className="container">
        <form onSubmit={this.contactSubmit.bind(this)}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h5" gutterBottom>
                Emplyoee Personal Details
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="firstName"
                name="firstName"
                label="First name"
                fullWidth
                autoComplete="given-name"
                onChange={this.handleChange.bind(this, "firstName")}
                value={this.state.fields["firstName"]}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="lastName"
                name="lastName"
                label="Last name"
                fullWidth
                autoComplete="family-name"
                onChange={this.handleChange.bind(this, "lastName")}
                value={this.state.fields["lastName"]}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                required
                id="email"
                name="email"
                label="Email "
                fullWidth
                autoComplete="email"
                onChange={this.handleChange.bind(this, "email")}
                value={this.state.fields["email"]}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                id="date"
                label="DOB"
                type="date"
                defaultValue="0000-00-00"
                className="DOB"
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid fullWidth item xs={12} sm={4}>
              <TextField
                id="select"
                name="gender"
                label="Gender"
                fullWidth
                select
              >
                <MenuItem value="Men">Men</MenuItem>
                <MenuItem value="women">Women</MenuItem>
                <MenuItem value="others">Others</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="address1"
                name="address1"
                label="Address line 1"
                fullWidth
                autoComplete="shipping address-line1"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="address2"
                name="address2"
                label="Address line 2"
                fullWidth
                autoComplete="shipping address-line2"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="city"
                name="city"
                label="City"
                fullWidth
                autoComplete="shipping address-level2"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="state"
                name="state"
                label="State/Province/Region"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="zip"
                name="zip"
                label="Zip / Postal code"
                fullWidth
                autoComplete="shipping postal-code"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="country"
                name="country"
                label="Country"
                fullWidth
                autoComplete="shipping country"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                required
                id="board"
                name="board"
                label="board"
                fullWidth
                autoComplete="shipping country"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                required
                id="designation"
                name="designation"
                label="designation"
                fullWidth
                autoComplete="shipping country"
              />
            </Grid>
            <Grid fullWidth item xs={12} sm={4}>
              <TextField
                id="select"
                label="Type of Employee"
                value="20"
                fullWidth
                select
              >
                <MenuItem value="regular">Regular</MenuItem>
                <MenuItem value="contract">Contract</MenuItem>
                <MenuItem value="professional">Professional</MenuItem>
              </TextField>
              {/* <InputLabel fullWidth>Type of employee</InputLabel>
            <Select

            // labelId="demo-simple-select-label"
            // id="demo-simple-select"
            // value={age}
            // onChange={handleChange}
            >
              <MenuItem fullWidth value="Men">
                Regular
              </MenuItem>
              <MenuItem fullWidth value="women">
                Contract
              </MenuItem>
              <MenuItem fullWidth value="others">
                Professional
              </MenuItem>
            </Select> */}
            </Grid>

            <Grid item xs={12} sm={4}>
              <TextField
                required
                id="bal_cl"
                name="bal_cl"
                label="CL"
                fullWidth
                autoComplete="shipping country"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                required
                id="bal_sl"
                name="bal_sl"
                label="SL"
                fullWidth
                autoComplete="shipping country"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                required
                id="bal_pl"
                name="bal_pl"
                label="PL"
                fullWidth
                autoComplete="shipping country"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                required
                id="bal_ml"
                name="bal_ml"
                label="ML"
                fullWidth
                autoComplete="shipping country"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                required
                id="bal_ptl"
                name="bal_ptl"
                label="PT1"
                fullWidth
                autoComplete="shipping country"
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <TextField
                required
                id="bal_eol"
                name="bal_eol"
                label="EOL"
                fullWidth
                autoComplete="shipping country"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="password"
                name="password"
                label="password"
                fullWidth
                autoComplete="password"
              />
            </Grid>
          </Grid>
        </form>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className="submit"
          onClick={this.handleSubmitClick}
        >
          Sign Up
        </Button>
      </div>
    );
  }
}

export default Addemployees;
