import React from "react";
import "./Home.css";
import { Redirect } from "react-router-dom";
import { withRouter } from "react-router-dom";

//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faHome } from "@fortawesome/free-solid-svg-icons";
//const element = <FontAwesomeIcon icon={faHome} />;

class Home extends React.Component {
  state = {
    navigate: false,
  };
  logout = () => {
    localStorage.clear("token");
    this.setState({ navigate: true });
  };
  render() {
    const { navigate } = this.state;
    if (navigate) {
      return <Redirect to="/loginpage" push={true} />;
    }
    return (
      <div>
        <div class="topnav">
          <a href="#home">
            <i class="fa fa-fw fa-home"></i>Home
          </a>
          <a href="#about">About</a>
          <a href="#news">Add Employees</a>
          <a href="#contact">Employees</a>
          <button onClick={this.logout}>Logout</button>
        </div>
      </div>
    );
  }
}
export default withRouter(Home);
