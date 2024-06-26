import styled from 'styled-components';

export const Body = styled.body`
padding-top: 0%;
margin-top: 0%;
border-top: 0%;
text-align: center;
`;

export const Wrapper = styled.div`
display: grid;
margin-top: 2em;
margin-bottom: 2em;
grid-template-areas:
  ". forms forms lunari . "
  ". forms forms gardening . "
  ". crafting crafting gardening .";
grid-gap: 1em;
`;

export const Description = styled.div`
width: 60%;
margin-left: auto;
margin-right: auto;
font-size: 1.25em
`;

export const Forms = styled.div`
background-color: rgba(185, 179, 179, 0.454);
color: #00fde8;
padding: 15%;
grid-area: forms;
font-size: 1.25em;
text-align: center;
`;

export const Lunari = styled.div`
background-color: rgba(185, 179, 179, 0.454);
color: #00fde8;
padding: 5%;
grid-area: lunari;
font-size: 1.25em;
text-align: center;
`;

export const Gardening = styled.div`
background-color: rgba(185, 179, 179, 0.454);
color: #00fde8;
padding: 5%;
grid-area: gardening;
font-size: 1.25em;
text-align: center;
`;

export const Crafting = styled.div`
background-color: rgba(185, 179, 179, 0.454);
color: #00fde8;
padding: 5%;
grid-area: crafting;
font-size: 1.25em;
text-align: center;
`;

export const Tiers = styled.div`
background-color: rgba(185, 179, 179, 0.454);
color: #00fde8;
padding: 3%;
margin-left: auto;
margin-right: auto;
font-size: 1.25em;
text-align: center;
`;