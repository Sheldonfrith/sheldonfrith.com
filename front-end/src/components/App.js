import React, { useContext, useRef} from "react";
import "../styles/App.css";
import Header from "./Header";
import ContactInfo from "./ContactInfo";
import Resume from "./Resume";
import TabArea from "./TabArea";
import Portfolio from "./Portfolio";
import { GlobalContext } from "./providers/GlobalContext";
import Sidebar from "./Sidebar";
import BigModernTitle from "./reusable/BigModernTitleArea";
import useMyState from "../lib/Hooks/useMyState";
import IconButton from "./reusable/IconButton";
import useMyEffect from "../lib/Hooks/useMyEffect";
import useOnClickOutside from '../lib/Hooks/useOnClickOutside';
import { Search, Email, Phone, Close } from "@material-ui/icons";
import useHasChanged from "../lib/Hooks/useHasChanged";
import ScrollPageCard from "./reusable/ScrollPageCard";
import HorizontalGallery from "./reusable/HorizontalGallery";
import Button from "./reusable/Button";
import PortfolioItemPopup from './PortfolioItemPopup';
import styled, { ThemeProvider } from "styled-components";
import Footer from './Footer';
import ResumePopup from './ResumePopup';

//!APP CONTAINER AND MEDIA QUERRIES
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
const Background = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-size: cover;
  backrgound-repeat: no-repeat;
  background-image: url(${(props) => props.theme.headerPic});
  height: 73vh;
  width: 100%;
  flex: auto;
`;
const SubArea = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: ${(props) => props.theme.primaryBreakpoint}px) {
    flex-direction: column;
    align-items: flex-start;
  }
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.black};
  width: 100%;
  flex: auto;
  flex-wrap: wrap;
  position: relative;
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
const AboutArea = styled.div`
  width: 100%;
  margin: 5rem auto 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`;
const ResumePopupContainer = styled.div`
  display: ${props=>props.display};
  background-color: ${props=>props.theme.black};
  z-index: 11;
  position: absolute;
  left: 6%;
  top: 18%;
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
const ToolkitArea = styled.div`
  width: 100%;
  margin: 1rem auto 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-between;
`;
const ToolkitTitle = styled.h1`
  transform: rotate(90deg);
  position: absolute;
  top: 11.5%;
  font-size: 12vw;
  left: 60vw;
  color: ${(props) => props.theme.white};
`;
const ToolkitSearchbar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 70vw;
  background-color: ${(props) => props.theme.orange};
  border-radius: 0.3rem;
  margin: 0 1.5rem 1.5rem 1.5rem;
  padding: 0.2rem;
`;
const ToolkitSearchbarText = styled.div`
  background-color: ${(props) => props.theme.white};
  border-radius: 0.3rem;
  color: ${(props) => props.theme.black};
  padding: 0.2rem;
  width: 62vw;
`;
const ToolkitSearchbarIcon = styled.div`
  background-color: ${(props) => props.theme.white};
  border-radius: 0.3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ToolkitTextArea = styled.div`
  background-color: ${(props) => props.theme.black};
  width: 70vw;
  margin: 0 1.5rem;
  top: 18%;
`;
const MainSpecialties = styled.p`
  color: ${(props) => props.theme.orange};
  margin: 0 1rem;
  padding: 0.8rem;
  font-size: 1rem;
`;
const SubSpecialties = styled.div`
  color: ${(props) => props.theme.white};
  border-style: solid;
  border-color: ${(props) => props.theme.grey};
  margin: 1rem;
  font-size: 2.2vh;
`;
const ClosePopupButton = styled.div`
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  background-color: ${props=>props.theme.orange};
  z-index: 15;
  position: absolute;
  top:-1rem;
  right:-1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
const PortfolioArea = styled.div`
  margin: 5rem auto 0 auto;
  width: 90vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;
const PortfolioAreaTitle = styled.h1`
  color: ${(props) => props.theme.black};
  font-size: 2.5rem;
  text-align: center;
`;
const Gallery = styled(HorizontalGallery)``;
const PortfolioItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  cursor: pointer;
`;
const PortfolioItemIcon = styled.img`
  height: 12rem;
  width: 12rem;
`;
const PortfolioItemTag = styled.div`
  background-color: ${props=>props.theme.orange};
  border-radius: 0.2rem;
  padding: 0.2rem 0.6rem;
  position: absolute;
  top: 0;
  right: 0;
  font-size: 0.8rem;
`;
const PortfolioItemTitle = styled.h4`
  color: ${(props) => props.theme.white};
  font-size: 1.5rem;
  text-align: center;
  margin: 0 1rem 0 1rem;
`;

const PortfolioPopupContainer = styled.div`
  display: ${props=>props.display};
  background-color: ${props=>props.theme.black};
  z-index: 11;
  position: absolute;
`;
const ContactArea = styled.div`
  margin: 5rem auto 5rem auto;
  width: 100%;
  display: flex;
  flex-direction: row;
  @media (max-width: ${(props) => props.theme.primaryBreakpoint}px) {
    flex-direction: column-reverse;
  }
  align-items: center;
  justify-content: center;
