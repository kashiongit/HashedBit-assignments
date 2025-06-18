import React, { useState } from 'react';


function Calculator() {
 
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  
  const [result, setResult] = useState(null);
 
  const [error, setError] = useState('');

  const getNumbers = () => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    if (isNaN(number1) || isNaN(number2)) {
      setError('Please enter valid numbers in both fields.');
      setResult(null); // Clear previous result
      return null;
    }
    setError(''); // Clear any previous error
    return { number1, number2 };
  };

  // Event handler for addition
  const handleAddition = () => {
    const numbers = getNumbers();
    if (numbers) {
      setResult(numbers.number1 + numbers.number2);
    }
  };

  // Event handler for subtraction
  const handleSubtraction = () => {
    const numbers = getNumbers();
    if (numbers) {
      setResult(numbers.number1 - numbers.number2);
    }
  };

  // Event handler for multiplication
  const handleMultiplication = () => {
    const numbers = getNumbers();
    if (numbers) {
      setResult(numbers.number1 * numbers.number2);
    }
  };

  // Event handler for division
  const handleDivision = () => {
    const numbers = getNumbers();
    if (numbers) {
      if (numbers.number2 === 0) {
        setError('Cannot divide by zero!');
        setResult(null); // Clear previous result
        return;
      }
      setResult(numbers.number1 / numbers.number2);
    }
  };

  return (
    <div className="calculator-container">
      <h1>Simple Calculator</h1>

      <div className="input-group">
        <label htmlFor="num1">Number 1:</label>
        <input
          id="num1"
          type="number" 
          value={num1}
          onChange={(e) => {
            setNum1(e.target.value);
            setError(''); 
            setResult(null); 
          }}
          placeholder="Enter first number"
        />
      </div>

      <div className="input-group">
        <label htmlFor="num2">Number 2:</label>
        <input
          id="num2"
          type="number"
          value={num2}
          onChange={(e) => {
            setNum2(e.target.value);
            setError(''); // Clear error on input change
            setResult(null); // Clear result on input change
          }}
          placeholder="Enter second number"
        />
      </div>

      <div className="buttons-group">
        <button onClick={handleAddition}>+</button>
        <button onClick={handleSubtraction}>-</button>
        <button onClick={handleMultiplication}>*</button>
        <button onClick={handleDivision}>/</button>
      </div>

      {error && (
        <div className="error-message">
          <p>{error}</p>
        </div>
      )}

      {result !== null && !error && (
        <div className="result-display">
          <h2>Result:</h2>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
}

export default Calculator;