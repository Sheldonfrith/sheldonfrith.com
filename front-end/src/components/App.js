import React, { useState, useEffect} from "react";
import Header from "./Area-Header";
import IconButton from "./reusable/IconButton";
import styled, { ThemeProvider } from "styled-components";
import Footer from './Area-Footer';
import About from './Area-About';
import ToolkitArea from './Area-Toolkit';
import RecentProjects from './Area-RecentProjects';
import ContactArea from './Area-Contact';
import {getTheme, getSocialButtonProps} from '../ui-constants';
import {verticalFlexBox}from '../reusable-styles';

const AppContainer = styled.div`
  font-size: 2vmax;
  ${verticalFlexBox}
  width: 100%;
  background-image: linear-gradient(
    ${(props) => props.theme.lightblue},
    ${(props) => props.theme.grey}
  );
  margin: auto;
  @media (max-width: ${(props) => props.theme.primaryBreakpoint}px) {
    width: 100vw;
  }
`;

//put these outside component since they are constants
const githubButton = getSocialButtonProps('githubButton');
const linkedinButton = getSocialButtonProps('linkedInButton');
const upworkButton = getSocialButtonProps('upworkButton');
const theme = getTheme();
const topTitleButtonProps = [githubButton, linkedinButton, upworkButton];
const bottomSocialButtonProps = 
  [
    { ...githubButton, iconSize: 30, iconColor: theme.white },
    { ...linkedinButton, iconSize: 30, iconColor: theme.white },
    { ...upworkButton, iconSize: 30, iconColor: theme.white },
  ];



function App() {
  //testing SENTRY
  const [topSocialButtons, setTopSocialButtons] = useState(null);
  const [bottomSocialButtons, setBottomSocialButtons] = useState(null);
  useEffect(//on component mount
    () => {
      setBottomSocialButtons(
        bottomSocialButtonProps.map((obj, index) => {
          return (
            <IconButton
              key={"topbuttons" + index}
              icon={obj.icon}
              iconColor={obj.iconColor}
              iconSize={obj.iconSize}
              onClick={obj.onClick}
              margin='0 0.7rem'
              isNotMaterialUI={
                obj.isNotMaterialUI ? obj.isNotMaterialUI : false
              }
            />
          );
        })
      );
    },
    []
  );
  useEffect(
    () => {//on component mount
      setTopSocialButtons(
        topTitleButtonProps.map((obj, index) => {
          return (
            <IconButton
              key={"topbuttons" + index}
              icon={obj.icon}
              iconColor={obj.iconColor}
              iconSize={obj.iconSize}
              onClick={obj.onClick}
              isNotMaterialUI={
                obj.isNotMaterialUI ? obj.isNotMaterialUI : false
              }
            />
          );
        })
      );
    },
    [setTopSocialButtons, topTitleButtonProps]
  );

  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <Header topSocialButtons={topSocialButtons}/>
        <About/>
        <ToolkitArea/>
        <RecentProjects/>
        <ContactArea bottomSocialButtons={bottomSocialButtons}/>
        <Footer/>
      </AppContainer>
    </ThemeProvider>
  );
} 

export default App;
