import assert from "assert";
import React, {
  useState,
  useEffect,
  useContext,
  useCallback,
  useRef,
  ReactNode,
} from "react";
import { objectKeys } from "../../lib/ObjectKeys";
import styles from "../../styles/WAsmTester.module.css";
type Row = string[];
type Col = string[];
type TableDict = Record<string, Col>;
type TableData = Row[];

interface TableProps {
  data: TableDict | undefined;
  numRows: number;
  emptyDataDict: Record<string, string>;
  minRows: number;
}
const Table: React.FunctionComponent<TableProps> = ({
  data,
  numRows,
  minRows,
  emptyDataDict,
}) => {
  if (numRows < minRows) {
    numRows = minRows;
  }
  if (!minRows) {
    assert(emptyDataDict !== undefined);
  }
  const [emptyData, setEmptyData] = useState<Row>();
  const [header, setHeader] = useState<string[]>();
  const [dataToUse, setDataToUse] = useState<TableData>();
  //setup emptyData and headers if data is undefined
  useEffect(() => {
    //console.log(emptyDataDict);
    if (!data && !header && emptyDataDict) {
      setHeader(objectKeys(emptyDataDict));
      setEmptyData(objectKeys(emptyDataDict).map((key) => emptyDataDict[key]));
    }
  }, [data, header, emptyDataDict]);
  useEffect(() => {
    if (!data) return;
    setHeader(objectKeys(data));
  }, [data, emptyData]);

  function dictToMatrixRemoveKeys(dict: TableDict) {
    return objectKeys(dict).map((key) => {
      return dict[key];
    });
  }
  function colOrientedToRowOriented(cols: Col[]): Row[] {
    const rowOriented: Row[] = [];
    cols.forEach((col) => {
      col.forEach((value, index) => {
        if (rowOriented[index] === undefined) {
          rowOriented[index] = [];
        }
        rowOriented[index].push(value);
      });
    });
    return rowOriented;
  }
  useEffect(() => {
    if (data && data[objectKeys(data)[0]].length >= numRows - 1) {
      const rowOrientedData = colOrientedToRowOriented(
        dictToMatrixRemoveKeys(data)
      );
      setDataToUse(rowOrientedData);
    } else if (!data && emptyData) {
      //fill with emptyData for numRows
      const rowOrientedData: Row[] = [];
      for (let i = 0; i < numRows; i++) {
        rowOrientedData.push(emptyData);
      }
      setDataToUse(rowOrientedData);
    } else if (data) {
      assert(emptyData);
      const dataLength = data[objectKeys(data)[0]].length;
      //combination of provided and empty data, for numRows at least
      const rowOrientedData = colOrientedToRowOriented(
        dictToMatrixRemoveKeys(data)
      );
      assert(rowOrientedData.length === dataLength);
      for (let i = rowOrientedData.length; i < numRows; i++) {
        rowOrientedData.push(emptyData);
      }
      setDataToUse(rowOrientedData);
    }
  }, [data, emptyData, numRows]);

  //console.log(dataToUse);
  return (
    <table className={styles.table}>
      <thead>
        <th colSpan={4}>List Data</th>
        <th colSpan={5}>Sorting Runtimes (ms)</th>
      </thead>

      {header && dataToUse ? (
        dataToUse.map((row: Row, rowInd) => {
          if (rowInd === 0) {
            return (
              <>
                <thead key={"header"}>
                  {header.map((colName) => (
                    <th key={colName}>{colName}</th>
                  ))}
                </thead>
                <tr key={row[0] + row[2] + rowInd}>
                  {row.map((val) => (
                    <td key={JSON.stringify(val)}>{val}</td>
                  ))}
                </tr>
              </>
            );
          } else {
            return (
              <tr key={row[0] + row[2] + rowInd}>
                {row.map((val) => (
                  <td key={JSON.stringify(val)}>{val}</td>
                ))}
              </tr>
            );
          }
        })
      ) : (
        <> </>
      )}
    </table>
  );
};
export default Table;
