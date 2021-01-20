import React from "react";
import "./Home.css";
import { Redirect } from "react-router-dom";
import { withRouter } from "react-router-dom";
import HomePage from "./Menu/HomePage";
import About from "./Menu/About";
import AddEmployees from "./Menu/AddEmployees";

//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faHome } from "@fortawesome/free-solid-svg-icons";
//const element = <FontAwesomeIcon icon={faHome} />;
import { Switch, Route, Link } from "react-router-dom";

class Home extends React.Component {
  constructor() {
    super();
    this.state = { navigate: false };
    this.logout = this.logout.bind(this);
  }

  logout = function () {
    localStorage.removeItem("token");
    return this.setState({ navigate: true });
  };
  render() {
    const { path } = this.props.match;

    const { navigate } = this.state;
    if (navigate) {
      return <Redirect to="/loginadmin" push={true} />;
    }
    return (
      <div>
        <div className="topnav">
          <div className="links">
            <Link to={`/home`} className="link">
              Home
            </Link>
            <Link to={`/about`} className="link">
              About
            </Link>
            <Link to={`/add-employees`} className="link">
              Add Employees
            </Link>
          </div>

          <button onClick={this.logout}>Logout</button>
        </div>
        <div className="tabs">
          <Switch>
            <Route path={`${path}/home`} exact component={HomePage} />
            <Route path={`${path}/about`} component={About} />
            <Route path={`${path}/add-employees`} component={AddEmployees} />
          </Switch>
        </div>
      </div>
    );
  }
}
export default withRouter(Home);
