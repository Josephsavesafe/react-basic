import { useEffect, useState } from "react";
// import { useEffect, useState, useReducer } from "react";
import FormComponent from "./component/FormComponent.js";
import ReportComponent from "./component/ReportComponent";
import Title from "./component/title.js";
import DataContext from "./data/DataContext";
import "./App.css";
import logo from "./logo.svg";
import { BrowserRouter as Router,Swtich,Route,Link } from "react-router-dom";

function App() {
  const initData = [
    { id: 1, title: "aaa", amount: -111 },
    { id: 2, title: "bbb", amount: 222 },
    { id: 3, title: "ccc", amount: -333 },
    { id: 4, title: "ddd", amount: 444 },
  ];

  const [items, setItems] = useState(initData);
  const [reportIncome, setReportIncome] = useState(0);
  const [reportExpense, setReportExpense] = useState(0);

  const onAddNewItem = (newItem) => {
    setItems((prevItem) => {
      return [newItem, ...prevItem];
    });
  };
  useEffect(() => {
    const amounts = items.map((items) => items.amount);
    const income = amounts
      .filter((element) => element > 0)
      .reduce((total, element) => (total += element), 0);
    const expense =
      amounts
        .filter((element) => element < 0)
        .reduce((total, element) => (total += element), 0) * -1;
    setReportIncome(income);
    setReportExpense(expense);
  }, [items]);

  // Reducer state
  // const [count, setCount] = useState(0);
  // const [showReport, setShowReport] = useState(false);
  // const reducer = (state, action) => {
  //   switch (action.type) {
  //     case "SHOW":
  //       return setShowReport(true);
  //     case "HIDE":
  //       return setShowReport(false);
  //   }
  // };
  // const [result, dispatch] = useReducer(reducer, showReport);
  return (
    // <DataContext.Provider value={"ReAcT"}>
    <DataContext.Provider
      value={{
        income: reportIncome,
        expense: reportExpense,
      }}
    >
      <div className="App">
        <header className="App-header">
          <div className="container">
            <h1>Test Form</h1>
            <Title items={items} />
            <FormComponent onAddItem={onAddNewItem} />
            <ReportComponent />
            {/* <button onClick={() => dispatch({ type: "SHOW" })}>เเสดง</button>
            <button onClick={() => dispatch({ type: "HIDE" })}>ซ่อน</button> */}
            {/* {showReport && <ReportComponent />} */}
          </div>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        {/* <div>
          <h1>{result}</h1>
          <button onClick={() => dispatch({ type: "ADD", playload: 10 })}>
            เพิ่ม
          </button>
          <button onClick={() => dispatch({ type: "SUB", playload: 10 })}>
            ลด
          </button>
          <button onClick={() => dispatch({ type: "CLEAR" })}>ล้าง</button>
        </div> */}
      </div>
    </DataContext.Provider>
  );
}

export default App;
