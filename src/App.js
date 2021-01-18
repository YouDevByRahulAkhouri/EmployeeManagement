import React from "react";
//import LoginForm from "./components/LoginForm";<LoginForm />
import AdminForm from "./components/AdminForm";
import LoginForm from "./components/LoginForm";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginNewForm from "./components/LoginNew";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <div className="App">
      <Router>
        <Route exact path="/loginnew">
          <LoginNewForm />
        </Route>
        <Route exact path="/">
          <AdminForm />
        </Route>
        <Route exact path="/loginadmin" component={LoginForm} />

        {/* <Redirect from="/loginadmin" to="/homepage" /> */}
        <Route path="/homepage">
          <Home />
        </Route>

        {/* <Route path="/homepage">
          <Redirect to="/homepage" />
          <Home />
        </Route> */}

        <ProtectedRoute
          path="/loginnew"
          component={LoginNewForm}
          isAuth={isAuth}
        />
      </Router>
    </div>
  );
}

export default App;
