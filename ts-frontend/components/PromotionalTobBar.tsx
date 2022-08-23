import React, {
  useState,
  useEffect,
  useContext,
  useCallback,
  useRef,
} from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";

interface PromotionalTopBarProps {
  onContactMeClick?: () => void;
}
const PromotionalTopBar: React.FunctionComponent<PromotionalTopBarProps> = ({
  onContactMeClick,
}) => {
  return (
    <header className={styles.topBar}>
      <Link href="/">
        <h1>Sheldon Frith</h1>
      </Link>
      <h2
        className={styles.topBarButton}
        onClick={() => window.open("SheldonsCV.pdf")}
      >
        View CV
      </h2>
      <h2 className={styles.topBarButton} onClick={onContactMeClick}>
        Contact Me
      </h2>
    </header>
  );
};
export default PromotionalTopBar;
