import React from "react";

function Questions({ question, questionNumber }) {
  return (
    <>
      <strong>
        {questionNumber}: {question}
      </strong>
      <br />
      <br />
    </>
  );
}

export default Questions;
