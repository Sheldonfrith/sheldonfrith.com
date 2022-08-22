import React, {
  useState,
  useEffect,
  useContext,
  useCallback,
  useRef,
} from "react";
import Prism from "prismjs";

interface CodeSnippetProps {
  code: string;
  language: "clike" | "typescript" | "javascript";
}
const CodeSnippet: React.FunctionComponent<CodeSnippetProps> = ({
  code,
  language,
}) => {
  //syntax highlighting
  useEffect(() => {
    Prism.highlightAll();
  }, [code, language]);
  return (
    <pre>
      <code className={`language-${language}`}>{code}</code>
    </pre>
  );
};
export default CodeSnippet;
