import assert from "assert";

import React, {
  useState,
  useEffect,
  useContext,
  useCallback,
  useRef,
} from "react";
import {
  ArrayGenerator,
  DataTypeName,
  dataTypeNamesToReadableNames,
  JsAndCArray,
} from "../../lib/arrayGenerators/ArrayGenerator";
import { objectKeys } from "../../lib/ObjectKeys";
import { SortingAlgorithmName } from "../../lib/sortingAlgorithms/All";
import { SortingAlgorithm } from "../../lib/sortingAlgorithms/SortingAlgorithm";
import { assertDefined, assertIsType, isKeyOf } from "../../lib/TypeHelpers";
import ListGenerator from "./ListGenerator";
import Sorter from "./Sorter";
import TestResultsView from "./TestResultsView";
import CodeView from "./CodeView";
import styles from "../../styles/WAsmTester.module.css";

export interface SortResults
  extends Record<SortingAlgorithmName, { result: number[]; runtime: number }> {
  dataType: DataTypeName;
  arrayLength: number;
  lowerBound: number;
  upperBound: number;
}

// const sorters = getInitializedSorters(Module);

interface SortingDemonstratorProps {}
const SortingDemonstrator: React.FunctionComponent<
  SortingDemonstratorProps
> = ({}) => {
  const [generatedList, setGeneratedList] = useState<JsAndCArray>();
  const [listUsedInLastSort, setListUsedInLastSort] = useState<JsAndCArray>();
  const [waitingForSort, setWaitingForSort] = useState<boolean>(false);
  const [sortResults, setSortResults] = useState<SortResults[]>();
  const [sortedListSample, setSortedListSample] = useState<number[]>();
  const [sorters, setSorters] =
    useState<Record<SortingAlgorithmName, SortingAlgorithm>>();
  const [lastArrayGenerator, setLastArrayGenerator] =
    useState<ArrayGenerator>();

  const verifyAllSortsAreIdentical = useCallback(
    (resultsAndRuntimes: SortResults, unsortedListUsed: JsAndCArray) => {
      //console.log(resultsAndRuntimes);
      const compareString = JSON.stringify(
        resultsAndRuntimes.prototypeJS.result
      );
      objectKeys(resultsAndRuntimes).forEach((sorterName) => {
        if (
          sorterName === "prototypeJS" ||
          sorterName === "arrayLength" ||
          sorterName === "dataType" ||
          sorterName === "lowerBound" ||
          sorterName === "upperBound"
        )
          return;
        //if dataType is float, ignore the Count Sort results
        if (
          (unsortedListUsed.dataType === "float32" ||
            unsortedListUsed.dataType === "float64") &&
          (sorterName === "countCPP" || sorterName === "countJS")
        ) {
          return;
        }

        const thisString = JSON.stringify(
          resultsAndRuntimes[sorterName].result
        );
        if (thisString !== compareString) {
          console.error(
            "Arrays that did not match:",
            compareString,
            thisString,
            sorterName,
            unsortedListUsed.dataType
          );
          throw new Error(
            `Sorted arrays did not match: ${sorterName} and 'prototypeJS'`
          );
        }
      });
    },
    []
  );
  const freeMemoryAfterCPPIsUsed = useCallback(() => {
    assertDefined(lastArrayGenerator);
    lastArrayGenerator.freeMemoryAfterUse();
    setLastArrayGenerator(undefined);
    setSorters(undefined);
    setGeneratedList(undefined);
  }, [lastArrayGenerator]);

  const runAllSortsWithNewArray = useCallback((): SortResults => {
    assertDefined(sorters);
    assertDefined(generatedList);
    assertDefined(lastArrayGenerator);
    //console.log("beginning to run all sorters");
    // @ts-expect-error
    const resultsAndRuntimes: SortResults = {
      dataType: generatedList.dataType,
      arrayLength: generatedList.jsArray.length,
      lowerBound: generatedList.lowerBound,
      upperBound: generatedList.upperBound,
    };
    objectKeys(sorters).forEach((sorterName) => {
      //console.log("running sorter", sorterName);
      const isFloat =
        generatedList.dataType === "float32" ||
        generatedList.dataType === "float64";
      const isCountSort = sorterName === "countCPP" || sorterName === "countJS";
      if (isFloat && isCountSort) {
        //skip, cause count sort cant be used for floats
        resultsAndRuntimes[sorterName] = {
          result: [],
          runtime: NaN,
        };
      } else {
        resultsAndRuntimes[sorterName] = {
          // result: sorters[sorterName].sort(_.cloneDeep(generatedList)),
          result: sorters[sorterName].sort(generatedList),
          runtime: sorters[sorterName].runTimeLastSort,
        };
      }
    });
    freeMemoryAfterCPPIsUsed();
    verifyAllSortsAreIdentical(resultsAndRuntimes, generatedList);
    return resultsAndRuntimes;
  }, [
    freeMemoryAfterCPPIsUsed,
    generatedList,
    lastArrayGenerator,
    sorters,
    verifyAllSortsAreIdentical,
  ]);

  async function onSortClick() {
    setWaitingForSort(true);
    assertDefined(generatedList);
    // if (JSON.stringify(listUsedInLastSort) === JSON.stringify(generatedList)) {
    //   //nothing has changed, sorting is a waste
    //   return;
    // }
    const resultsAndTimings = await runAllSortsWithNewArray();
    setSortedListSample(resultsAndTimings.prototypeJS.result.slice(0, 30));
    setSortResults((prev) => {
      if (!prev) return [resultsAndTimings];
      const clone = [...prev];
      clone.push(resultsAndTimings);
      //console.log(clone);
      return clone;
    });

    setWaitingForSort(false);
  }

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Web Assembly Sorting Speed Tester</h1>
      <section>
        <h2 className={styles.subtitle}>Description:</h2>
        <text>
          This tool allows you to compare the speed of various sorting
          algorithms (some in regular JS, and some in WASM C++) on different
          types of lists.
        </text>
      </section>
      <div className={styles.borderedSection}>

      <ListGenerator
        setGeneratedList={setGeneratedList}
        generatedListLength={generatedList?.jsArray.length || 0}
        waitingForSort={waitingForSort}
        setSorters={setSorters}
        setLastArrayGenerator={setLastArrayGenerator}
        />
        </div>
      <div className={styles.borderedSection}>

      <Sorter
        generatedList={generatedList}
        onSortClick={onSortClick}
        sortedListSample={sortedListSample}
      />
      </div>
      <div className={styles.borderedSection}>

      <TestResultsView sortResults={sortResults} />
      </div>
      <div className={styles.borderedSection}>

      <CodeView />
      </div>
    </div>
  );
};
export default SortingDemonstrator;
