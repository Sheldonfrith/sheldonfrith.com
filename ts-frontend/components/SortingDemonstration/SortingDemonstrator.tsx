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
import countSort from "../../lib/cpp/countSortMOD";
import quickSort from "../../lib/cpp/quickSortMOD";
import { objectKeys } from "../../lib/ObjectKeys";
import {
  getInitializedSorters,
  SortingAlgorithmName,
  sortingAlgorithmNames,
} from "../../lib/sortingAlgorithms/All";
import { SortingAlgorithm } from "../../lib/sortingAlgorithms/SortingAlgorithm";
import { assertIsType, isKeyOf } from "../../lib/TypeHelpers";
import Table from "../Table";
import CodeSnippet from "../CodeSnippet";
import {
  CPPCountingSortCode,
  CPPQuickSortCode,
  JSCountingSortCode,
  JSQuickSortCode,
} from "../../lib/Constants";
import BarChart from "../BarChart";
import { isNumber } from "lodash";
interface SortResults
  extends Record<SortingAlgorithmName, { result: number[]; runtime: number }> {
  dataType: DataTypeName;
  arrayLength: number;
  lowerBound: number;
  upperBound: number;
}
type TableColNames = SortingAlgorithmName | "dataType" | "arrayLength" | "lowerBound" | "upperBound";

function assertDefined(v: any): asserts v {
  if (v === undefined) {
    throw new Error("Assertion failed: value is undefined");
  }
}
function assertNotWaitingForSort(wForSort: boolean): asserts wForSort is false {
  if (wForSort) {
    throw new Error("Assertion failed. We ARE waiting for sort.");
  }
}

// const sorters = getInitializedSorters(Module);

interface SortingDemonstratorProps {}
const SortingDemonstrator: React.FunctionComponent<
  SortingDemonstratorProps
