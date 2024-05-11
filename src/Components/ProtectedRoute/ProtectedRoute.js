import React from "react";
//import { checkUser } from "../../Services/Users.js";
//import { Navigate } from "react-router-dom";

// You can pass props using the spread operator to throw them on an object if there are too many to break out
export const LogInRoute = ({ element: Component, param: Handler, ...rest }) => {
  /* if (checkUser()) {
    return <Component handler={Handler}/>;
  } else {
    return <Navigate to="/Login" replace/>;
  } */
  return <Component handler={Handler}/>;
};

export const LogOutRoute = ({ element: Component, param: Handler, ...rest }) => {
    /* if (!checkUser()) {
        return <Component handler={Handler}/>;
    } else {
      return <Navigate to="/Profile" replace/>;
    } */
    return <Component handler={Handler}/>;
};