import * as Page from "./PageIndex.js";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { LogInRoute, LogOutRoute} from "./ProtectedRoute/ProtectedRoute.js";
import { useState } from "react";
 
 const Main = () => {
   const [user, setUser] = useState(false);
    return (
     <Router>
       <Page.Navigation key={user}/>
       <Routes>
         <Route path="/" element={<Page.Home />} />
         <Route path="/Login" element={<LogOutRoute path="/Login" element={Page.LogIn} param={setUser} />} />
         <Route path="/Register" element={<LogOutRoute path="/Register" element={Page.Register} param={setUser}/>} />
         <Route path="/Profile" element={<LogInRoute path="/Profile" element={Page.Profile} param={setUser} />} />
         <Route path="*" element={<Navigate to="/" replace />} />
       </Routes>
     </Router>);
 };

 export default Main;