`;
const ContactButtons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
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
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

function App() {
  const globalContext = useContext(GlobalContext);
  const githubButton = globalContext.githubButton;
  const linkedinButton = globalContext.linkedinButton;
  const upworkButton = globalContext.upworkButton;
  const portfolioItems = globalContext.portfolioItems;
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
  const [currentItem, setCurrentItem] = useMyState(null,'object');
  const [portfolioPopupDisplay, setPortfolioPopupDisplay] = useMyState('none','string');
  const [autoPlayGallery, setAutoPlayGallery] = useMyState(true,'boolean');
  const [resumePopupDisplay, setResumePopupDisplay] = useMyState('none','string');

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

  const handlePortfolioItemClick=(e)=>{
    const itemID = e.target.id;
    //stop gallery autoplay
    setAutoPlayGallery(false);
    //set popup display variables
    console.log('detected click on ',e.target);
    setCurrentItem({...portfolioItems[itemID]});
  }
  //this displays the popup whenever current item changes (only changes on click)
  useMyEffect([currentItem],()=>{
    if (!currentItem) return;
    console.log(currentItem)
    setPortfolioPopupDisplay('block');
  },[setPortfolioPopupDisplay,currentItem]);
  //close porfolio popup on click outside
  const portfolioPopupRef = useRef(null);
  useOnClickOutside(portfolioPopupRef,()=>{
    //check if this is relevant
    if (portfolioPopupDisplay ==='none') return;
    console.log('detected click outside, closing');
    setPortfolioPopupDisplay('none');
  });
  //close portfolio popup when x is pressed
  const closePortfolioPopup = ()=>{
    setPortfolioPopupDisplay('none');
  }
  
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
    <ThemeProvider theme={theme}>
      <AppContainer>
        <TitleArea>
          <Background>
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
        <AboutArea>
            <ResumePopupContainer ref={resumePopupRef} display={resumePopupDisplay}>
              <ResumePopup/>
              <ClosePopupButton onClick={closeResumePopup}>
              <Close style={{color: theme.white}} />
              </ClosePopupButton>
            </ResumePopupContainer>
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
        <ToolkitArea>
          <ToolkitTitle>TOOLKIT</ToolkitTitle>
          <ToolkitSearchbar>
            <ToolkitSearchbarText>
              I specialize in full stack web development...
            </ToolkitSearchbarText>
            <ToolkitSearchbarIcon>
              <Search style={{ color: globalContext.theme.orange }} />
            </ToolkitSearchbarIcon>
          </ToolkitSearchbar>
          <ToolkitTextArea>
            <MainSpecialties>
              ...using <b>React</b>, <b>Node</b> and <b>Express</b>. I have
              experience with other technologies and languages including:
            </MainSpecialties>
            <SubSpecialties>
              <ul>
                {globalContext.subSpecialties.map((text, index) => (
                  <li key={"subSpecialty" + index}>{text}</li>
                ))}
              </ul>
            </SubSpecialties>
          </ToolkitTextArea>
        </ToolkitArea>
        <PortfolioArea>
          <PortfolioAreaTitle>RECENT PROJECTS</PortfolioAreaTitle>
          {portfolioItems ? (
            <>
            <PortfolioPopupContainer ref={portfolioPopupRef} display={portfolioPopupDisplay}>
              {currentItem?<PortfolioItemPopup
                title={currentItem.title}
                description={currentItem.summary}
                githubLink={currentItem.github || null}
                directLink={currentItem.link || null}
              />:<div>...Loading</div>}
              <ClosePopupButton onClick={closePortfolioPopup}>
              <Close style={{color: theme.white}} />
              </ClosePopupButton>
            </PortfolioPopupContainer>
            <Gallery autoPlay={autoPlayGallery}>
              {Object.keys(portfolioItems).map((itemID, index) => {
                return (
                  <PortfolioItem id={itemID} key={"portfolioItem" + index} onClick={handlePortfolioItemClick}>
                    <PortfolioItemIcon
                      id={itemID}
                      src={portfolioItems[itemID].icon}
                    ></PortfolioItemIcon>
                    <PortfolioItemTitle id={itemID}>
                      {portfolioItems[itemID].title}
                    </PortfolioItemTitle>
                    <PortfolioItemTag id={itemID}>
                      <em>{portfolioItems[itemID].status}</em>
                    </PortfolioItemTag>
                  </PortfolioItem>
                );
              })}
            </Gallery>
            </>
          ) : (
            <div>Loading...</div>
          )}
        </PortfolioArea>
        <ContactArea>
          <ContactButtons>{bottomSocialButtons}</ContactButtons>
          <ContactImageContainer>
            <ContactImage src={theme.contactPic}></ContactImage>
            <ContactBorder />
            <ContactTitle>CONTACT ME</ContactTitle>
            <ContactText>
              Interested in what I'm doing?<br></br>
              <br></br>
              <IconAndText>
                <Email style={{ color: theme.white, margin: "0 0.5rem 0 0" }} />{" "}
                sheldonfrith@hotmail.com
              </IconAndText>
              <br></br>
              <IconAndText>
                <Phone style={{ color: theme.white, margin: "0 0.5rem 0 0" }} />{" "}
                1 289 527 2661
              </IconAndText>
            </ContactText>
          </ContactImageContainer>
        </ContactArea>
        <Footer/>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
