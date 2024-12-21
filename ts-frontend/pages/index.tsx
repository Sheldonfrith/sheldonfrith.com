import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import { PropsFrom } from "../lib/TypeHelpers";
import SortingDemonstrator from "../components/SortingDemonstration/SortingDemonstrator";
import PromotionalTopBar from "../components/PromotionalTobBar";
import ContactFooter from "../components/ContactFooter";
import ShowcaseCard from "../components/IndexPage/ShowcaseCard";
import Link from "next/link";
import FancyAnimation from "../components/Misc/FancyAnimation";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sheldon Frith</title>
        <meta name="description" content="Sheldon Frith's Portfolio Website" />
      </Head>
      <main>
        <div className={styles.page} data-contact-footer-add-margin>
          <h1 className={styles.title}>Sheldon Frith</h1>
          <button
            className={styles.button}
            onClick={() => window.open("SheldonFrithCV.pdf")}
          >
            View My CV
          </button>
          <div className={styles.content}>
            <ShowcaseCard
              title="Ground Temperature Predictor"
              subtitle="Machine Learning and Data Science"
              image="/images/VancouverMapGS4MeterSeasonal5t4.gif"
              link="https://app.umny.ca"
            />
            <ShowcaseCard
              title="GPU-Powered Collision Detection"
              subtitle="Cutting Edge Performance"
              image="/images/CollisionsGif5t4.gif"
              link="https://github.com/Sheldonfrith/gpu_collision_detection_bevy/blob/main/README.md"
            />
            <ShowcaseCard
              title="AI Powered Coloquial Translator"
              subtitle="Prompt Eng. and API Integration"
              image="/images/AIPoweredLocalTranslator5t4.png"
              link="https://sheldonfrith.com/translator"
            />
            <ShowcaseCard
              title="GeoPile Predictive Software"
              subtitle="Complex UI Development"
              image="/images/UmnySitePreview5t4.jpg"
              link="https://youtu.be/74QCfmN-KNU"
            />
            <ShowcaseCard
              title="WAsm Speed Tester"
              subtitle="Backend Performance"
              image="/images/WasmTesterPreview5t4.jpg"
              link="/wasm-speed-tester"
            />
            <ShowcaseCard
              title="Geo Control & Monitoring System"
              subtitle="SCADA and IoT"
              image="/images/GeoControlAndMonitoring5t4.jpg"
              link="https://umny.ca/smart-control/"
            />
            <ShowcaseCard
              title="React-Elvis"
              subtitle="Frontend Error and Validation UX Library"
              image="/images/React-Elvis-Example5t4.jpg"
              link="https://sheldonfrith.com/elvis"
            />
          </div>
          <ContactFooter triggerFlash={false} />
        </div>
      </main>
    </>
  );
};

export default Home;
