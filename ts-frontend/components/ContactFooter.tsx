import React, {
  useState,
  useEffect,
  useContext,
  useCallback,
  useRef,
} from "react";
import styles from "../styles/Home.module.css";
import { GitHub, LinkedIn } from "@material-ui/icons";
import StackOverflow from "../public/images/stack-overflow.svg";
// import Image from 'next/image'
interface ContactFooterProps {
  triggerFlash: boolean;
}
const ContactFooter: React.FunctionComponent<ContactFooterProps> = ({
  triggerFlash,
}) => {
  //debugging
  useEffect(() => {
    //console.log("triggerFlash", triggerFlash);
  }, [triggerFlash]);

  return (
    <div
      className={
        triggerFlash ? styles.contactFooterFlash : styles.contactFooter
      }
    >
      <h2 className={styles.contactFooterTitle}>Contact Me:</h2>
      <p className={styles.contactFooterEmail}>SheldonFrith@Umny.ca</p>
      <div className="horizontal-flex">
        <LinkedIn
          onClick={() =>
            window.open("https://www.linkedin.com/in/sheldon-frith/")
          }
          className={styles.contactFooterSocialIcon}
        ></LinkedIn>
        <GitHub
          onClick={() => window.open("https://github.com/SheldonFrith")}
          className={styles.contactFooterSocialIcon}
        ></GitHub>
        <StackOverflow
          // fill={'white'}
          onClick={() =>
            window.open("https://stackoverflow.com/users/4205839/sheldonfrith")
          }
          className={styles.contactFooterSocialIcon}
          // style={{fill: 'white'}}
        />
      </div>
    </div>
  );
};
export default ContactFooter;
