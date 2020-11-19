import React, { useState, useEffect, useContext } from 'react';
import styled, {keyframes, css} from 'styled-components';
import {GlobalContext }from './providers/GlobalContext';
const fadeInFromBlack = keyframes`
  from {
    filter: brightness(0%);
  }
  to {
    filter: brightness(100%);
  }
`;
const slideInFromRight = keyframes`
  from {
    transform: translateX(100vw);
  }
  to {
    transform: translateX(0);
  }
`;

const TitleArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: centre;
  justify-content: space-between;
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
const BackgroundTemplate = css`
   background-image: url(${props=>props.url});
  display: flex;
  flex-direction: column;
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
const NiceBackground = css`
  ${BackgroundTemplate};
  background-image: url(${(props) => props.theme.headerPicMax});
  /* @media (max-width: 2100px){
    background-image: url(${props=>props.theme.headerPic2050});
  }
  @media(max-width: 1500px){
    background-image: url(${props=>props.theme.headerPic1500});
  }
  @media(max-width: 850px){
    background-image: url(${props=>props.theme.headerPic850});
  }
  /* animation: ${fadeInFromBlack} 2s linear; */
  @media (max-width: ${props=>props.theme.primaryBreakpoint}px){
    background-image: url(${props=> props.theme.headerPic500});
  } */
`;
const BlurBackground = css`
  ${BackgroundTemplate};
`;
const UglyBackground = css`
  ${BackgroundTemplate};
  background-image: url(${props=>props.theme.headerPicUgly});
`;
const Background = styled.div`
${BackgroundTemplate};
/* ${props=> {
 return props.loadingNice? props.loadingUgly? BlurBackground: UglyBackground : NiceBackground;
}} */
`;
const SubArea = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: ${(props) => props.theme.primaryBreakpoint}px) {
    flex-direction: column;
    align-items: flex-start;
    height: 30vh;
  }
  align-items: center;
  justify-content: space-between;
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
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-between;
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

export default function Header({topSocialButtons, theme}) {
    //state and effects for progressive image loading
    const gc = useContext(GlobalContext);
    // const [loadingUgly, setLoadingUgly] =useState(true);
    // const [loadingNice, setLoadingNice] =useState(true);
    const [currentUrl, setCurrentUrl] = useState(gc.theme.headerPicBlur);
    useEffect(()=>{
      const img = new Image();
      img.onload = ()=> {
        // setLoadingUgly(false);
        setCurrentUrl(gc.theme.headerPicUgly);
      }
      img.src = gc.theme.headerPicUgly;
    },[]);
    useEffect(()=>{
      //only fire after ugly pic is loaded
      if (currentUrl !== gc.theme.headerPicUgly) return;
      const img = new Image();
      img.onload = ()=> {
        // setLoadingNice(false);
        setCurrentUrl(gc.theme.headerPicMax);
      }
      img.src= gc.theme.headerPicMax;
    },[currentUrl])

    return (
        <TitleArea>
               <Background url={currentUrl}>
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
