import "./App.css";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const [day, setDay] = useState(new Date().toDateString());

  function addDays(count) {
    let date = new Date();
    date.setDate(date.getDate() + count + step);
    // console.log(date,count);
    return date.toDateString();
  }
  function subDays(count) {
    let date = new Date();
    date.setDate(date.getDate() + count - step);
    // console.log(date,count);
    return date.toDateString();
  }

  function handleStepIncreament() {
    setStep((s) => s + 1);
  }

  function handleCountIncreament() {
    setCount((c) => c + step);
    console.log(count);
    const date = addDays(count);
    setDay(date);
  }

  function handleStepDecrement() {
    if (step > 1) setStep((s) => s - 1);
  }

  function handleCountDecrement() {
    setCount((c) => c - step);
    const date = subDays(count);
    setDay(date);
  }
  return (
    <div>
      <div>
        <button onClick={handleStepDecrement}>-</button>
        <span> Step : {step} </span>
        <button onClick={handleStepIncreament}>+</button>
      </div>
      <br />
      <div>
        <button onClick={handleCountDecrement}>-</button>
        <span> Count : {count} </span>
        <button onClick={handleCountIncreament}>+</button>
      </div>

      {count === 0 && <p>Today is : {day}</p>}
      {count > 0 && (
        <p>
          {Math.abs(count)}{" "}
          {Math.abs(count) === 1 || count === 0 ? "day" : "days"} from today is
          : {day}
        </p>
      )}
      {count < 0 && (
        <p>
          {Math.abs(count)}{" "}
          {Math.abs(count) === 1 || count === 0 ? "day" : "days"} before today
          is : {day}
        </p>
      )}
    </div>
  );
}
