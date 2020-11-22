
import React, {useState} from 'react';
import styled from 'styled-components';
import LargePopup from './reusable/LargePopup';
import ResumePopup from './Popup-CV';
import {verticalFlexBox} from '../reusable-styles';
import {getAboutBlurb}from '../database';
import {getTheme} from '../ui-constants';
const theme = getTheme();

const AboutArea = styled.div`
  width: 100%;
  margin: 5rem auto 0 auto;
  ${verticalFlexBox}
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
  ${verticalFlexBox}
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

const aboutMeBlurb = getAboutBlurb();

export default function About() {
    const [resumePopupDisplay, setResumePopupDisplay] = useState('none');

    //RESUME POPUP
  const handleCVButtonClick=()=>{
    setResumePopupDisplay('block');
  }
 
return (
<AboutArea>
        <LargePopup
            closeButtonBackgroundColor={theme.orange}
            closeButtonColor={theme.white}
            containerDisplay={resumePopupDisplay}
            setContainerDisplay={setResumePopupDisplay}
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
            <AboutDescription>{aboutMeBlurb}</AboutDescription>
            <AboutButton onClick={handleCVButtonClick}>MY CV</AboutButton>
          </AboutTextArea>
        </AboutArea>
);
}
