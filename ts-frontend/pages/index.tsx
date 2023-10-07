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
              image="/images/vancouverMaps.webp"
              link="https://app.umny.ca"
            />
            <ShowcaseCard
              title="GeoPile Predictive Software"
              subtitle="Complex UI Development"
              image="/images/UmnySitePreview.jpg"
              link="https://youtu.be/74QCfmN-KNU"
            />
            {/* <Link href="/wasm-speed-tester"> */}
              {/* <a> */}
                <ShowcaseCard
                  title="WAsm Speed Tester"
                  subtitle="Backend Performance"
                  image="/images/WasmTesterPreview.jpg"
                  link="/wasm-speed-tester"
                />
              {/* </a> */}
            {/* </Link> */}
          </div>
          <ContactFooter triggerFlash={false} />
        </div>
      </main>
    </>
  );
};

export default Home;
