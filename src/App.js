import React, { useState } from "react";
//import LoginForm from "./components/LoginForm";<LoginForm />
import AdminForm from "./components/AdminForm";
import LoginForm from "./components/LoginForm";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginNewForm from "./components/LoginNew";
import ProtectedRoute from "./components/ProtectedRoute";
import About from "./components/Menu/About";
import Addemployees from "./components/Menu/AddEmployees";
import NewAdmin from "./components/NewAdmin";
import EmployeeDetails from "./components/EmployeeDetails";
import EditEmployee from "./components/EditEmployee";
import Abc1 from "./Tutorial/ContextHooks/Abc_1";
import TotalEmployee from "./components/TotalEmployee";

//export const UserContext = React.creatContext();
//console.log(UserContext);

function App() {
  const [name, setName] = useState("Shermistha");

  return (
    <div className="App">
      {name}
      <Abc1 myName={name} setName={setName} />

      <Router>
        <Route exact path="/total-employee" component={TotalEmployee} />
        <Route exact path="/register-admin" component={AdminForm} />
        <Route exact path="/add-employee" component={Addemployees} />
        <Route exact path="/edit-employee" component={EditEmployee} />

        <Route exact path="/" component={LoginForm} />
        <Route exact path="/employee-details" component={EmployeeDetails} />
        <ProtectedRoute exact path="/homepage" component={Home} />

        {/* <ProtectedRoute exact path="/homepage/:id" component={Home} /> */}
      </Router>
    </div>
  );
}

export default App;
