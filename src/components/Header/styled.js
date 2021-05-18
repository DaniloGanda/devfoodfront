import React from 'react';
import Styled from 'styled-components';

export const Container = Styled.div`
background-color: #136713;
width: 100%;
border-radius: 10px;
padding: 20px 0px 21px 10px;
display:flex;
justify-content: space-between;
align-items: center;
`;

export const Logo = Styled.img`
height: 70px;
width: auto;
`;

export const SearchInput = Styled.input`
margin-right: 15px;
width: ${props=>props.active ? 300: 0}px;
height: 50px;
border: 0px;
border-radius: 25px;
background-color: #FFF;
background-image: url('/assets/search.png');
background-size: 30px;
background-repeat: no-repeat;
background-position: 10px center;
padding-left: 50px;
font-size: 15px;
outline:0;
transition: all ease 0.2s;
cursor:pointer; 
&:focus{
    cursor: text;
}
`;