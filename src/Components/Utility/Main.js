import * as Page from "./PageIndex.js";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { LogInRoute, LogOutRoute} from "../ProtectedRoute/ProtectedRoute.js";
import { useState } from "react";
 
 const Main = () => {
   const [user, setUser] = useState(false);
    return (
     <Router>
       <Page.Navigation user={user}/>
       <Routes>
         <Route path="/" element={<Page.Guide />} />
         <Route path="/Beastmoon-Hunt" element={<Page.Hunt/>} />
         <Route path="/Beastmoon-Mayhem" element={<Page.Mayhem/>} />
         <Route path="/Beastmoon-Forms" element={<Page.Beasts/>} />
         <Route path="/Beastmoon-Tips" element={<Page.Tips/>} />
         <Route path="/Beastmoon-Forms/Wolf_Warrior" element={<Page.Wolf/>} />
         <Route path="/Beastmoon-Forms/Ninja_Pig" element={<Page.Pig/>} />
         <Route path="/Beastmoon-Forms/Rat_Thief" element={<Page.Rat/>} />
         <Route path="/Beastmoon-Forms/Krokomummy" element={<Page.Krok/>} />
         <Route path="/Beastmoon-Forms/Minotaur" element={<Page.Minotaur/>} />
         <Route path="/Beastmoon-Forms/Draconian" element={<Page.Draconian/>} />
         <Route path="/Beastmoon-Forms/Colossus" element={<Page.Colossus/>} />
         <Route path="/Beastmoon-Forms/Cyclops" element={<Page.Cyclops/>} />
         <Route path="/Beastmoon-Forms/Elf" element={<Page.Elf/>} />
         <Route path="/Beastmoon-Forms/Fairy" element={<Page.Fairy/>} />
         <Route path="/Login" element={<LogOutRoute path="/Login" element={Page.LogIn} param={setUser} />} />
         <Route path="/Register" element={<LogOutRoute path="/Register" element={Page.Register} param={setUser}/>} />
         <Route path="/Profile" element={<LogInRoute path="/Profile" element={Page.Profile} param={setUser} />} />
         <Route path="*" element={<Navigate to="/" replace />} />
       </Routes>
     </Router>);
 };

 export default Main;