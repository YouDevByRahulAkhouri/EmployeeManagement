import React, { useState } from "react";

import Abc2 from "./Abc_2";
export const UserContext = React.createContext();
console.log(UserContext);

export const User2Context = React.createContext();

export const User2Provider = UserContext.Provider;
export const User2Consumer = UserContext.Consumer;

export const UserProvider = UserContext.Provider;
export const UserConsumer = UserContext.Consumer;

function Abc1() {
  const [name, setName] = useState("Shermistha");
  const [emp, setEmp] = useState({ name: "Shreya", designation: "HR" });

  return (
    <User2Provider value={emp}>
      <UserProvider value={name}>
        <div className="App">
          {name}
          {/* <Abc2 myName={name} setName={setName} /> */}
          <Abc2 />
        </div>
      </UserProvider>
    </User2Provider>
  );
}

export default Abc1;
