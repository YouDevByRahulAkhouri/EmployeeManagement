import React from "react";

const AdminSignup = (props) => {
  console.log(props);
  return (
    <form  >
      <div>
        <h1> Employee registration</h1>
        <label htmlFor="email">Email :</label>
        <input
          type="text"
          name="email"
          placeholder="email"
          onChange={props.handleEmail}
        />
        <p>{props.email}</p>
        <label htmlFor="password">password:</label>
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={props.handleChange}
        />
      </div>
    </form>
  );
};

export default AdminSignup;
