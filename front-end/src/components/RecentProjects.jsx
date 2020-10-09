import React, {useState, useEffect, useContext, useCallback, useRef} from 'react';
import styled from 'styled-components';
import {GlobalContext} from './providers/GlobalContext';
import HorizontalGallery from './reusable/HorizontalGallery';
import useMyState from '../lib/Hooks/useMyState';
import useMyEffect from '../lib/Hooks/useMyEffect';
import useOnClickOutside from '../lib/Hooks/useOnClickOutside';
import PortfolioItemPopup from './PortfolioItemPopup';
import LargePopup from './reusable/LargePopup';

const Container = styled.div`
  margin: 5rem auto 0 auto;
  width: 90vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;
const ContainerTitle = styled.h1`
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


export default function RecentProjects({theme}) {
    const globalContext = useContext(GlobalContext);

  const portfolioItems = globalContext.portfolioItems;

    const [currentItem, setCurrentItem] = useMyState(null,'object');
  const [portfolioPopupDisplay, setPortfolioPopupDisplay] = useMyState('none','string');
  const [autoPlayGallery, setAutoPlayGallery] = useMyState(true,'boolean');
    
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

return (
<Container>
          <ContainerTitle>RECENT PROJECTS</ContainerTitle>
          {portfolioItems ? (
            <>
            <LargePopup
                closeButtonBackgroundColor={theme.orange}
                closeButtonColor={theme.white}
                containerRef={portfolioPopupRef}
                containerDisplay={portfolioPopupDisplay}
                closePopup={closePortfolioPopup}
                darkColor={theme.black}
                lightColor={theme.white}
                accentColor={theme.orange}
            >
            {currentItem?<PortfolioItemPopup
                title={currentItem.title}
                description={currentItem.summary}
                githubLink={currentItem.github || null}
                directLink={currentItem.link || null}
              />:<div>...Loading</div>}
            </LargePopup>
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
        </Container>
);
}
