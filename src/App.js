import "./App.css";
import React from "react";
import InputField from "./components/InputField";

// all values will be strings

// function expects a number

const decimalToBinary = (decimalNumber) => {
  if (decimalNumber >= 0) {
    if (decimalNumber === 1) return "1";
    if (decimalNumber === 0) return "0";
    let binaryNumber = "";
    while (decimalNumber !== 0) {
      let binaryChar = decimalNumber % 2;
      binaryNumber += `${binaryChar}`;
      decimalNumber = Math.floor(decimalNumber / 2);
    }
    return binaryNumber.split("").reverse().join(""); // reverse the string
  } else {
    return 0;
  }
};

// function expects string or number

const binaryToDecimal = (binaryNumber) => {
  let decimalNumber = 0;
  let binaryNumberStr = `${binaryNumber}`;
  for (let i = 0; i < binaryNumberStr.length; i++) {
    let digit = parseInt(binaryNumberStr.at(i));
    if (!isNaN(digit) && digit === 1) {
      let power = binaryNumberStr.length - 1 - i;
      decimalNumber += digit * 2 ** power;
    }
  }
  return decimalNumber;
};

function App() {
  const [decimalValue, setDecimalValue] = React.useState();
  const [binaryValue, setBinaryValue] = React.useState();

  const decimalChanged = (e) => {
    const value = e.target.value;

    let hasOnlyNumbers = true;

    for (let i = 0; i < value.length; i++) {
      let parse = parseInt(value.at(i));
      if (isNaN(parse)) {
        hasOnlyNumbers = false;
      }
    }

    if (hasOnlyNumbers) {
      setDecimalValue(value);
      setBinaryValue(decimalToBinary(parseInt(value)));
    }
  };

  const binaryChanged = (e) => {
    const value = e.target.value;

    let hasOnly01 = true;
    for (let i = 0; i < value.length; i++) {
      if (value.at(i) !== "0" && value.at(i) !== "1") {
        hasOnly01 = false;
      }
    }

    if (hasOnly01) {
      setBinaryValue(value);
      setDecimalValue(binaryToDecimal(parseInt(value)));
    }
  };

  return (
    <div className="App">
      <h1>Numbering Systems Converter</h1>
      <InputField
        label="Decimal"
        onChange={decimalChanged}
        value={decimalValue}
      />
      <InputField label="Binary" onChange={binaryChanged} value={binaryValue} />
    </div>
  );
}

export default App;
