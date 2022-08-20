import React, {
  useState,
  useEffect,
  useContext,
  useCallback,
  useRef,
} from "react";
import {
  CPPCountingSortCode,
  CPPQuickSortCode,
  JSCountingSortCode,
  JSQuickSortCode,
} from "../../lib/Constants";
import CodeSnippet from "../CodeSnippet";

type CodeNameTypes =
  | "cppCountingSort"
  | "cppQuickSort"
  | "jsCountingSort"
  | "jsQuickSort";

interface CodeViewProps {}
const CodeView: React.FunctionComponent<CodeViewProps> = ({}) => {
  const [codeToDisplay, setCodeToDisplay] =
    useState<CodeNameTypes>("cppQuickSort");
  return (
    <div>
      <h2> View Code</h2>
      <select
        onChange={(e) => setCodeToDisplay(e.target.value as CodeNameTypes)}
      >
        <option value="cppQuickSort">C++ Quick Sort</option>
        <option value="cppCountingSort">C++ Count Sort</option>
        <option value="jsQuickSort">JS Quick Sort</option>
        <option value="jsCountingSort">JS Count Sort</option>
      </select>
      {codeToDisplay === "cppQuickSort" ? (
        <CodeSnippet language="clike" code={CPPQuickSortCode} />
      ) : codeToDisplay === "cppCountingSort" ? (
        <CodeSnippet language="clike" code={CPPCountingSortCode} />
      ) : codeToDisplay === "jsQuickSort" ? (
        <CodeSnippet language="javascript" code={JSQuickSortCode} />
      ) : codeToDisplay === "jsCountingSort" ? (
        <CodeSnippet language="javascript" code={JSCountingSortCode} />
      ) : (
        <></>
      )}
    </div>
  );
};
export default CodeView;
