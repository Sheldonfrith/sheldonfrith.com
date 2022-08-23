import Head from "next/head";
import React, {
  useState,
  useEffect,
  useContext,
  useCallback,
  useRef,
} from "react";
import ContactFooter from "../components/ContactFooter";
import PromotionalTopBar from "../components/PromotionalTobBar";
import SortingDemonstrator from "../components/SortingDemonstration/SortingDemonstrator";
import styles from "../styles/WAsmTester.module.css";

interface WAsmSpeedTesterProps {}
const WAsmSpeedTester: React.FunctionComponent<WAsmSpeedTesterProps> = ({}) => {
  const [areClientSide, setAreClientSide] = useState<boolean>(false);
  const [showContactFooter, setShowContactFooter] = useState<boolean>(false);
  const [contactFooterFlash, setContactFooterFlash] = useState<boolean>(false);
  const [flashContactFooter, setFlashContactFooter] = useState<boolean>(false);
  useEffect(() => {
    setAreClientSide(true);
  }, []);

  //show and flash contact footer
  useEffect(() => {
    // when initially set to true, show and flash the contact footer
    if (flashContactFooter) {
      setFlashContactFooter(false);
      setContactFooterFlash(true);
    }
  }, [flashContactFooter]);
  // turn off the flash
  useEffect(() => {
    if (contactFooterFlash) {
      setTimeout(() => {
        setContactFooterFlash(false);
      }, 1000);
    }
  }, [contactFooterFlash, showContactFooter]);

  //hide contact footer on scroll
  useEffect(() => {
    if (showContactFooter) {
      window.addEventListener("scroll", () => {
        setShowContactFooter(false);
      });
    }
  }, [showContactFooter]);

  function onContactMeButtonClick() {
    if (!showContactFooter) {
      setShowContactFooter(true);
    }
    setFlashContactFooter(true);
  }
  return (
    <>
      <Head>
        <title>Sheldon Frith{"'"}s WASM Sorting Tester</title>
        <meta
          name="description"
          content="Sheldon Frith's Web Assembly Sorting Algorithm Speed Tester"
        />
      </Head>
      <main className={styles.main}>
        <PromotionalTopBar onContactMeClick={onContactMeButtonClick} />
        {areClientSide ? <SortingDemonstrator /> : <></>}
        {showContactFooter ? (
          <ContactFooter triggerFlash={contactFooterFlash} />
        ) : (
          <></>
        )}
      </main>
    </>
  );
};
export default WAsmSpeedTester;
