import React, { useContext } from "react";
import { UserConsumer, UserContext } from "./Abc_1";
import { User2Consumer, User2Context } from "./Abc_1";

function Abc4(props) {
  const user = useContext(UserContext);
  const employee = useContext(User2Context);

  console.log(props);
  return (
    <div>
      <p>{user}</p>
      <p>{employee.name}</p>
      <p>{employee.designation}</p>
    </div>
    ////////////////------old way----///////
    // <User2Consumer>
    //   {() => {
    //     return (
    //       <UserConsumer>
    //         {(name) => {
    //           console.log(name);
    //           return (
    //             <div>
    //               <h1>ABC3</h1>
    //               {/* {props.myName3} */}
    //               <button
    //               // onClick={() => {
    //               //   // props.setName("Menaka");
    //               // }}
    //               >
    //                 Click
    //               </button>
    //             </div>
    //           );
    //         }}
    //       </UserConsumer>
    //     );
    //   }}
    // </User2Consumer>
  );
}

export default Abc4;
