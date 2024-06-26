import styled from 'styled-components';

export const Cards = styled.ul`
  display: grid;
  grid-template-columns: repeat(7, auto);
  grid-row-gap: 1em;
  grid-area: cards;
  list-style-type: none;
  justify-content: space-evenly;
  background-color: transparent;
  border-color: transparent;
  margin: auto;
  border-left: 1em;
  overflow: hidden;
`;

export const Pic = styled.div`
   grid-area: pic;
`;

export const Wrapper = styled.div`
   display: grid;
   grid-template-columns: 10% 57% 23% 10%;
   grid-template-rows: auto;
   grid-template-areas: 
   "lvl cards pic school";

`;

export const Level = styled.div`
   grid-area: lvl;
   display: block;
   padding-top: 1em;
   background-color: transparent;
   border-color: transparent;
`;

export const School = styled.div`
   grid-area: school;
   display: block;
   padding-top: 1em;
   background-color: transparent;
   border-color: transparent;
`;

export const Button = styled.button`
   border-radius: 100%;
   margin-top: 1em;
   margin-right: 5em;
   padding: 1em;
   background-color: transparent;
   &:hover{
      background-color: #582f0e;
      color: rgb(221,161,94);
   }
`;
export const ButtonActive = styled.button`
   border-radius: 100%;
   margin-top: 1em;
   margin-right: 5em;
   padding: 1em;
   background-color: #582f0e;
   color: rgb(221,161,94);
`;

export const ButtonB = styled.button`
   border-radius: 100%;
   margin-top: 1em;
   margin-left: 5em;
   padding: 1em;
   background-color: transparent;
   &:hover{
      background-color: #582f0e;
      color: rgb(221,161,94);
   }
`;

export const ButtonBActive = styled.button`
   border-radius: 100%;
   margin-top: 1em;
   margin-left: 5em;
   padding: 1em;
   background-color: #582f0e;
   color: rgb(221,161,94);
`;

export const BackButton = styled.button`
   background-color: #780000;
   color: rgb(221,161,94);
   width: 7%;
`;

export const diviB = styled.div`
   background-color: transparent;
   align-items: left;
`;