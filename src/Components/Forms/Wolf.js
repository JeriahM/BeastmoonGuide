import { Body, Header, pageStyle } from "../Styles/PageStyling";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Cards, Wrapper, Pic, Level, School, Button, ButtonActive, ButtonB, ButtonBActive, BackButton} from "../Styles/FormStyles";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import getFormInfo from "../../Service/Forms/FormInfo";
import getFormImages from "../../Service/Forms/FormImages";
import getFormSchools from "../../Service/Forms/FormSchools";

const Wolf = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const tier = location.state.tier;
  const beast = location.state.form;
  const school = location.state.school;
  var cards = [];
  const [form, setForm] = useState([]);
  useEffect(() => {
     getFormInfo(beast, school).then((form) => {
        setForm(form);
     });
  }, [beast, school]);
  const [formImages, setFormImages] = useState([]);
  useEffect(() => {
     getFormImages(beast, school).then((images) => {
        setFormImages(images);
     });
  }, [beast, school]);
  const [formSchools, setFormSchools] = useState([]);
  useEffect(() => {
     getFormSchools(beast).then((form) => {
        setFormSchools(form);
     });
  }, [beast]);
  switch(tier){
     case 1:
        cards = form?.tier1;
        break;
     case 2:
        cards = form?.tier2;
        break;
     case 3:
        cards = form?.tier3;
        break;
     case 4:
        cards = form?.tier4;
        break;
     case 5:
        cards = form?.tier5;
        break;
     default:
        break;
  };
  var description = form?.descriptionForm;
  const onHoverHandler = (e) => {
     e.preventDefault();
     var pic = document.getElementById("pic");
     var text = document.getElementById("formDescription");
     switch(e.target.alt){
        case "C1":
           pic.src = formImages?.image1Full;
           text.innerHTML = form?.description1;
           break;
        case "C2":
           pic.src = formImages?.image2Full;
           text.innerHTML = form?.description2;
           break;
        case "C3":
           pic.src = formImages?.image3Full;
           text.innerHTML = form?.description3;
           break;
        case "C4":
           pic.src = formImages?.image4Full;
           text.innerHTML = form?.description4;
           break;
        case "C5":
           pic.src = formImages?.image5Full;
           text.innerHTML = form?.description5;
           break;
        case "C6":
           pic.src = formImages?.image6Full;
           text.innerHTML = form?.description6;
           break;
        case "C7":
           pic.src = formImages?.image7Full;
           text.innerHTML = form?.description7;
           break;
        case "C8":
           pic.src = formImages?.image8Full;
           text.innerHTML = form?.description8;
           break;
        case "C9":
           pic.src = formImages?.image9Full;
           text.innerHTML = form?.description9;
           break;
        case "C10":
           pic.src = formImages?.image10Full;
           text.innerHTML = form?.description10;
           break;
        default:
           pic.src = formImages?.form;
           text.innerHTML = form?.descriptionForm;
           break;
     }
  }
  const onLeaveHandler = (e) => {
     e.preventDefault();
     document.getElementById("pic").src = formImages?.form;
     document.getElementById("formDescription").innerHTML = form?.descriptionForm;
  }
  const changeTierHandler = (e) => {
     e.preventDefault();
     var formState = {tier: parseInt(e.target.innerHTML), school: school, form: beast};
     var link = "/Beastmoon-Forms/" + beast + "_Warrior";
     navigate(link, {state:formState});
  }
  const changeSchoolHandler = (e) => {
     e.preventDefault();
     var formState = {tier: 1, school: e.target.innerHTML, form: beast};
     var link = "/Beastmoon-Forms/" + beast + "_Warrior";
     navigate(link, {state:formState});
  }
  return (
     <HelmetProvider>
        <Body>
           <Helmet>
                 <style>{pageStyle("221,161,94", "#582f0e")}</style>
           </Helmet>
           <Header>
              <h1>{form?.name}</h1>
           </Header>
           <Wrapper>
              <Level>
                 <h2>Tier</h2>
                 {tier === 1 ? 
                    <><ButtonActive onClick={changeTierHandler}>1</ButtonActive><br/></>
                 : 
                    <><Button onClick={changeTierHandler}>1</Button><br/></>}
                 {tier === 2 ? 
                    <><ButtonBActive onClick={changeTierHandler}>2</ButtonBActive><br/></>
                 : 
                    <><ButtonB onClick={changeTierHandler}>2</ButtonB><br/></>}
                 {tier === 3 ? 
                    <><ButtonActive onClick={changeTierHandler}>3</ButtonActive><br/></>
                 : 
                    <><Button onClick={changeTierHandler}>3</Button><br/></>}
                 {tier === 4 ? 
                    <><ButtonBActive onClick={changeTierHandler}>4</ButtonBActive><br/></>
                 : 
                    <><ButtonB onClick={changeTierHandler}>4</ButtonB><br/></>}
                 {tier === 5 ? 
                    <><ButtonActive onClick={changeTierHandler}>5</ButtonActive><br/></>
                 : 
                    <><Button onClick={changeTierHandler}>5</Button><br/></>}
              </Level>
              <Cards>
                 {form?.tier1 && cards.length > 0 && (
                    <>
                       {cards.map(function(card){
                          var cardDes;
                          var image;
                          switch(card){
                             case 1:
                                cardDes = "C1";
                                image = formImages?.image1;
                                break;
                             case 2:
                                cardDes = "C2";
                                image = formImages?.image2;
                                break;
                             case 3:
                                cardDes = "C3";
                                image = formImages?.image3;
                                break;
                             case 4:
                                cardDes = "C4";
                                image = formImages?.image4;
                                break;
                             case 5:
                                cardDes = "C5";
                                image = formImages?.image5;
                                break;
                             case 6:
                                cardDes = "C6";
                                image = formImages?.image6;
                                break;
                             case 7:
                                cardDes = "C7";
                                image = formImages?.image7;
                                break;
                             case 8:
                                cardDes = "C8";
                                image = formImages?.image8;
                                break;
                             case 9:
                                cardDes = "C9";
                                image = formImages?.image9;
                                break;
                             case 10:
                                cardDes = "C10";
                                image = formImages?.image10;
                                break;
                             default:
                                cardDes = "form";
                                image = formImages?.form;
                                break;
                          }
                          return (<li><img src={image} onMouseOver={onHoverHandler} onMouseLeave={onLeaveHandler} alt={cardDes}/></li>)
                       })}
                    </>
                 )}
              </Cards>
              <Pic>
                 <img id="pic" src={formImages?.form} alt={beast}/>
              </Pic>
              <School>
                 <h2>School</h2> 
                 {formSchools?.length && (
                    <>
                       {formSchools.map(function(schoolType){
                          for(var i = 0; i < formSchools.length; i++){
                             if(formSchools[i] === schoolType && (i % 2 === 0)){ 
                                if(schoolType === school)
                                   return (<><ButtonActive onClick={changeSchoolHandler}>{schoolType}</ButtonActive><br/></>);
                                else
                                   return (<><Button onClick={changeSchoolHandler}>{schoolType}</Button><br/></>);
                             }
                             else if(formSchools[i] === schoolType && (i % 2 === 1)){ 
                                if(schoolType === school)
                                   return (<><ButtonBActive onClick={changeSchoolHandler}>{schoolType}</ButtonBActive><br/></>);
                                else
                                   return (<><ButtonB onClick={changeSchoolHandler}>{schoolType}</ButtonB><br/></>);
                             }
                          }
                          return <></>;
                       })}
                    </>
                 )}
              </School> 
           </Wrapper>
           <div><h3 id="formDescription">{description}</h3></div> <br/>
           <Link to="/Beastmoon-Forms">
              <BackButton>Back</BackButton>
           </Link>
        </Body>
     </HelmetProvider>);
 };

 export default Wolf;