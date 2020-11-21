import React, { useState, useEffect, useContext, useCallback } from "react";
import styled from 'styled-components';
import {Email, Phone} from '@material-ui/icons';
import {getEmail, getPhone} from'../database';
import  {verticalFlexBox, horizontalFlexBox} from'../reusable-styles';
import {getTheme} from '../ui-constants';
const theme = getTheme();

const Container = styled.div`
  margin: 5rem auto 5rem auto;
  width: 100%;
  ${horizontalFlexBox}
  @media (max-width: ${(props) => props.theme.primaryBreakpoint}px) {
    flex-direction: column-reverse;
  }
  justify-content: center;
`;
const ContactButtons = styled.div`
  ${horizontalFlexBox}
  margin: 3rem 0 3rem 0;
`;
const ContactImageContainer = styled.div`
  position: relative;
  width: 70%;
  @media (max-width: ${(props) => props.theme.primaryBreakpoint}px) {
    width: 90%;
  }
`;
const ContactImage = styled.img`
  height: 15rem;
  width: 10rem;
  object-fit: cover;
  @media (max-width: ${(props) => props.theme.primaryBreakpoint}px) {
    width: 0;
  }
`;

const ContactBorder = styled.div`
  border-style: solid;
  border-color: ${(props) => props.theme.orange};
  border-width: 0.3rem;
  position: absolute;
  width: 90%;
  height: 60%;
  top: 6%;
  left: 6%;
  @media (max-width: ${(props) => props.theme.primaryBreakpoint}px) {
    height: 80%;
  }
`;
const ContactText = styled.div`
  color: ${(props) => props.theme.white};
  position: absolute;
  left: 44%;
  top: 18%;
  font-size: 2.3vmin;
  max-width: 53%;
  @media (max-width: ${(props) => props.theme.primaryBreakpoint}px) {
    left: 10%;
    font-size: 1rem;
  }
`;

const ContactTitle = styled.h2`
  color: ${(props) => props.theme.white};
  position: absolute;
  top: -14%;
  font-size: 1.9rem;
  left: 44%;
  @media (max-width: ${(props) => props.theme.primaryBreakpoint}px) {
    left: 15%;
    font-size: 2.4rem;
    top: -2.8rem;
  }
`;
const IconAndText = styled.div`
  ${horizontalFlexBox}
  justify-content: flex-start;
`;

const email = getEmail();
const phone = getPhone();

export default function ContactArea({ bottomSocialButtons }) {
  return (
    <Container>
      <ContactButtons>{bottomSocialButtons}</ContactButtons>
      <ContactImageContainer>
        <ContactImage src={window.innerWidth<900?theme.contactPicSmall:theme.contactPicLarge}></ContactImage>
        <ContactBorder />
        <ContactTitle>CONTACT ME</ContactTitle>
        <ContactText>
          Interested in what I'm doing?<br></br>
          <br></br>
          <IconAndText>
            <Email style={{ color: theme.white, margin: "0 0.5rem 0 0" }} />{" "}
            {email}
          </IconAndText>
          <br></br>
          <IconAndText>
            <Phone style={{ color: theme.white, margin: "0 0.5rem 0 0" }} /> 1
            {phone}
          </IconAndText>
        </ContactText>
      </ContactImageContainer>
    </Container>
  );
}
