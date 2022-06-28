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
import {  assertIsType, isKeyOf } from "../../lib/TypeHelpers";
import Table from "../Table";

interface SortResults
  extends Record<SortingAlgorithmName, { result: number[]; runtime: number }> {
  dataType: DataTypeName;
  arrayLength: number;
  lowerBound: number;
  upperBound: number;
}

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
  const [listUsedInLastSort, setListUsedInLastSort] = useState<JsAndCArray>();
  const [startTimeLastSortCall, setStartTimeLastSortCall] = useState<number>();
  const [waitingForSort, setWaitingForSort] = useState<boolean>(false);
  const [sortResults, setSortResults] = useState<SortResults[]>();
  const [sorters, setSorters] =
    useState<Record<SortingAlgorithmName, SortingAlgorithm>>();
  const [lastArrayGenerator, setLastArrayGenerator] =
    useState<ArrayGenerator>();

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
    setSortResults((prev) => {
      if (!prev) return [resultsAndTimings];
      const clone = [...prev];
      clone.push(resultsAndTimings);
      console.log(clone)
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

  const getTableData = useCallback(()=>{
      assertDefined(sortResults);
      const keys = objectKeys(sortResults[0]);
      const data: any = {}
      //fill the object with blank arrays
      keys.forEach(key=>{
        data[key] = []
      });
      //fill in the actual data
      sortResults.forEach(res => {
        const dT = res.dataType;
        keys.forEach(key => {
          const valTypeIsObject = (key === 'countCPP' || key === 'countJS' || key === 'prototypeJS' || key === 'quickCPP' || key == 'quickJS')
          if (valTypeIsObject){
            data[key].push(res[key].runtime.toFixed(2))
          }else {
            //@ts-expect-error
            data[key].push( dT !== 'int16'? res[key].toFixed(2): res[key])

          }
        })
      })
      return data
  },[sortResults]);

  return (
    <div>
      {objectKeys(numberInputsHelper).map((readableName) => {
        return (
          <input
            key={readableName}
            placeholder={readableName}
            type="number"
            value={numberInputsHelper[readableName].val}
            onChange={(e) =>
              numberInputsHelper[readableName].setter(e.target.valueAsNumber)
            }
          />
        );
      })}
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
        Generate New List
      </button>
      <button disabled={generatedList === undefined} onClick={onSortClick}>
        Sort
      </button>
      <div>
        {sortResults ? (
          <div>
            <h2>Results</h2>
            <Table
            numRows={sortResults.length+1}
            data = {getTableData()}
            />
           
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
export default SortingDemonstrator;
