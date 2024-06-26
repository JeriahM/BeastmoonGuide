import * as Form from "../Styles/BeastStyles.js";
import { pageStyle, Body, Header } from "../Styles/PageStyling.js";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from "react-router-dom";

const Beasts = () => {
   var krokState = {tier: 1, school: "Ice", form: "Krokomummy"};
   var wolfState = {tier: 1, school: "Ice", form: "Wolf"};
   var minoState = {tier: 1, school: "Fire", form: "Minotaur"};
   var pigState = {tier: 1, school: "Fire", form: "Pig"};
   var ratState = {tier: 1, school: "Fire", form: "Rat"};
   var dracState = {tier: 1, school: "Fire", form: "Draconian"};
   var clopsState = {tier: 1, school: "Fire", form: "Cyclops"};
   var colState = {tier: 1, school: "Fire", form: "Colossus"};
   var elfState = {tier: 1, school: "Fire", form: "Elf"};
   var fairyState = {tier: 1, school: "Fire", form: "Fairy"};
   return (
      <HelmetProvider>
         <Body>
            <Header><h1>Beastmoon Forms</h1></Header>
            <Form.FormWrapper>
               <Helmet>
                  <style>{pageStyle("221,161,94", "#582f0e")}</style>
               </Helmet>
               <Form.Colossus>
                  <Link to="/Beastmoon-Forms/Colossus" state={colState}>
                     <img src="/Images/Forms/Colossus.jpg" alt="Colossus Form" /><br/>
                     Colossus
                  </Link>
               </Form.Colossus>
               <Form.Cyclops>
                  <Link to="/Beastmoon-Forms/Cyclops" state={clopsState}> 
                  <img src="/Images/Forms/Cyclops.jpg" alt="Cyclops Form" /><br/>
                  Cyclops
                  </Link>
               </Form.Cyclops>
               <Form.Draconian>
                  <Link to="/Beastmoon-Forms/Draconian" state={dracState}> 
                  <img src="/Images/Forms/Draconian.jpg" alt="Draconian Form" /><br/>
                  Draconian
                  </Link>
               </Form.Draconian>
               <Form.Elf>
                  <Link to="/Beastmoon-Forms/Elf" state={elfState}> 
                  <img src="/Images/Forms/Elf.jpg" alt="Elf Form" /><br/>
                  Elf
                  </Link>
               </Form.Elf>
               <Form.Fairy>
                  <Link to="/Beastmoon-Forms/Fairy" state={fairyState}> 
                  <img src="/Images/Forms/Fairy.jpg" alt="Fairy Form" /><br/>
                  Fairy
                  </Link>
               </Form.Fairy>
               <Form.Krokomummy>
                  <Link to="/Beastmoon-Forms/Krokomummy" state={krokState}> 
                  <img src="/Images/Forms/Krokomummy.jpg" alt="Krokomummy Form" /><br/>
                  Krokomummy
                  </Link>
               </Form.Krokomummy>
               <Form.Minotaur>
                  <Link to="/Beastmoon-Forms/Minotaur" state={minoState}> 
                  <img src="/Images/Forms/Minotaur.jpg" alt="Minotaur Form" /><br/>
                  Minotaur
                  </Link>
               </Form.Minotaur>
               <Form.Pig>
                  <Link to="/Beastmoon-Forms/Ninja_Pig" state={pigState}>
                     <img src="/Images/Forms/Pig.jpg" alt="Pig Form" /><br/>
                     Pig
                  </Link>
               </Form.Pig>
               <Form.Rat>
                  <Link to="/Beastmoon-Forms/Rat_Thief" state={ratState}> 
                     <img src="/Images/Forms/Rat.jpg" alt="Rat Form" /><br/>
                     Rat
                  </Link>
               </Form.Rat>
               <Form.Wolf>
                  <Link to="/Beastmoon-Forms/Wolf_Warrior" state={wolfState}>
                     <img src="/Images/Forms/Wolf.jpg" alt="Wolf Form" /><br/>
                     Wolf
                  </Link>
               </Form.Wolf>
            </Form.FormWrapper>
         </Body>
      </HelmetProvider>);
 };

 export default Beasts;