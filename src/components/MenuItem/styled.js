import Styled from 'styled-components';

export const LinkArea = Styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    border-radius: 10px;
    margin-bottom: 10px;
    background-color: ${props=>props.active ? '#0B4D0B' : 'transparent'};   
    
`;

export const LinkIcon = Styled.img`
    width: 34px;
    height: auto;
`;