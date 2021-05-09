
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';


class AdminLogin extends Component {

     logOut = () => {
    localStorage.removeItem("Token");
    this.props.history.push("/");
  };
   EmpDetail = () => {
    const {history} = this.props;
     console.log(history);
    this.props.history.push("/EmpDetail");
  };

  render() {
    return (
      <div>
      <h1> Welcome to the Admin Login Page</h1>
      <button onClick={this.EmpDetail}>List of Employee</button>
      <button onClick={this.logOut}>logOut</button>
        
      </div>
    )
  }
}
export default withRouter(AdminLogin);


// import Reactfrom "react";
// import { useHistory } from "react-router-dom";
// export default function AdminLogin() {
//   const history = useHistory();

//   const logOut = () => {
//     localStorage.removeItem("Token");
//     history.push("/");
//   };
//   const EmpDetail = () => {
//     history.push("/EmpDetail");
//   };

//   return (
//     <div>
//       <h1> Welcome to the Admin Login Page</h1>
//       <button onClick={EmpDetail}>List of Employee</button>
//       <button onClick={logOut}>logOut</button>
//     </div>
//   );
// }
