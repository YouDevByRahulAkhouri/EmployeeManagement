import Login from "./Login";
import Home from "./Home";
import { Authenticate } from "./Authenticate";
import EmpDetail from "./EmpDetail";


import { Switch, Route, Redirect } from "react-router-dom";

function App() {
  
  function xyz(props,Component) {
    const Token = localStorage.getItem("Token");
    console.log(props);
    return Token ? <Component  /> : <Redirect to="/" />;
  }

  const PrivateRoute = (abc) => {
    let { component: Component, ...rest } = abc;
    console.log(rest);
    console.log(Component);
    return <Route path={rest.path} exact={rest.exact} render={(props)=>xyz(props, Component)} />;
  };

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login} />
        <PrivateRoute exact path="/Home" component={Home} />
        <PrivateRoute exact path="/EmpDetail" component={EmpDetail} />
      </Switch>
    </div>
  );
}

export default App;
        //<Route path="/Home/:emp" component={empDetail} />
