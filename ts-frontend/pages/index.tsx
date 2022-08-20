import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import { PropsFrom } from "../lib/TypeHelpers";
import TestComponent from "../components/TestComponent";
import SortingDemonstrator from "../components/SortingDemonstration/SortingDemonstrator";
import PromotionalTopBar from "../components/PromotionalTobBar";

//test getting props from other component
type props2 = PropsFrom<typeof TestComponent>;
type props = React.ComponentProps<typeof TestComponent>;

const Home: NextPage = () => {
  const [areClientSide, setAreClientSide] = useState<boolean>(false);
  useEffect(() => {
    setAreClientSide(true);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Sheldon Frith</title>
        <meta name="description" content="Sheldon Frith's Portfolio Website" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <PromotionalTopBar />
        {areClientSide ? <SortingDemonstrator /> : <></>}
      </main>
    </div>
  );
};

export default Home;
