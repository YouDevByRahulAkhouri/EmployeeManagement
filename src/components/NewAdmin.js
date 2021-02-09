// import Grid from "@material-ui/core/Grid";
// import Typography from "@material-ui/core/Typography";
// import TextField from "@material-ui/core/TextField";
// import Checkbox from "@material-ui/core/Checkbox";
// import InputLabel from "@material-ui/core/InputLabel";
// import MenuItem from "@material-ui/core/MenuItem";
// import FormHelperText from "@material-ui/core/FormHelperText";
// //import Form from "@material-ui/core/Form";
// import Select from "@material-ui/core/Select";

// class EmployeeDetails extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       error: null,
//       isLoaded: false,
//       items: [],
//       openModal: false,
//     };
//   }

//   componentDidMount() {
//     const apiUrl = " http://127.0.0.1:5000/lms/employeeDetails";
//     //fetch(" http://127.0.0.1:5000/lms/employeeDetails")
//     fetch(apiUrl, {
//       method: "GET",
//       headers: {
//         Authorization:
//           "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOjEyMzR9.AkulsG22blITRUe4-iROKG25EIqT8H2-5HXLT93nQXc",
//       },
//     })
//       .then((res) => res.json())
//       .then((result) => {
//         console.log(result);
//         this.setState({
//           isLoaded: true,
//           items: result.data,
//         });
//       })
//       .catch((error) =>
//         this.setState({
//           isLoaded: true,
//           error: error,
//         })
//       );
//   }
//   deleteEmployee(itemId) {
//     const { items } = this.state;
//     //alert(itemId);
//     console.log(itemId);
//     const apiUrl = "http://127.0.0.1:5000/lms/deleteEmployee";
//     // const payload = new FormData();
//     // payload.append("itemId", itemId);
//     const payload = { qci_id: itemId };

//     const options = {
//       method: "POST",
//       body: JSON.stringify(payload),
//       headers: {
//         Authorization:
//           "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOjEyMzR9.AkulsG22blITRUe4-iROKG25EIqT8H2-5HXLT93nQXc",
//       },
//     };

//     fetch(apiUrl, options)
//       .then((res) => res.json())
//       .then(
//         (result) => {
//           this.setState({
//             response: result,
//             items: items.filter((row) => row.qci_id !== itemId),
//           });
//           console.log(result);
//         },
//         (error) => {
//           this.setState({ error });
//         }
//       );
//   }
//   handelModal = () => {
//     this.setState({ openModal: true });
//   };

//   render() {
//     const { error, isLoaded, items } = this.state;

//     if (error) {
//       return <div>Error: {error.message}</div>;
//     } else if (!isLoaded) {
//       return (
//         <div>
//           <HourglassEmptyIcon />
//         </div>
//       );
//     } else {
//       console.log(this.state);
//       return (
//         <div>
//           {this.state.success ? (
//             <Snackbar
//               open={this.state.open}
//               autoHideDuration={3000}
//               onClose={this.deleteEmployee}
//               anchorOrigin={{
//                 vertical: "top",
//                 horizontal: "center",
//               }}
//             >
//               <Alert onClose={this.deleteEmployee} severity="success">
//                 Employee deleted successfully!!!!
//               </Alert>
//             </Snackbar>
//           ) : (
//             <Snackbar
//               // open={this.state.open}
//               autoHideDuration={3000}
//               onClose={this.deleteEmployee}
//               anchorOrigin={{
//                 vertical: "top",
//                 horizontal: "center",
//               }}
//             >
//               <Alert onClose={this.deleteEmployee} severity="error">
//                 {this.state.message}
//               </Alert>
//             </Snackbar>
//           )}
//           {/* {items
//             ? items.map((item) => (
//                 <li key={item.qci_id}>
//                   {item.email}
//                   {item.name}
//                   {item.dob}
//                   {item.designation}
//                   {item.gender}
//                 </li>
//               ))
//             : "Something went wrong"} */}
//           <TableContainer component={Paper}>
//             <Table className="table" aria-label="simple table">
//               <TableHead>
//                 <TableRow>
//                   <TableCell>QCI_ID</TableCell>
//                   <TableCell align="right">EMAIL</TableCell>
//                   <TableCell align="right">NAME</TableCell>
//                   <TableCell align="right">DESIGNATION</TableCell>
//                   <TableCell align="right">GENDER</TableCell>
//                   <TableCell align="right">TYPE-OF-EMPLOYEE</TableCell>
//                   <TableCell align="right">BOARD</TableCell>
//                   <TableCell align="right">bal_cl</TableCell>
//                   <TableCell align="right">bal_ml</TableCell>
//                   <TableCell align="right">bal_pl</TableCell>
//                   <TableCell align="right">bal_sl</TableCell>
//                   <TableCell align="right">bal_ptl</TableCell>
//                   <TableCell align="right">bal_eol</TableCell>
//                   <TableCell align="right">Activity</TableCell>

//                   {/* <TableCell align="right">password</TableCell> */}
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {items.map((row) => (
//                   <TableRow key={row.qci_id}>
//                     <TableCell align="right">{row.qci_id}</TableCell>
//                     <TableCell align="right">{row.email}</TableCell>
//                     <TableCell align="right">{row.name}</TableCell>
//                     <TableCell align="right">{row.designation}</TableCell>
//                     <TableCell align="right">{row.gender}</TableCell>
//                     <TableCell align="right">{row.type_of_employee}</TableCell>
//                     <TableCell align="right">{row.board}</TableCell>
//                     <TableCell align="right">{row.bal_cl}</TableCell>
//                     <TableCell align="right">{row.bal_sl}</TableCell>
//                     <TableCell align="right">{row.bal_ml}</TableCell>
//                     <TableCell align="right">{row.bal_pl}</TableCell>
//                     <TableCell align="right">{row.bal_ptl}</TableCell>
//                     <TableCell align="right">{row.bal_eol}</TableCell>
//                     {/* <TableCell align="right">{row.password}</TableCell> */}
//                     <TableCell>
//                       <EditIcon onClick={this.handelModal} />

//                       <DeleteIcon
//                         onClick={() => this.deleteEmployee(row.qci_id)}
//                       />
//                       {/* <Button variant="info">Edit</Button>
//                       &nbsp;
//                       <Button
//                         variant="danger"
//                         onClick={() => this.deleteProduct(row.qci_id)}
//                       >
//                         Delete
//                       </Button> */}
//                     </TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </TableContainer>
//           <Modal
//             open={this.state.openModal}
//             //onClose={handleClose}
//             aria-labelledby="simple-modal-title"
//             aria-describedby="simple-modal-description"
//             background-color="white"
//             border="2px solid #000"
//             width="100px"
//             height="50px"
//           >
//             <h2>hello</h2>
//           </Modal>
//         </div>
//       );
//     }
//   }
// }

// export default EmployeeDetails;
