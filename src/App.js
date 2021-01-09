import React from "react";
//import LoginForm from "./components/LoginForm";<LoginForm />
import AdminForm from "./components/AdminForm";
import LoginForm from "./components/LoginForm";
import Home from "./components/Home";
import {
  BrowserRouter as Redirect,
  Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/adminform">
          <AdminForm />
        </Route>
        <Route path="/loginadmin">
          <LoginForm />
        </Route>
        <Switch>
          <Redirect from="/loginadmin" to="/homepage" />
          <Route path="/homepage">
            <Home />
          </Route>
        </Switch>
        {/* <Route path="/homepage">
          <Redirect to="/homepage" />
          <Home />
        </Route> */}
      </Router>
      <AdminForm />
    </div>
  );
}

export default App;
