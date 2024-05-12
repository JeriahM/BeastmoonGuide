import { Link } from "react-router-dom";

const Navigation = () => {

   return (
      <div id="navigation">
         <ul>
            <li><Link to="/"> Guide</Link></li>
            <li><Link to="/Beastmoon-Mayhem"> Mayhem</Link></li>
            <li><Link to="/Beastmoon-Hunt"> Hunt</Link></li>
            <li><Link to="/Profile"> Profile</Link></li>
            <li><Link to="/Login"> Login</Link></li>
         </ul>
      </div>
   );
 };

 export default Navigation;