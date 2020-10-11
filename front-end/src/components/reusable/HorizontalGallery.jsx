import React, {
  useState,
  useEffect,
  useContext,
  useCallback,
  useRef,
} from "react";
import AliceCarousel from "react-alice-carousel";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import useMyEffect from '../../lib/Hooks/useMyEffect';

export default function HorizontalGallery({ id, children, autoPlay, startIndex}) {
  // console.log('rerendered horizontal gallery');
  const handleOnDragStart = useCallback((e) => e.preventDefault(),[]);
  let carousel = useRef(null);
  
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <ArrowBackIos
        style={{ cursor: "pointer", color: "white" }}
        onClick={() => carousel.slidePrev()}
      />
      <div
        style={{
          width: "70vw",
        }}
      >
        <AliceCarousel
          items={children.map((child) => (
            <div onDragStart={handleOnDragStart}>{child}</div>
          ))}
          mouseTrackingEnabled
          buttonsDisabled
          dotsDisabled
          autoPlay={autoPlay}
          autoPlayInterval={2000}
          disableAutoPlayOnAction
          stopAutoPlayOnHover
          startIndex={startIndex}
          preservePosition
          responsive={{ 0: { items: 1 }, 500: { items: 2 }, 800: { items: 3 } }}
          ref={(el) => (carousel = el)}
        ></AliceCarousel>
      </div>
      <ArrowForwardIos
        style={{ cursor: "pointer", color: "white" }}
        onClick={() => carousel.slideNext()}
      />
    </div>
  );
}
