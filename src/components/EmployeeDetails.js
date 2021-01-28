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
    fetch(" http://127.0.0.1:5000/lms/employeeDetails")
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
