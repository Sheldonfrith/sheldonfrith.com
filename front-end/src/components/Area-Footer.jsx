import React, {useState, useEffect, useContext, useCallback} from 'react';
import styled from 'styled-components';
import {horizontalFlexBox, verticalFlexBox}from '../reusable-styles';

const FooterArea = styled.div`
    background-color: ${props=>props.theme.black};
    height: 10vh;
    width: 100%;
    ${horizontalFlexBox}
    justify-content: center;
`;
const FooterText = styled.div`
    color: ${props=>props.theme.orange};
    font-size: 0.7rem;
    margin: 0 1rem;
`;

const FooterButton = styled.button`
    background-color: ${props=>props.theme.orange};
    color: ${props=>props.theme.white};
    border: none;
    border-radius: 0.2rem;
    font-size: 0.7rem;
    margin: 0 1rem;
`;

export default function Footer(props) {

return (
<FooterArea>
    <FooterText>Copyright Sheldon Frith Nicholson, 2020, All Rights Reserved</FooterText>
    <FooterButton 
    onClick={()=>{window.open('https://github.com/Sheldonfrith/sheldonfrith.com')}}
    >View This Website's Code On GitHub
    </FooterButton>
</FooterArea>
);
}
