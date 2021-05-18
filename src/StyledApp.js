import Styled from 'styled-components';

export const Container = Styled.div`
display:flex;
height: 100vh;
background-color: #DDDDDD;
`;

export const Menu = Styled.div`
display:flex;
background-color: #136713;
width: 80px;
flex-direction: column;
justify-content: center;
align-items: center;
`;

export const PageBody = Styled.div`
display:flex;
background-color: #00980d;
background-image: url('/assets/bg.png');
flex:1;
overflow-y: auto;
`;