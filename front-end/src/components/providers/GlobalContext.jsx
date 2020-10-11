import React, { useState, useEffect } from "react";
import useMyState from "../../lib/Hooks/useMyState";
import IconButton from "../reusable/IconButton";
import PortfolioItems from '../../lib/PortfolioItems';

//initialize state structure here
export const GlobalContext = React.createContext({
  activeTab: "",
  setActiveTab: () => {},
  setTabAreaChildren: () => {},
  tabAreaChildren: {},
  aboutMeBlurb: "",
  linkedinButton: [],
  githubButton: [],
  upworkButton: [],
  stackoverflowButton: [],
  subSpecialties: [],
  portfolioItems: {},
  theme: {},
});

export default function GlobalProvider({ children }) {

  const theme = {
    black:`#000000`,
    white:`#ffffff`,
    orange:`#ed4629`,
    headerPicMax:`/images/sheldonfrith-header-max.jpg`,
    headerPic2050: '/images/sheldonfrith-header-2050.jpg',
    headerPic1500: '/images/sheldonfrith-header-1500.jpg',
    headerPic500: '/images/sheldonfrith-header-500.jpg',
    headerPic850: '/images/sheldonfrith-header-850.jpg',
    lightblue:`#C7D0D8`,
    grey:`#5A6066`,
    aboutPic:`/images/meWithIzzy.png`,
    contactPicLarge:`/images/sheldonfrith-contact-600.jpg`,
    contactPicSmall:'images/sheldonfrith-contact-300.jpg',
    searchBarPic:`/images/Searchbar.svg`,
    arrowGraphicsPic:`/images/ArrowsForAnimation.svg`,
    backgroundTransitionPic:`/images/BackgroundWave.svg`,
    primaryBreakpoint:`500`,
  };// object for holding styleObj variables

  const [tabAreaChildren, setTabAreaChildren] = useMyState(null, "object");
  const [activeTab, setActiveTab] = useMyState(null, "string");
  const [aboutMeBlurb, setAboutMeBlurb] = useMyState(`
    I am a highly adaptable software developer with a passion for solving difficult problems.
`,"string");
    const [subSpecialties, setSubSpecialties] = useMyState([
        'REST and GraphQL APIs',
        'Firebase, AWS, and Digital Ocean Cloud Services',
        'SQL and noSQL Databases',
        'Git version control',
        'Java',
        'Python',
        'Visual Basic and advanced Excel programming',
        'Wordpress',
        'HTML and CSS'
    ],'array');
  const [
    socialMediaButtonSizeAndColor,
    setSocialMediaButtonSizeAndColor,
  ] = useMyState([theme.orange, 50], "array");
  const [linkedinButton, setLinkedinButton] = useMyState(
    {
        icon:"LinkedIn",
        iconColor:socialMediaButtonSizeAndColor[0],
        iconSize:60,
        onClick:() => {
          window.open(
            "https://linkedin.com/in/sheldon-frith"
          );
        },
      },
    "object"
  );
  const [githubButton, setGithubButton] = useMyState(
    {
        icon:"GitHub",
        iconColor:socialMediaButtonSizeAndColor[0],
        iconSize: socialMediaButtonSizeAndColor[1],
        onClick:() => {
          window.open(
            "https://github.com/Sheldonfrith"
          );
        },
      },
    "object"
  );
  const [upworkButton, setUpworkButton] = useMyState(
    {
      icon:"UpWork",
      iconColor:socialMediaButtonSizeAndColor[0],
      iconSize:60,
      onClick:() => {
        window.open(
          "https://www.upwork.com/freelancers/~010124a92748d11439?viewMode=1"
        );
      },
      isNotMaterialUI:true,
    },
    "object"
  );
  const [stackoverflowButton, setStackoverflowButton] = useMyState(
    null,
    "object"
  );
    const [portfolioItems, setPortfolioItems] =useMyState(PortfolioItems,'object');
  return (
    <GlobalContext.Provider
      value={{
        activeTab: activeTab,
        setActiveTab: setActiveTab,
        setTabAreaChildren: setTabAreaChildren,
        tabAreaChildren: tabAreaChildren,
        aboutMeBlurb: aboutMeBlurb,
        linkedinButton: linkedinButton,
        githubButton: githubButton,
        upworkButton: upworkButton,
        stackoverflowButton: stackoverflowButton,
        subSpecialties: subSpecialties,
        portfolioItems: portfolioItems,
        theme: theme,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
