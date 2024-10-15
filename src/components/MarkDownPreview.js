import React from "react";

const markDownPrevieew = function ({ html }) {
  return (
    <div className="preview" dangerouslySetInnerHTML={{ __html: html }}></div>
  );
};

export default markDownPrevieew;
