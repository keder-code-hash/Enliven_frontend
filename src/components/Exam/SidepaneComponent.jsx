import { useState } from "react";
function Sidepane({ qno, onButtonClick, selectedIndex }) {
  const [questionNumber, setQuestionNumber] = useState([...Array(qno).keys()]);

  return (
    <div
      style={{
        boxShadow:
          "rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset",
        padding: "15px",
        borderRadius: "8px",
        marginTop: "2rem",
      }}
    >
      {questionNumber.map((_, index) => (
        <button
          className={
            index === selectedIndex ? "btn btn-primary" : "btn btn-secondary"
          }
          style={{ margin: "5px" }}
          key={index}
          onClick={(e) => onButtonClick(Number(e.target.innerHTML))}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
}

export default Sidepane;
