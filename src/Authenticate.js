import React from "react";
import { Route, Redirect } from "react-router-dom";
import UserCheck from "./UserCheck";

export const Authenticate = ({ component: Component }, ...rest) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        console.log(props);
        // if (UserCheck.isValid()) {
        //   return <Component {...props} />;
        // } else {
        //   return (
        //     <Redirect
        //       to={{
        //         pathname: "/",
        //         state: {
        //           from: props.location,
        //         },
        //       }}
        //     />
        //   );
        // }
      }}
    />
  );
};
