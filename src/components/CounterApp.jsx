import React, { useState } from "react";
import style from "./CounterApp.module.css";
function CounterApp() {
  const [data, setData] = useState(0);
  function DecrementByOne() {
    setData(data - 1);
  }
  function IncrementByOne() {
    setData(data + 1);
  }
  function IncrementByTen() {
    setData(0);
    setData(data + 10);
  }
  function DecrementByTen() {
    setData(data - 10);
  }
  return (
    <div className={style.container}>
      <h1>Counter App</h1>
      <button onClick={IncrementByOne} className={style.btnOne}>
        Increment +1
      </button>

      <div className={style.container1}>
        <button onClick={IncrementByTen} classname={style.btnten}>
          Increment +10
        </button>
        <p>{data}</p>
        <button onClick={DecrementByTen} className={style.btnten1}>
          Decrement -10
        </button>
      </div>
      <button onClick={DecrementByOne} className={style.btnOne1}>
        Decrement -1
      </button>
    </div>
  );
}
export default CounterApp;
