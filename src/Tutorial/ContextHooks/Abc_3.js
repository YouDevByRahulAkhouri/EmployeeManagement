import React from "react";
import User2Consumer from "./Abc_1";

function Abc3(props) {
  console.log(props);

  return (
    <User2Consumer>
      {(emp) => {
        return (
          <div>
            <p>{emp.name} Hello</p>
            <p>{emp.designation}</p>
          </div>
        );
      }}
    </User2Consumer>
  );
}

export default Abc3;
