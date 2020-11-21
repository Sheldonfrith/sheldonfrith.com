import React, { useState, useEffect, useContext } from 'react';
import styled, {keyframes, css} from 'styled-components';
import {useProgressiveImage, useConditionalEffect} from'../hooks';
import {verticalFlexBox, horizontalFlexBox} from'../reusable-styles';
import {getTheme, getHeaderPicFullSize, getHeaderPicBlurry} from '../ui-constants';
const theme = getTheme();

const TitleArea = styled.div`
  ${verticalFlexBox};
  width: 100%;
`;
const Title = styled.h1`
  font-size: 4rem;
  color: ${(props) => props.theme.white};
  margin: 0;
  letter-spacing: -0.02rem;
  margin: 0 0.2rem;
  padding: 0 1rem;
`;
const Background = styled.div`
   background-image: url(${props=>props.url});
   ${verticalFlexBox}
  justify-content: flex-end;
  background-size: cover;
  backrgound-repeat: no-repeat;
  height: 80vh;
  width: 100%;
  flex: auto;
  @media(max-width: ${props=>props.theme.primaryBreakpoint}px){
    height:70vh;
  }
`;

const SubArea = styled.div`
  ${horizontalFlexBox}
  @media (max-width: ${(props) => props.theme.primaryBreakpoint}px) {
    ${verticalFlexBox}
    align-items: flex-start;
    height: 30vh;
  }
  background-color: ${(props) => props.theme.black};
  width: 100%;
  flex: auto;
  flex-wrap: wrap;
  position: relative;
  height: 20vh;
`;
const Subtitle = styled.h2`
  color: ${(props) => props.theme.orange};
  font-size: 5.5vh;
  width: 30%;
  margin: 0.6rem 1rem;
  @media (max-width: ${(props) => props.theme.primaryBreakpoint}px) {
    margin: 0 0 0 1.5rem;
  }
`;
const SubButtons = styled.div`
  ${horizontalFlexBox}
  @media (max-width: ${(props) => props.theme.primaryBreakpoint}px) {
    width: 100%;
    margin: 0 0 1rem 0;
  }
`;
const AboutBackgroundTransition = styled.img`
height: 60vh;
width: 101vw;
right: 0;
position: absolute;
top: 90%;
@media (max-width: ${props=>props.theme.primaryBreakpoint}px){
  top:90%;
}
`;

export default function Header({topSocialButtons}) {
    const [initialViewWidth, setInitialViewWidth] = useState(window.innerWidth);
    const getPlaceholderImageURL = () =>{
      return getHeaderPicBlurry();
    }
    const getFullImageURL = ()=>{
      //detect screen width and pick image based on that
      return getHeaderPicFullSize(initialViewWidth);
    }
    const [placeholder, fullImage] = useProgressiveImage(getPlaceholderImageURL(), getFullImageURL());
    const [currentUrl, setCurrentUrl] = useState('');
    useEffect(()=>{//set placeholder url
      if(!placeholder || currentUrl || !placeholder.src) return;
      setCurrentUrl(placeholder)
    },[placeholder, setCurrentUrl, currentUrl]);
    useEffect(()=>{//set full image url
      if (!fullImage || !fullImage.src) return;
      setCurrentUrl(fullImage.src);
    },[fullImage, setCurrentUrl]);
    //whenever the screen size changes check if a new header image size is needed (only if larger than what is already loaded)
    useConditionalEffect([window.innerWidth],()=>{
      if(window.innerWidth < initialViewWidth+50) return;
      getHeaderPicFullSize(initialViewWidth)
    })  ;//!Not working currently

    return (
        <TitleArea>
            <Background url={currentUrl} alt="backgroundimage">
              <Title>Sheldon Frith</Title>
          </Background>
          <SubArea>
            <Subtitle>
              SOFTWARE <br></br>DEVELOPER
            </Subtitle>
            <SubButtons>{topSocialButtons}</SubButtons>
          <AboutBackgroundTransition src={theme.backgroundTransitionPic} alt="backgroundimage"/>
          </SubArea>
        </TitleArea>
    );
}
