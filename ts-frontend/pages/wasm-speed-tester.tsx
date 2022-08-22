import Head from 'next/head';
import React, {useState, useEffect, useContext, useCallback, useRef} from 'react';
import SortingDemonstrator from '../components/SortingDemonstration/SortingDemonstrator';
import styles from '../styles/WAsmTester.module.css'

interface WAsmSpeedTesterProps{

}
const WAsmSpeedTester: React.FunctionComponent<WAsmSpeedTesterProps> =({})=> {
    const [areClientSide, setAreClientSide] = useState<boolean>(false);
  useEffect(() => {
    setAreClientSide(true);
  }, []);
return (
<div>
    <Head>
        <title>Sheldon Frith{"'"}s WASM Sorting Tester</title>
        <meta name="description" content="Sheldon Frith's Web Assembly Sorting Algorithm Speed Tester" />
      </Head>
        <main className={styles.main}>
{areClientSide ? <SortingDemonstrator /> : <></>}
        </main>
</div>
);
}
export default WAsmSpeedTester;
