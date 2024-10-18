import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs ",
  "Invest your new income ",
];

function App() {
  const [step, stepsState] = useState(1);
  const [isOpen, isOpenState] = useState(true);

  function stepsIncrement() {
    if (step >= 1 && step <3) {
  
      stepsState((e) => e+1);
    }
  }
  function stepsDecrement() {
    if (step > 1 && step<= 3) {
      stepsState((e) => e - 1);
    }
  }
  function Open() {
    isOpenState(!isOpen);
  }

  return (

    <>
      <button className="close" onClick={Open}>&times;</button>
      {
      isOpen && (
      <div className="steps">
        <div className="numbers">
          <div className={`${step >= 1 ? "active" : ""}`}>1</div>
          <div className={`${step >= 2 ? "active" : ""}`}>2</div>
          <div className={`${step >= 3 ? "active" : ""}`}>3</div>
        </div>

        <p className="message">
          Steps - {step} : {messages[step - 1]}
        </p>

        <div className="buttons">
          <button onClick={stepsDecrement} style={{ backgroundColor: "#7950f2", color: "#ffff" }}>
            Previous
          </button>
          <button onClick={stepsIncrement} style={{ backgroundColor: "#7950f2", color: "#ffff" }}>
            Next
          </button>
        </div>
      </div>)
    }
      </>
  );
}

export default App;
