import React, {useState, useEffect, useContext, useCallback, useRef} from 'react';
import styled from 'styled-components';
import HorizontalGallery from './reusable/HorizontalGallery';
import PortfolioItemPopup from './Popup-PortfolioItem';
import LargePopup from './reusable/LargePopup';
import {verticalFlexBox, horizontalFlexBox} from '../reusable-styles';
import {getPortfolioItems} from '../database';
import {getTheme} from '../ui-constants';
import {useConditionalEffect}from '../hooks';

const portfolioItems = getPortfolioItems();
const theme = getTheme();

const Container = styled.div`
  margin: 5rem auto 0 auto;
  width: 90vw;
  ${verticalFlexBox}
`;
const ContainerTitle = styled.h1`
  color: ${(props) => props.theme.black};
  font-size: 2.5rem;
  text-align: center;
`;
const Gallery = styled(HorizontalGallery)``;
const PortfolioItem = styled.div`
  ${verticalFlexBox}
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
  right: 1%;
  max-width: 90%;
  font-size: 0.8rem;
`;
const PortfolioItemTitle = styled.h4`
  color: ${(props) => props.theme.white};
  font-size: 1.5rem;
  text-align: center;
  margin: 0 1rem 0 1rem;
`;

const mouseMoveThreshold = 40;//px

export default function RecentProjects() {

  const [currentItem, setCurrentItem] = useState(null);
  const [portfolioPopupDisplay, setPortfolioPopupDisplay] = useState('none');
  const [autoPlayGallery, setAutoPlayGallery] = useState(true);
  const [lastClickedIndex, setLastClickedIndex]= useState(null);
  const [mousePositionStart, setMousePositionStart] = useState({x:null, y:null});

  const getMousePositionLargestChange = (startPos, endPos) =>{
    const deltaX = Math.abs(startPos.x-endPos.x);
    const deltaY = Math.abs(startPos.y-endPos.y);
    return Math.max(deltaX, deltaY);
  }

  const isDragEvent = (e)=>{
    const mousePositionEnd = {x:e.clientX, y:e.clientY};
    const largestChange = getMousePositionLargestChange(mousePositionStart, mousePositionEnd);
    if (largestChange < mouseMoveThreshold) return false
    return true;
  }

  const openPopup= (e, index)=>{
    const itemID = e.target.id;
    setLastClickedIndex(index);
    setCurrentItem({...portfolioItems[itemID]});
  }

  useConditionalEffect([currentItem],()=>{
    //waits for appropriate state updates, instead of displaying the popup directly in the openPopup method
    if(!currentItem) return;
    setPortfolioPopupDisplay('block');
  });
  const handleMouseUp = (e,index)=>{
    if (!isDragEvent(e)) openPopup(e,index);
  }

  const handleMouseDown = (e)=>{
    setMousePositionStart({x:e.clientX, y:e.clientY});
  }

return (
<Container>
          <ContainerTitle>RECENT PROJECTS</ContainerTitle>
          {portfolioItems ? (
            <>
            <LargePopup
                closeButtonBackgroundColor={theme.orange}
                closeButtonColor={theme.white}
                containerDisplay={portfolioPopupDisplay}
                setContainerDisplay={setPortfolioPopupDisplay}
                darkColor={theme.black}
                lightColor={theme.white}
                accentColor={theme.orange}
            >
            {currentItem?<PortfolioItemPopup
                title={currentItem.title}
                description={currentItem.summary}
                githubLink={currentItem.github || null}
                directLink={currentItem.link || null}
                techStackList={currentItem.techStack || null}
              />:<div>...Loading</div>}
            </LargePopup>
            <Gallery autoPlay={autoPlayGallery} startIndex={lastClickedIndex} setStartIndex={setLastClickedIndex}>
              {Object.keys(portfolioItems).map((itemID, index) => {
                return (
                  <PortfolioItem
                  id={itemID}
                  key={"portfolioItem" + itemID}
                  onMouseDown={handleMouseDown}
                  onMouseUp={(e)=>handleMouseUp(e,index)}
                  >
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
