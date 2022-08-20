import React, {
  useState,
  useEffect,
  useContext,
  useCallback,
  useRef,
} from "react";
import { JsAndCArray } from "../../lib/arrayGenerators/ArrayGenerator";

interface SorterProps {
  generatedList: JsAndCArray | undefined;
  onSortClick: () => void;
  sortedListSample: number[] | undefined;
}
const Sorter: React.FunctionComponent<SorterProps> = ({
  generatedList,
  onSortClick,
  sortedListSample,
}) => {
  return (
    <div>
      <h2> Sort the List:</h2>
      <button
        disabled={generatedList === undefined}
        onClick={generatedList === undefined ? () => {} : onSortClick}
      >
        {generatedList === undefined
          ? sortedListSample === undefined
            ? "No List to Sort"
            : "Already Sorted"
          : "Sort"}
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
    </div>
  );
};
export default Sorter;
