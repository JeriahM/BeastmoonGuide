import { Helmet, HelmetProvider } from 'react-helmet-async';
import { pageStyle, Body, Header } from "./Styles/PageStyling.js";

const Hunt = () => {
   return (
    <HelmetProvider>
      <Body>
        <Helmet>
          <style>{pageStyle("233,196,106", "#780000")}</style>
        </Helmet>
        <Header><h1>Beastmoon Hunt</h1></Header>
        <p>PvP</p>
      </Body>
    </HelmetProvider>);
 };

 export default Hunt;