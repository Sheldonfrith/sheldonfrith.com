import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import { PropsFrom } from "../lib/TypeHelpers";
import SortingDemonstrator from "../components/SortingDemonstration/SortingDemonstrator";
import PromotionalTopBar from "../components/PromotionalTobBar";
import ContactFooter from "../components/ContactFooter";
import ShowcaseCard from "../components/IndexPage/ShowcaseCard";


const Home: NextPage = () => {
  

  return (
    <div className={styles.container}>
      <Head>
        <title>Sheldon Frith</title>
        <meta name="description" content="Sheldon Frith's Portfolio Website" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Sheldon Frith</h1>
        <button className={styles.button} onClick={()=>window.open('SheldonsCV.pdf')}>View My CV</button>
        <div className={styles.content}>
        <ShowcaseCard
          title="Umny Inc."
          image="/images/UmnySitePreview.jpg"
          link="https://www.umny.ca"
        />
        <ShowcaseCard
          title="WAsm Speed Tester"
          image="/images/WasmTesterPreview.jpg"
          link="http://localhost:3000/wasm-speed-tester"
        />
        </div>
        <ContactFooter/>
      </main>
    </div>
  );
};

export default Home;
