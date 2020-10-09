import React, { useContext, useRef} from "react";
import "../styles/App.css";
import Header from "./Header";
import { GlobalContext } from "./providers/GlobalContext";
import useMyState from "../lib/Hooks/useMyState";
import IconButton from "./reusable/IconButton";
import useMyEffect from "../lib/Hooks/useMyEffect";
import styled, { ThemeProvider } from "styled-components";
import Footer from './Footer';
import About from './About';
import ToolkitArea from './ToolkitArea';
import RecentProjects from './RecentProjects';
import ContactArea from './ContactArea';

const AppContainer = styled.div`
  font-size: 2vmax;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
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



function App() {
  const globalContext = useContext(GlobalContext);
  const githubButton = globalContext.githubButton;
  const linkedinButton = globalContext.linkedinButton;
  const upworkButton = globalContext.upworkButton;
  const theme = globalContext.theme;

  const [topTitleButtonParams, setTopTitleButtonParams] = useMyState(
    [githubButton, linkedinButton, upworkButton],
    "array"
  );
  const [bottomSocialButtonParams, setBottomSocialButtonParams] = useMyState(
    [
      { ...githubButton, iconSize: 30, iconColor: theme.white },
      { ...linkedinButton, iconSize: 30, iconColor: theme.white },
      { ...upworkButton, iconSize: 30, iconColor: theme.white },
    ],
    "array"
  );
  const [topSocialButtons, setTopSocialButtons] = useMyState(null, "array");
  const [bottomSocialButtons, setBottomSocialButtons] = useMyState(null, "array");
  

  useMyEffect(
    [bottomSocialButtonParams],
    () => {
      setBottomSocialButtons(
        bottomSocialButtonParams.map((obj, index) => {
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
    [setBottomSocialButtons, bottomSocialButtonParams]
  );
  useMyEffect(
    [topTitleButtonParams],
    () => {
      setTopSocialButtons(
        topTitleButtonParams.map((obj, index) => {
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
    [setTopSocialButtons, topTitleButtonParams]
  );

  
  

  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <Header topSocialButtons={topSocialButtons} theme={theme}/>
        <About theme={theme}/>
        <ToolkitArea theme={theme}/>
        <RecentProjects theme={theme}/>
        <ContactArea theme={theme} bottomSocialButtons={bottomSocialButtons}/>
        <Footer/>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