> = ({}) => {
  const [PrototypeSortJSOfListToGenerate, setLengthOfListToGenerate] = useState<
    number | undefined
  >(10000);
  const [dataTypeOfListToGenerate, setDataTypeOfListToGenerate] =
    useState<DataTypeName>("int16");
  const [lowerBoundListToGenerate, setLowerBoundListToGenerate] = useState<
    number | undefined
  >(-1000);
  const [upperBoundListToGenerate, setUpperBoundListToGenerate] = useState<
    number | undefined
  >(1000);
  const [generatedList, setGeneratedList] = useState<JsAndCArray>();
  const [unsortedListSample, setUnsortedListSample] = useState<number[]>();
  const [listUsedInLastSort, setListUsedInLastSort] = useState<JsAndCArray>();
  const [startTimeLastSortCall, setStartTimeLastSortCall] = useState<number>();
  const [waitingForSort, setWaitingForSort] = useState<boolean>(false);
  const [sortResults, setSortResults] = useState<SortResults[]>();
  const [sortedListSample, setSortedListSample] = useState<number[]>();
  const [sorters, setSorters] =
    useState<Record<SortingAlgorithmName, SortingAlgorithm>>();
  const [lastArrayGenerator, setLastArrayGenerator] =
    useState<ArrayGenerator>();
  const [codeToDisplay, setCodeToDisplay] = useState<
    "cppQuickSort" | "cppCountSort" | "jsQuickSort" | "jsCountSort"
  >("cppQuickSort");

  const verifyAllSortsAreIdentical = useCallback(
    (resultsAndRuntimes: SortResults) => {
      console.log(resultsAndRuntimes);
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
          (dataTypeOfListToGenerate === "float32" ||
            dataTypeOfListToGenerate === "float64") &&
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
            dataTypeOfListToGenerate
          );
          throw new Error(
            `Sorted arrays did not match: ${sorterName} and 'prototypeJS'`
          );
        }
      });
    },
    [dataTypeOfListToGenerate]
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
    assertDefined(lowerBoundListToGenerate);
    assertDefined(upperBoundListToGenerate);
    console.log("beginning to run all sorters");
    // @ts-expect-error
    const resultsAndRuntimes: SortResults = {
      dataType: generatedList.dataType,
      arrayLength: generatedList.jsArray.length,
      lowerBound: lowerBoundListToGenerate,
      upperBound: upperBoundListToGenerate,
    };
    objectKeys(sorters).forEach((sorterName) => {
      console.log("running sorter", sorterName);
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
    verifyAllSortsAreIdentical(resultsAndRuntimes);
    return resultsAndRuntimes;
  }, [
    freeMemoryAfterCPPIsUsed,
    generatedList,
    lastArrayGenerator,
    lowerBoundListToGenerate,
    sorters,
    upperBoundListToGenerate,
    verifyAllSortsAreIdentical,
  ]);

  async function onSortClick() {
    setWaitingForSort(true);
    assertDefined(generatedList);
    if (JSON.stringify(listUsedInLastSort) === JSON.stringify(generatedList)) {
      //nothing has changed, sorting is a waste
      return;
    }
    const resultsAndTimings = await runAllSortsWithNewArray();
    setSortedListSample(resultsAndTimings.prototypeJS.result.slice(0, 10));
    setSortResults((prev) => {
      if (!prev) return [resultsAndTimings];
      const clone = [...prev];
      clone.push(resultsAndTimings);
      console.log(clone);
      return clone;
    });

    setWaitingForSort(false);
  }
  async function onGenerateClick() {
    assertNotWaitingForSort(waitingForSort);
    assertDefined(PrototypeSortJSOfListToGenerate);
    assertDefined(dataTypeOfListToGenerate);
    assertDefined(lowerBoundListToGenerate);
    assertDefined(upperBoundListToGenerate);

    const countSortModule = await countSort({
      noInitialRun: true,
      noExitRuntime: true,
    });
    const quickSortModule = await quickSort({
      notInitialRun: true,
      noExitRuntime: true,
    });
    setSorters(getInitializedSorters(quickSortModule, countSortModule));
    const arrayGenerator = new ArrayGenerator({
      countSort: countSortModule,
      quickSort: quickSortModule,
    });
    const array = arrayGenerator.newArrayWithRandomValues(
      PrototypeSortJSOfListToGenerate,
      dataTypeOfListToGenerate,
      lowerBoundListToGenerate,
      upperBoundListToGenerate
    );
    setLastArrayGenerator(arrayGenerator);
    setUnsortedListSample(Array.from(array.jsArray.slice(0, 10)));
    setGeneratedList(array);
  }

  const numberInputsHelper: Record<
    string,
    {
      val: number | undefined;
      setter: React.Dispatch<React.SetStateAction<number | undefined>>;
    }
  > = {
    "Length of List": {
      val: PrototypeSortJSOfListToGenerate,
      setter: setLengthOfListToGenerate,
    },
    "Lowest Value in List": {
      val: lowerBoundListToGenerate,
      setter: setLowerBoundListToGenerate,
    },
    "Highest Value in List": {
      val: upperBoundListToGenerate,
      setter: setUpperBoundListToGenerate,
    },
  };
  function getBlankTableData(): Record<TableColNames, string>{
    const r: Record<TableColNames, string> = {
      countCPP: "-",
      quickCPP: "-",
      countJS: "-",
      quickJS: "-",
      prototypeJS: "-",
      dataType: "-",
      arrayLength: "-",
      lowerBound: "-",
      upperBound: "-"
    };
    return r;

  }
  const getTableData = useCallback(() => {
    assertDefined(sortResults);
    const keys = objectKeys(sortResults[0]);
    //@ts-expect-error
    const data: Record<TableColNames,string[]> = {};
    //fill the object with blank arrays
    keys.forEach((key) => {
      data[key] = [];
    });
    //fill in the actual data
    sortResults.forEach((res: SortResults) => {
      const dT: DataTypeName = res.dataType;
      keys.forEach((key) => {
        assert(key in res);
        const valTypeIsObject =
          key === "countCPP" ||
          key === "countJS" ||
          key === "prototypeJS" ||
          key === "quickCPP" ||
          key == "quickJS";
        if (key === "dataType") {
          data[key].push(res[key]);
        } else if (valTypeIsObject) {
          let val = res[key].runtime.toFixed(2);
          //@ts-expect-error
          if (val !== val || isNaN(val)) {
            val = "NA";
          }
          data[key].push(val);
        } else {
          data[key].push(parseFloat(res[key].toString()).toFixed(2));
        }
      });
    });
    return data;
  }, [sortResults]);

  function getAverage(type: SortingAlgorithmName){
    if (!sortResults) return 0;
    let sum  = 0.0;
    let count = 0.0;
    sortResults.forEach((res: SortResults) => {
      if (!isFinite(res[type].runtime))return;
      const divisor = res[type].result.length / 10000;
      // console.log(divisor);
      sum += res[type].runtime / divisor;
      count++;
    });
    return sum / count;
  }

  return (
    <div>
      <h1>Sheldon Frith's Web Assembly Sorting Tester</h1>
      <h2>Randomly Generate an Unsorted List:</h2>
      {objectKeys(numberInputsHelper).map((readableName) => {
        return (
          <>
          <label>{readableName}  </label>
          <input
            key={readableName}
            placeholder={readableName}
            type="number"
            value={numberInputsHelper[readableName].val}
            onChange={(e) =>
              numberInputsHelper[readableName].setter(e.target.valueAsNumber)
            }
          />
          <br/>
          </>
        );
      })}
      <label>Data Type   </label>
      <select
        onChange={(e) =>
          setDataTypeOfListToGenerate(e.target.value as DataTypeName)
        }
      >
        {objectKeys(dataTypeNamesToReadableNames).map((dataType) => {
          return (
            <option key={dataType} value={dataType}>
              {dataTypeNamesToReadableNames[dataType]}
            </option>
          );
        })}
      </select>
      <br/>
      <button
        disabled={
          waitingForSort ||
          PrototypeSortJSOfListToGenerate === undefined ||
          lowerBoundListToGenerate === undefined ||
          upperBoundListToGenerate === undefined ||
          dataTypeOfListToGenerate === undefined
        }
        onClick={onGenerateClick}
      >
        Generate
      </button>
      <div>
        <h4> Generated List (unsorted sample)</h4>

        {unsortedListSample ? (
          unsortedListSample.map((val: number, index: number) => {
            return (
              <span key={index}>
                {val.toFixed(2)}{" "}
                {index >= unsortedListSample.length - 1 ? "" : ","}
              </span>
            );
          })
        ) : (
          <> </>
        )}
      </div>
      <h2> Sort the List:</h2>
      <button disabled={(generatedList === undefined)} onClick={(generatedList===undefined)?()=>{}:onSortClick}>
        {(generatedList===undefined)?sortedListSample===undefined?'No List to Sort':'Already Sorted':'Sort'}
      </button>
      <div>
        <h4> Generated List (sorted)</h4>
        {sortedListSample ? (
          sortedListSample.map((val: number, index: number) => {
            return (
              <span key={index}>
                {val.toFixed(2)}{" "}
                {index >= sortedListSample.length - 1 ? "" : ","}
              </span>
            );
          })
        ) : (
          <> </>
        )}
      </div>
      <div>
        
          <div>
            <h2>Results</h2>
            <i>
              Note: Quick Sort algorithms not applicable if data type is
              floating point.
            </i>
            <Table minRows={5} numRows={sortResults?sortResults.length +1:0} data={sortResults?getTableData():undefined} emptyDataDict={getBlankTableData()}/>
          </div>
      </div>
      {sortResults?
      <BarChart 
      datasetNamesInOrder={["Average Time (ms) * 10000 / Array Length"]} 
      xAxisLabelsInOrder={["C++ Quick Sort","C++ Counting Sort", "JS Quick Sort", "JS Counting Sort", "JS Prototype Sort"]} 
      dataByDatasetName={{
        "Average Time (ms) * 10000 / Array Length": [
          getAverage("quickCPP"),
          getAverage("countCPP"),
          getAverage("quickJS"),
          getAverage("countJS"),
          getAverage("prototypeJS")
        ]
      }}      
      ></BarChart>
      : <></>}
      <h2> View Code</h2>
      <select onChange={(e) => setCodeToDisplay(e.target.value)}>
        <option value="cppQuickSort">C++ Quick Sort</option>
        <option value="cppCountSort">C++ Count Sort</option>
        <option value="jsQuickSort">JS Quick Sort</option>
        <option value="jsCountSort">JS Count Sort</option>
      </select>
      {codeToDisplay === "cppQuickSort" ? (
        <CodeSnippet language="clike" code={CPPQuickSortCode} />
      ) : codeToDisplay === "cppCountSort" ? (
        <CodeSnippet language="clike" code={CPPCountingSortCode} />
      ) : codeToDisplay === "jsQuickSort" ? (
        <CodeSnippet language="javascript" code={JSQuickSortCode} />
      ) : codeToDisplay === "jsCountSort" ? (
        <CodeSnippet language="javascript" code={JSCountingSortCode} />
      ) : (
        <></>
      )}
    </div>
  );
};
export default SortingDemonstrator;
