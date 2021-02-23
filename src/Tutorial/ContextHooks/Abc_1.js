import React, { useState } from "react";

import Abc2 from "./Abc_2";
const UserContext = React.createContext();
console.log(UserContext);

export const UserProvider = UserContext.Provider;
export const UserConsumer = UserContext.Consumer;

function Abc1() {
  const [name, setName] = useState("Shermistha");

  return (
    <UserProvider value={name}>
      <div className="App">
        {name}
        {/* <Abc2 myName={name} setName={setName} /> */}
        <Abc2 />
      </div>
    </UserProvider>
  );
}

export default Abc1;
