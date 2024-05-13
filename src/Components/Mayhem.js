import { Helmet, HelmetProvider } from 'react-helmet-async';
import { pageStyle, Body, Header } from "./Styles/PageStyling.js";

const Mayhem = () => {
   return (
    <HelmetProvider>
      <Body>
        <Helmet>
          <style>{pageStyle("2,48,71", "#3AC0E5")}</style>
        </Helmet>
        <Header><h1>Beastmoon Mayhem</h1></Header>
        <p>PvE</p>
      </Body>
    </HelmetProvider>);
 };

 export default Mayhem;