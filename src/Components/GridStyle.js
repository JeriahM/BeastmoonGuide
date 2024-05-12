import styled from 'styled-components';

export const Body = styled.body`
background-color: rgb(216, 198, 81);
color: #723008;
padding-top: 0%;
margin-top: 0%;
border-top: 0%;
text-align: center;
`;

export const Wrapper = styled.div`
display: grid;
grid-template-areas:
  ". hd hd hd ."
  ". . des . ."
  ". forms forms lunari . "
  ". forms forms gardening . "
  ". crafting crafting gardening ."
  ". . tierCost . .";
grid-gap: 1em;
`;

export const Header = styled.div`
grid-area: hd;
font-size: 1.25em
`;

export const Description = styled.div`
grid-area: des;
font-size: 1.25em
`;

export const Forms = styled.div`
background-color: #723008;
color: rgb(251, 226, 66);
padding: 15%;
grid-area: forms;
font-size: 1.25em;
text-align: center;
`;

export const Lunari = styled.div`
background-color: #723008;
color: rgb(251, 226, 66);
padding: 5%;
grid-area: lunari;
font-size: 1.25em;
text-align: center;
`;

export const Gardening = styled.div`
background-color: #723008;
color: rgb(251, 226, 66);
padding: 5%;
grid-area: gardening;
font-size: 1.25em;
text-align: center;
`;

export const Crafting = styled.div`
background-color: #723008;
color: rgb(251, 226, 66);
padding: 5%;
grid-area: crafting;
font-size: 1.25em;
text-align: center;
`;

export const Tiers = styled.div`
background-color: #723008;
color: rgb(251, 226, 66);
padding: 5%;
grid-area: tierCost;
font-size: 1.25em;
text-align: center;
`;