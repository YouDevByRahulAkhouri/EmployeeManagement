import React from "react";
import UserConsumer from "./Abc_1";

function Abc4(props) {
  console.log(props);
  return (
    <UserConsumer>
      {(name) => {
        console.log(name);
        return (
          <div>
            <h1>ABC3</h1>
            {/* {props.myName3} */}
            <button
            // onClick={() => {
            //   // props.setName("Menaka");
            // }}
            >
              Click
            </button>
          </div>
        );
      }}
    </UserConsumer>
  );
}

export default Abc4;
