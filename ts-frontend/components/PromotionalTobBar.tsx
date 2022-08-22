import React, {
  useState,
  useEffect,
  useContext,
  useCallback,
  useRef,
} from "react";

interface PromotionalTopBarProps {}
const PromotionalTopBar: React.FunctionComponent<
  PromotionalTopBarProps
> = ({}) => {
  return (
    <div className="horizontal-flex">
      <h1>Sheldon Frith</h1>
      <h2>View CV</h2>
      <h2>Contact Me</h2>
    </div>
  );
};
export default PromotionalTopBar;
