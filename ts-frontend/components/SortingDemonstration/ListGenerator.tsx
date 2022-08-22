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
} from "../../lib/sortingAlgorithms/All";
import { SortingAlgorithm } from "../../lib/sortingAlgorithms/SortingAlgorithm";
import { assertDefined } from "../../lib/TypeHelpers";
import style from "../../styles/WAsmTester.module.css";

function assertNotWaitingForSort(wForSort: boolean): asserts wForSort is false {
  if (wForSort) {
    throw new Error("Assertion failed. We ARE waiting for sort.");
  }
}

interface ListGeneratorProps {
  setGeneratedList: (generatedList: JsAndCArray | undefined) => void;
  generatedListLength: number;
  waitingForSort: boolean;
  setSorters: (sorters: Record<SortingAlgorithmName, SortingAlgorithm>) => void;
  setLastArrayGenerator: (arrayGenerator: ArrayGenerator) => void;
}
const ListGenerator: React.FunctionComponent<ListGeneratorProps> = ({
  setGeneratedList,
  waitingForSort,
  setSorters,
  setLastArrayGenerator,
  generatedListLength
}) => {
  const [lengthOfListToGenerate, setLengthOfListToGenerate] = useState<
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
  const [unsortedListSample, setUnsortedListSample] = useState<number[]>();

  async function onGenerateClick() {
    assertNotWaitingForSort(waitingForSort);
    assertDefined(lengthOfListToGenerate);
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
      lengthOfListToGenerate,
      dataTypeOfListToGenerate,
      lowerBoundListToGenerate,
      upperBoundListToGenerate
    );
    setLastArrayGenerator(arrayGenerator);
    setUnsortedListSample(Array.from(array.jsArray.slice(0, 30)));
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
      val: lengthOfListToGenerate,
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

  return (
    <>
      <h2 className={style.subtitle}>1. Generate an Unsorted, Random List:</h2>
      <div className={style.inputsContainer}>

      {objectKeys(numberInputsHelper).map((readableName) => {
        return (
          <div key={readableName} className={style.labelInputPair}>
            <label>{readableName} </label>
            <input
              key={readableName}
              placeholder={readableName}
              type="number"
              value={numberInputsHelper[readableName].val}
              onChange={(e) =>
                numberInputsHelper[readableName].setter(e.target.valueAsNumber)
              }
            />
          </div>
        );
      })}
      <div className={style.labelInputPair}>
        <label>Data Type </label>
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
      </div>
      </div>
      <div className={style.buttonSamplePair}>
      <button
        disabled={
          waitingForSort ||
          lengthOfListToGenerate === undefined ||
          lowerBoundListToGenerate === undefined ||
          upperBoundListToGenerate === undefined ||
          dataTypeOfListToGenerate === undefined
        }
        onClick={onGenerateClick}
      >
        Generate
      </button>
      <div className={style.listSample}>
        {/* <h4> Generated List (unsorted sample)</h4> */}

        {unsortedListSample ? (
          unsortedListSample.map((val: number, index: number) => {
            const finalChar = generatedListLength > unsortedListSample.length ? "..." : "";
            return (
              <span key={index}>
                {val.toLocaleString('en',{useGrouping:false,maximumFractionDigits:2})}{" "}
                {index >= unsortedListSample.length - 1 ? finalChar : ","}
              </span>
            );
          })
        ) : (
          <> </>
        )}
      </div>
      </div>
    </>
  );
};
export default ListGenerator;
