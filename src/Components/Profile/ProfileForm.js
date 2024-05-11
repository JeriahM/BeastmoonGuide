import React from "react";
import { useNavigate } from "react-router-dom";
/* import { logoutUser } from "../../Services/Users";
import Parse from "parse"; */

const ProfileForm = ({ handler }) => {
   const navigate = useNavigate();
   const onSubmitHandler = (e) => {
      e.preventDefault();
      handler(false);
      navigate("/LogIn");
      /* logoutUser().then(() => {
         handler(false);
         navigate("/LogIn");
      }); */
   };
   return (
      <div>
         <hr/>
         <form onSubmit={onSubmitHandler}>
         <div>
            <button type="submit" onSubmit={onSubmitHandler}>
               Logout
            </button>
         </div>
         </form>
      </div>
   );
};

export default ProfileForm;
