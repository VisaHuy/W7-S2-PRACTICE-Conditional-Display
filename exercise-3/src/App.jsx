import React, { useState } from "react";

function App() {
  const [a, setA] = useState(""); // State to hold the value of A
  const [b, setB] = useState(""); // State to hold the value of B
  const [result, setResult] = useState(""); // State to hold the result or error message

  const onA = (e) => {
    setA(e.target.value); // Update state for A on key up
  };

  const onB = (e) => {
    setB(e.target.value); // Update state for B on key up
  };

  const computeSum = () => {
    const numA = parseFloat(a);
    const numB = parseFloat(b);

    if (isNaN(numA) || isNaN(numB)) {
      setResult("Please enter valid numbers"); // Error message if input is not a number
    } else {
      setResult(numA + numB); // Set the result as the sum of A and B
    }
  };

  return (
    <main>
      <h1>Calculator</h1>

      <label>A =</label>
      <input type="text" onKeyUp={onA} />

      <label>B =</label>
      <input type="text" onKeyUp={onB} />

      <label>A + B =</label>

      <input type="text" value={result} disabled style={{ color: isNaN(result) ? "red" : "black" }} />
      <button onClick={computeSum}>Compute</button>
    </main>
  );
}

export default App;
