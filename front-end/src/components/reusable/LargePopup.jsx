import React, { useState, useEffect, useContext, useCallback } from "react";
import styled from "styled-components";
import ClosePopupButton from "./ClosePopupButton";

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
  containerRef,
  containerDisplay,
  closePopup,
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
