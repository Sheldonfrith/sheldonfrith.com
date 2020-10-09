import React, {useState, useEffect, useContext, useCallback} from 'react';
import styled from 'styled-components'
import {Close} from '@material-ui/icons';

const DefaultContainer = styled.div`
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  background-color: ${props=>props.backgroundColor};
  z-index: 15;
  position: absolute;
  top:-1rem;
  right:-1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
export const ClosePopupButtonStyle = (styledComponent)=>{
    DefaultContainer = styledComponent;
}
const defaultColor = 'white';
const defaultBackgroundColor = '';

export default function ClosePopupButton({Container, onClick, backgroundColor, color}) {

color = color?color:defaultColor;
backgroundColor = backgroundColor?backgroundColor:defaultBackgroundColor;

if (Container){
    return (
    <Container onClick={onClick} backgroundColor={backgroundColor}>
        <Close style={{color: color}} />
    </Container>
    );
} else {
    return (
    <DefaultContainer onClick={onClick} backgroundColor={backgroundColor}>
                <Close style={{color: color}} />
    </DefaultContainer>
    );
}

}
