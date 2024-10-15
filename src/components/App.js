import React, { useEffect, useState } from "react";
import MarkDownEditer from "./MarkDownEditor";
import MarkDownPreview from "./MarkDownPreview";
import "../styles/App.css";
const App = function () {
  const [markDown, setMarkDown] = useState("");
  const [html, setHtml] = useState("");

  useEffect(() => {
    const convertedHtml = markDown
      .replace(/^# (.*$)/gim, "<h1>$1</h1>") // Headers
      .replace(/^## (.*$)/gim, "<h2>$1</h2>")
      .replace(/^### (.*$)/gim, "<h3>$1</h3>")
      .replace(/\*\*(.*)\*\*/gim, "<strong>$1</strong>") // Bold
      .replace(/\*(.*)\*/gim, "<em>$1</em>") // Italics
      .replace(/\n/gim, "<br/>") // Line breaks
      .replace(/\n\n/gim, "<p></p>"); // Paragraphs

    setHtml(convertedHtml);
  }, [markDown]);

  return (
    <div className="app">
      <MarkDownEditer data={markDown} setMarkDown={setMarkDown} />
      <MarkDownPreview html={html} />
    </div>
  );
};

export default App;
