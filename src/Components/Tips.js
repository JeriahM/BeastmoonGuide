import { Helmet, HelmetProvider } from 'react-helmet-async';
import { pageStyle, Body, Header } from "./Styles/PageStyling.js";

const Tips = () => {
   return (
    <HelmetProvider>
      <Body>
        <Helmet>
          <style>{pageStyle("233,196,106", "#780000")}</style>
        </Helmet>
        <Header><h1>Helpful Beastmoon Tips</h1></Header>
      </Body>
    </HelmetProvider>);
 };

 export default Tips;