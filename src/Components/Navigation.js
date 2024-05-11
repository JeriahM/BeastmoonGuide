import { Link } from "react-router-dom";

const Navigation = () => {

   return (
      <div id="navigation">
         <ul>
            <li><Link to="/"> Home Page</Link></li>
            <li><Link to="/Profile"> Profile</Link></li>
            <li><Link to="/Login"> Login</Link></li>
         </ul>
      </div>
   );
 };

 export default Navigation;