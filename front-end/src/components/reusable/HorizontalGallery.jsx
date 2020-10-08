import React, {
  useState,
  useEffect,
  useContext,
  useCallback,
  useRef,
} from "react";
import AliceCarousel from "react-alice-carousel";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";

export default function HorizontalGallery({ id, children, autoPlay }) {
  const handleOnDragStart = (e) => e.preventDefault();
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
