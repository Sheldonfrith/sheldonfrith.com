import React, {
  useState,
  useEffect,
  useContext,
  useCallback,
  useRef,
} from "react";
import { JsAndCArray } from "../../lib/arrayGenerators/ArrayGenerator";
import style from '../../styles/WAsmTester.module.css';

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
    <>
      <h2 className={style.subtitle}>2. Sort the List:</h2>
      <div className={style.buttonSamplePair}>

      <button
        disabled={generatedList === undefined}
        onClick={generatedList === undefined ? () => {} : onSortClick}
        // style={{width:'100%'}}
      >
        {generatedList === undefined
          ? sortedListSample === undefined
            ? "Sort"
            : "Sort"
          : "Sort"}
      </button>
      <div className={style.listSample}>

        {sortedListSample ? (
          sortedListSample.map((val: number, index: number) => {
            return (
              <span key={index}>
                {val.toLocaleString('en',{useGrouping:false, maximumFractionDigits:2})}{" "}
                {index >= sortedListSample.length - 1 ? "" : ","}
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
export default Sorter;
