import React, { useState } from "react";
import AuthForm from "./AuthForm.js";
import { Link, useNavigate, useLocation } from "react-router-dom";
/*import { loginUser } from "../../Services/Users.js";
import Parse from "parse";*/

const LogIn = ({handler}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState({
    email: "",
    password: ""
  });

  const onChangeHandler = (e) => {
    e.preventDefault();
    const { name, value: newValue } = e.target;

    setCurrentUser({
      ...currentUser,
      [name]: newValue
    });
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    handler(true);
    navigate("/Profile");
   /*  
    loginUser(currentUser).then(() => {
      handler(true);
      navigate("/Profile");
    }); */
  };

  return (
    <div>
      <AuthForm
        user={currentUser}
        isLogin={true}
        onChange={onChangeHandler}
        onSubmit={onSubmitHandler}
      />
      <Link to="/Register" state={location.state}>
        <button>
          Don't have an account? Register today!
        </button>
      </Link>
    </div>
  );
};

export default LogIn;