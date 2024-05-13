import styled from 'styled-components';

export const FormWrapper = styled.div`
display: grid;
margin-top: 2em;
grid-template-areas:
  "col clops drac elf fairy"
  "krok mino pig rat wolf";
grid-gap: 2.5em;
`;

export const Colossus = styled.div`
grid-area: col;
font-size: 1.25em;
`;

export const Cyclops = styled.div`
grid-area: clops;
font-size: 1.25em;
`;

export const Draconian = styled.div`
grid-area: drac;
font-size: 1.25em;
`;

export const Elf = styled.div`
grid-area: elf;
font-size: 1.25em;
`;

export const Fairy = styled.div`
grid-area: fairy;
font-size: 1.25em;
`;

export const Krokomummy = styled.div`
grid-area: krok;
font-size: 1.25em;
`;

export const Minotaur = styled.div`
grid-area: mino;
font-size: 1.25em;
`;

export const Pig = styled.div`
grid-area: pig;
font-size: 1.25em;
`;

export const Rat = styled.div`
grid-area: rat;
font-size: 1.25em;
`;

export const Wolf = styled.div`
grid-area: wolf;
font-size: 1.25em;
`;