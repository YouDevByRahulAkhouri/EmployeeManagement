import React from "react";
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

function App() {
  //const [isAuth, setIsAuth] = useState(false);
  return (
    <div className="App">
      <Router>
        <NewAdmin />
        <Route exact path="/register-admin" component={AdminForm} />

        <Route exact path="/" component={LoginForm} />
        <Route exact path="/addemployee" component={Addemployees} />

        <ProtectedRoute exact path="/homepage" component={Home} />
        <ProtectedRoute exact path="/homepage/:id" component={Home} />
      </Router>
    </div>
  );
}

export default App;
