
import React, {useState, useEffect, useContext, useCallback, useRef} from 'react';
import styled from 'styled-components';
import Close from '@material-ui/icons'
import LargePopup from './reusable/LargePopup';
import ClosePopupButton from './reusable/ClosePopupButton';
import useMyState from '../lib/Hooks/useMyState';
import useOnClickOutside from '../lib/Hooks/useOnClickOutside';
import ResumePopup from './ResumePopup';
import {GlobalContext} from './providers/GlobalContext';

const AboutArea = styled.div`
  width: 100%;
  margin: 5rem auto 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`;

const AboutTitle = styled.h4`
  color: ${(props) => props.theme.white};
  font-size: 2rem;
  margin: 1.5rem;
`;
const AboutImgDiv = styled.div`
  border-radius: 50%;
  height: 36vmin;
  width: 36vmin;
  position: absolute;
  right: 6%;
  z-index: 10;
  top: -15%;
  @media (max-width: ${props=>props.theme.primaryBreakpoint}px){
    top:5%;
  }
`;
const AboutImg = styled.img`
  border-radius: 50%;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
const AboutImgBorder = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: -1.2rem;
  right: -0.8rem;
  z-index: 10;
  border-radius: 50%;
  border-color: ${(props) => props.theme.orange};
  border-width: 0.4rem;
  border-style: solid;
`;
const AboutTextArea = styled.div`
  width: 60vw;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.orange};
  margin: 6rem 8rem 3rem 4rem;
  @media (max-width: ${props=>props.theme.primaryBreakpoint}px){
    margin: 6rem 8rem 3rem 2rem;
  }
`;
const AboutDescription = styled.p`
  color: ${(props) => props.theme.white};
  margin: 0 2rem;
  font-size: 1rem;
`;
const AboutButton = styled.button`
  background-color: ${(props) => props.theme.orange};
  color: ${(props) => props.theme.white};
  border-color: ${(props) => props.theme.white};
  border-style: solid;
  border-width: 0.1rem;
  font-size: 1.5rem;
  margin: 1.5rem;
  cursor: pointer;
  padding: 0.4rem 1rem;
`;
const AboutAnimation = styled.img``;

export default function About({theme}) {
    const globalContext = useContext(GlobalContext);
    const [resumePopupDisplay, setResumePopupDisplay] = useMyState('none','string');

    //RESUME POPUP
  const handleCVButtonClick=(e)=>{
    const itemID = e.target.id;
    //set popup display variables
    setResumePopupDisplay('block');
  }
  //close porfolio popup on click outside
  const resumePopupRef = useRef(null);
  useOnClickOutside(resumePopupRef,()=>{
    //check if this is relevant
    if (resumePopupDisplay ==='none') return;
    console.log('detected click outside, closing');
    setResumePopupDisplay('none');
  });
  //close portfolio popup when x is pressed
  const closeResumePopup = ()=>{
    setResumePopupDisplay('none');
  }
return (
<AboutArea>
        <LargePopup
            closeButtonBackgroundColor={theme.orange}
            closeButtonColor={theme.white}
            containerRef={resumePopupRef}
            containerDisplay={resumePopupDisplay}
            closePopup={closeResumePopup}
            containerStyle={{
                left: '6%',
                top: '18%'
            }}
        >
            <ResumePopup/>
        </LargePopup>
          <AboutImgDiv>
            <AboutImg src={theme.aboutPic} alt="sheldon with dog" />
            <AboutImgBorder />
          </AboutImgDiv>
          <AboutAnimation></AboutAnimation>
          <AboutTextArea>
            <AboutTitle>About Me</AboutTitle>
            <AboutDescription>{globalContext.aboutMeBlurb}</AboutDescription>
            <AboutButton onClick={handleCVButtonClick}>MY CV</AboutButton>
          </AboutTextArea>
        </AboutArea>
);
}
