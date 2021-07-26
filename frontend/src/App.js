import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import TimePicker from "react-time-picker";

function App() {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [bedTime, setBedTime] = useState("");
  const [totalOwed, setTotalOwed] = useState(0);
  const [pay, setPay] = useState(0);

  const calculate = (started, bed, finished) => {
    const hourSplits = {
      first: 0,
      second: 0,
      third: 0,
      totalPay: 0
    }

    hourSplits.first = bed - started;
    hourSplits.second = 24 - bed;
    hourSplits.third = finished - 24;
    return (hourSplits.first * 12 + hourSplits.second * 8 + hourSplits.third * 16)
  }

  useEffect(() => {
    if (start && end && bedTime) {
      let startNum =
        parseInt(start.split(":")[0]) + parseFloat(start.split(":")[1] / 60);
      let endNum =
        parseInt(end.split(":")[0]) + parseFloat(end.split(":")[1] / 60);
      let bedTimeNum = parseInt(bedTime.split(":")[0]) + parseFloat(bedTime.split(":")[1] / 60);
      if(endNum < startNum) endNum += 24;
      // if(bedTimeNum < startNum) bedTimeNum += 24;
      setPay(calculate(startNum, bedTimeNum, endNum));
    }
  }, [start, end, bedTime]);
  return (
    <div>
      <h3>Shift Start</h3>
      <TimePicker onChange={(e) => setStart(e)} />
      <h3>Shift End</h3>
      <TimePicker onChange={(e) => setEnd(e)} />
      <h3>Bed Time</h3>
      <TimePicker onChange={(e) => setBedTime(e)} />
      <br></br>
  <h2>TOTAL PAY: ${pay}</h2>
    </div>
  );
}

export default App;
