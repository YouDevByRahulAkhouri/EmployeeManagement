import React from "react";

class EmployeeDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount() {
    const apiUrl = " http://127.0.0.1:5000/lms/addEmployee";

    fetch(apiUrl, {
      method: "GET",
      headers: {
        Authorization:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOjEyMzR9.AkulsG22blITRUe4-iROKG25EIqT8H2-5HXLT93nQXc",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          isLoaded: true,
          items: result,
        });
      })
      .catch((error) =>
        this.setState({
          isLoaded: true,
          error: error,
        })
      );
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      console.log(this.state.items);
      return (
        <div>
          {items.map((item) => (
            <li key={item.qci_id}></li>
          ))}
        </div>
      );
    }
  }
}

export default EmployeeDetails;
