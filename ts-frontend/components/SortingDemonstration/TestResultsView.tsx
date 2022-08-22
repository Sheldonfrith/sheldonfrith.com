import assert from "assert";
import React, {
  useState,
  useEffect,
  useContext,
  useCallback,
  useRef,
} from "react";
import { DataTypeName } from "../../lib/arrayGenerators/ArrayGenerator";
import { objectKeys } from "../../lib/ObjectKeys";
import { SortingAlgorithmName } from "../../lib/sortingAlgorithms/All";
import { assertDefined } from "../../lib/TypeHelpers";
import BarChart from "../Misc/BarChart";
import Table from "../Misc/Table";
import { SortResults } from "./SortingDemonstrator";
import style from '../../styles/WAsmTester.module.css';
export type TableColNames =
  | SortingAlgorithmName
  | "dataType"
  | "arrayLength"
  | "lowerBound"
  | "upperBound";

export const readableColNames = [
  "Data Type",
  "Array Length",
  "Lower Bound",
  "Upper Bound",
  "C++ CountingSort",
  "C++ QuickSort",
  "JS CountingSort",
  "JS QuickSort",
  "JS PrototypeSort",
] as const;

type ReadableColNames = typeof readableColNames[any];
const tableColNamesToReadable: Record<TableColNames, ReadableColNames> = {
  dataType: "Data Type",
  arrayLength: "Array Length",
  lowerBound: "Lower Bound",
  upperBound: "Upper Bound",
  countCPP: "C++ CountingSort",
  quickCPP: "C++ QuickSort",
  countJS: "JS CountingSort",
  quickJS: "JS QuickSort",
  prototypeJS: "JS PrototypeSort",
};

interface TestResultsViewProps {
  sortResults: SortResults[] | undefined;
}
const TestResultsView: React.FunctionComponent<TestResultsViewProps> = ({
  sortResults,
}) => {
  const getTableData = useCallback(() => {
    assertDefined(sortResults);
    const keys = objectKeys(sortResults[0]);
    //@ts-expect-error
    const data: Record<TableColNames, string[]> = {};
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
    //convert keys to readable names
    //@ts-expect-error
    const dataReadableNames: Record<ReadableColNames, string[]> = {};
    keys.forEach((key) => {
      dataReadableNames[tableColNamesToReadable[key]] = data[key];
    });
    return dataReadableNames;
  }, [sortResults]);

  function getBlankTableData(): Record<ReadableColNames, string> {
    const r: Record<ReadableColNames, string> = {
      "Data Type": "-",
      "Array Length": "-",
      "Lower Bound": "-",
      "Upper Bound": "-",
      "C++ CountingSort": "-",
      "C++ QuickSort": "-",
      "JS CountingSort": "-",
      "JS QuickSort": "-",
      "JS PrototypeSort": "-",
    };
    return r;
  }
  function getAverage(type: SortingAlgorithmName) {
    if (!sortResults) return 0;
    let sum = 0.0;
    let count = 0.0;
    sortResults.forEach((res: SortResults) => {
      if (!isFinite(res[type].runtime)) return;
      const divisor = res[type].result.length / 10000;
      // console.log(divisor);
      sum += res[type].runtime / divisor;
      count++;
    });
    return sum / count;
  }

  return (
    <>
      <>
          <h2 className={style.subtitle}>Results</h2>
          <i>
            Note: Counting Sort algorithms not applicable if data type is floating
            point.
          </i>
          <Table
            minRows={5}
            numRows={sortResults ? sortResults.length + 1 : 0}
            data={sortResults ? getTableData() : undefined}
            emptyDataDict={getBlankTableData()}
          />
      </>
      <div className={style.chartContainer}>
        <BarChart
          datasetNamesInOrder={["Average Across All Your Tests"]}
          xAxisLabelsInOrder={[
            "C++ Quick Sort",
            "C++ Counting Sort",
            "JS Quick Sort",
            "JS Counting Sort",
            "JS Prototype Sort",
          ]}
          dataByDatasetName={sortResults?{
            "Average Across All Your Tests": [
              getAverage("quickCPP"),
              getAverage("countCPP"),
              getAverage("quickJS"),
              getAverage("countJS"),
              getAverage("prototypeJS"),
            ],
          }:{
            "Average Across All Your Tests": [0, 0, 0, 0, 0],
          }}
        ></BarChart>
      </div>
    </>
  );
};
export default TestResultsView;
