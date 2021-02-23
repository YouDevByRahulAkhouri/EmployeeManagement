import React from "react";
import Abc3 from "./Abc_3";

function Abc2(props) {
  console.log(props);
  return (
    <div>
      <h1>ABC1</h1>
      <Abc3 />
    </div>
  );
}

export default Abc2;
