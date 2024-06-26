import styled from 'styled-components';

export const Body = styled.div`
padding-top: 0%;
margin-top: 1em;
border-top: 0%;
text-align: center;
align-self: center;
display: grid;
`;

export const Header = styled.div`
font-size: 1.25em
`;

// primary must be rgb
export function pageStyle(primary, secondary){
   return `body{
      background-color: rgb(${primary});
      color: ${secondary};
    }
    ul {
      border-color: ${secondary};
      background-color: ${secondary};
    }
    li { border-right: rgb(${primary});}
    li a { color: rgb(${primary});}
    li a:hover:not(.active){ background-color: rgb(${primary}, .668);}
    `;
}