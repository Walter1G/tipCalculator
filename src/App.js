import "./styles.css";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState("");
  const [service1, setService1] = useState(0);
  const [service2, setService2] = useState(0);
  let average = (service1 + service2) / 2;
  let tip = Number(average * bill);

  function handleBill(e) {
    setBill(Number(e.target.value));
  }

  function handleReset() {
    setBill(0);
    setService1(0);
    setService2(0);
  }

  return (
    <>
      <BillInput bill={bill} onBillInput={handleBill} />
      <SelectPercentage
        question={"How did you like the service? "}
        onSelect={setService1}
        value={service1}
      />
      <SelectPercentage
        question={"How did your friend like the service? "}
        onSelect={setService2}
        value={service2}
      />
      {bill > 0 ? (
        <>
          <OutPut bill={bill} tip={tip} />
          <Reset onReset={handleReset} />{" "}
        </>
      ) : (
        ""
      )}
    </>
  );
}

function BillInput({ bill, onBillInput }) {
  return (
    <form>
      <label>How much was the bill?</label>
      <input
        type="number"
        placeholder="Bill Amount"
        value={bill}
        onChange={(e) => onBillInput(e)}
      />
    </form>
  );
}
function SelectPercentage({ question, onSelect, value }) {
  return (
    <form>
      <label>{question}</label>
      <select value={value} onChange={(e) => onSelect(Number(e.target.value))}>
        <option value={0}>Disatisfied (0%)</option>
        <option value={0.05}>It was okay (5%)</option>
        <option value={0.1}>It was good (10%)</option>
        <option value={0.2}>Absolutely amaizing! (20%)</option>
      </select>
    </form>
  );
}
function OutPut({ bill, tip }) {
  return (
    <p>
      <b>{`You pay  $${bill + tip} ($${bill} + $${tip}tip)`}</b>
    </p>
  );
}
function Reset({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}
