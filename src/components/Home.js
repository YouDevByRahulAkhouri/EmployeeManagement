import React from "react";
import "./Home.css";
import { withRouter } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Dashboard</h1>
      </div>
    );
  }
}
export default withRouter(Home);
