import React from "react";
import "../styles/App.css";

const MarkDownEditer = function (props) {
  const { data, setMarkDown } = props;
  return (
    <textarea
      className="textarea"
      onChange={(e) => setMarkDown(e.target.value)}
    ></textarea>
  );
};

export default MarkDownEditer;
