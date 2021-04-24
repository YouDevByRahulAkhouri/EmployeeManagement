// class  UserCheck   {
//     constructor(){
//         this.valid = false;
//     }

//     login = (cb) =>{
//         this.valid = true;
//         cb();
//     }

//     isValid = () => {
//         return this.valid;
//     }

// }

// export default new UserCheck();
import Login from './Login';

import React, { Component } from "react";

  class UserCheck extends Component {
  constructor() {
    this.valid = false;
  }

  login = (cb) => {
    this.valid = true;
    cb();
  };

  isValid = () => {
    return this.valid;
  };
  render() {
    return <div></div>;
  }
}

export default  UserCheck;
