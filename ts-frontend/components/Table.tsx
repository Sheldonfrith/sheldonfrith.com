import React, {
  useState,
  useEffect,
  useContext,
  useCallback,
  useRef,
  ReactNode,
} from "react";
import { objectKeys } from "../lib/ObjectKeys";

interface TableProps {
  data: Record<string, string[]>;
  numRows: number
}
const Table: React.FunctionComponent<TableProps> = ({ data, numRows }) => {

  return (
    <table>
      {Array(numRows).fill(0).map((nan, rowInd) => {
        if (rowInd === 0) {
          return (
            <thead key={"header"}>
              {objectKeys(data).map((colName) => (
                <th key={colName}>{colName}</th>
              ))}
            </thead>
          );
        } else {
          const thisRowData = objectKeys(data).map(
            (col) => data[col][rowInd - 1]
          );
          return (
            <tr key={objectKeys(data)[rowInd]}>
              {thisRowData.map((val) => (
                <td key={JSON.stringify(val)}>{val}</td>
              ))}
            </tr>
          );
        }
      })}
    </table>
  );
};
export default Table;
