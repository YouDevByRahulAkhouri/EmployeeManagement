import Login from "./Login";
import Home from "./Home";
import { Authenticate } from "./Authenticate";
import EmpDetail from "./EmpDetail";
import { Switch, Route, Redirect } from "react-router-dom";
import AdminLogin from "./AdminLogin";
import EditEmployee from "./components/Employee/EditEmployee";
import EditEmpRoute from "./components/Employee/EditEmpRoute";

function App() {
  
  function xyz(props,Component) {
    const Token = localStorage.getItem("Token");
    console.log(props);
    return Token ? <Component  /> : <Redirect to="/" />;
  }

  const PrivateRoute = (abc) => {
    let { component: Component, ...rest } = abc;
    console.log(abc);
    console.log(rest);
    console.log(Component);
    return <Route path={rest.path} exact={rest.exact} render={(props)=>xyz(props, Component)} />;
  };
   

 
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login} />
        <PrivateRoute exact path="/Home" component={Home} />
        <PrivateRoute exact path="/AdminLogin" component={AdminLogin} />
        <PrivateRoute exact path="/EmpDetail" component={EmpDetail}/>
        <PrivateRoute exact path="/EditEmployee" component={EditEmployee}/>
        <PrivateRoute exact path="/EditEmpRoute" component={EditEmpRoute}/>
      </Switch>
    </div>
  );
}

export default App;
