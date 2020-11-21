import React, { useState, useEffect, useRef, useContext, useCallback } from "react";
import styled from "styled-components";
import ClosePopupButton from "./ClosePopupButton";
import {useOnClickOutside}from'../../hooks';

let DefaultContainer = styled.div`
  display: ${(props) => props.display};
  background-color: ${(props) => props.backgroundColor};
  z-index: 11;
  position: absolute;
`;

const defaultAccentColor = "orange";
const defaultLightColor = "white";
const defaultDarkColor = "black";

export default function LargePopup({
  children,
  containerDisplay,
  setContainerDisplay,
  accentColor,
  lightColor,
  darkColor,
  closeButtonBackgroundColor,
  closeButtonColor,
  containerStyle,
}) {
  if (!ClosePopupButton) {
    throw new Error("ClosePopupButton required as prop, in LargePopup");
  }
  accentColor = accentColor ? accentColor : defaultAccentColor;
  lightColor = lightColor ? lightColor : defaultLightColor;
  darkColor = darkColor ? darkColor : defaultDarkColor;

   //close porfolio popup on click outside
   const containerRef = useRef(null);
   useOnClickOutside(containerRef,()=>{
     //check if this is relevant
     if (containerDisplay ==='none') return;
     setContainerDisplay('none');
   });
   //close portfolio popup when x is pressed
   const closePopup = ()=>{
      setContainerDisplay('none');
   }

  return (
    <DefaultContainer
      backgroundColor={darkColor}
      ref={containerRef}
      display={containerDisplay}
      style={containerStyle?containerStyle:{}}
    >
      {children}
      <ClosePopupButton
        onClick={closePopup}
        backgroundColor={
          closeButtonBackgroundColor ? closeButtonBackgroundColor : accentColor
        }
        color={closeButtonColor ? closeButtonColor : lightColor}
      />
    </DefaultContainer>
  );
}
