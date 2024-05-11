import React, { useState } from "react";
import AuthForm from "./AuthForm.js";
import { Link, useNavigate, useLocation } from "react-router-dom";
/* import { createUser } from "../../Services/Users.js";
import Parse from "parse"; */


const Register = ({handler}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: ""
  });
  const onChangeHandler = (e) => {
    e.preventDefault();
    const { name, value: newValue } = e.target;
    setNewUser({ ...newUser, [name]: newValue });
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    handler(true);
    navigate("/Profile");
    /* createUser(newUser).then(() => {
      handler(true);
      navigate("/Profile");
    }); */
  };

  return (
    <div>
      <AuthForm
        user={newUser}
        isLogin={false}
        onChange={onChangeHandler}
        onSubmit={onSubmitHandler}
      />
      <Link to="/Login" state={location.state}>
        <button>
          Already have an account? Log In!
        </button>
      </Link>
    </div>
  );
};

export default Register;