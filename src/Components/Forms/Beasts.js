import * as Form from "./BeastStyles.js";
import { pageStyle, Body } from "../PageStyling.js";
import Colossus from "../Images/Colossus.jpg";
import Cyclops from "../Images/Cyclops.jpg";
import Draconian from "../Images/Draconian.jpg";
import Elf from "../Images/Elf.jpg";
import Fairy from "../Images/Fairy.jpg";
import Krokomummy from "../Images/Krokomummy.jpg";
import Minotaur from "../Images/Minotaur.jpg";
import Pig from "../Images/Pig.jpg";
import Rat from "../Images/Rat.jpg";
import Wolf from "../Images/Wolf.jpg";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from "react-router-dom";

const Beasts = () => {
   return (
      <HelmetProvider>
         <Body>
            <h1>Beastmoon Forms</h1>
            <Form.FormWrapper>
               <Helmet>
                  <style>{pageStyle("221,161,94", "#582f0e")}</style>
               </Helmet>
               <Form.Colossus>
                  <Link to="/Beastmoon-Forms/Colossus">
                     <img src={Colossus} alt="Colossus Form" /><br/>
                     Colossus
                  </Link>
               </Form.Colossus>
               <Form.Cyclops>
                  <Link to="/Beastmoon-Forms/Cyclops"> 
                  <img src={Cyclops} alt="Cyclops Form" /><br/>
                  Cyclops
                  </Link>
               </Form.Cyclops>
               <Form.Draconian>
                  <Link to="/Beastmoon-Forms/Draconian"> 
                  <img src={Draconian} alt="Draconian Form" /><br/>
                  Draconian
                  </Link>
               </Form.Draconian>
               <Form.Elf>
                  <Link to="/Beastmoon-Forms/Elf"> 
                  <img src={Elf} alt="Elf Form" /><br/>
                  Elf
                  </Link>
               </Form.Elf>
               <Form.Fairy>
                  <Link to="/Beastmoon-Forms/Fairy"> 
                  <img src={Fairy} alt="Fairy Form" /><br/>
                  Fairy
                  </Link>
               </Form.Fairy>
               <Form.Krokomummy>
                  <Link to="/Beastmoon-Forms/Krokomummy"> 
                  <img src={Krokomummy} alt="Krokomummy Form" /><br/>
                  Krokomummy
                  </Link>
               </Form.Krokomummy>
               <Form.Minotaur>
                  <Link to="/Beastmoon-Forms/Minotaur"> 
                  <img src={Minotaur} alt="Minotaur Form" /><br/>
                  Minotaur
                  </Link>
               </Form.Minotaur>
               <Form.Pig>
                  <Link to="/Beastmoon-Forms/Pig">
                     <img src={Pig} alt="Pig Form" /><br/>
                     Pig
                  </Link>
               </Form.Pig>
               <Form.Rat>
                  <Link to="/Beastmoon-Forms/Rat"> 
                     <img src={Rat} alt="Rat Form" /><br/>
                     Rat
                  </Link>
               </Form.Rat>
               <Form.Wolf>
                  <Link to="/Beastmoon-Forms/Wolf">
                     <img src={Wolf} alt="Wolf Form" /><br/>
                     Wolf
                  </Link>
               </Form.Wolf>
            </Form.FormWrapper>
         </Body>
      </HelmetProvider>);
 };

 export default Beasts;