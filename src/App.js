import React, { useState, useEffect } from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import Lists from "./components/Lists";
import Alert from "./components/Alert";
import { v4 as uuid } from "uuid";

const initialExpenses = localStorage.getItem("expenses")
  ? JSON.parse(localStorage.getItem("expenses"))
  : [];
function App() {
  const [expenses, setExpenses] = useState(initialExpenses);
  const [charge, setCharge] = useState("");
  const [amount, setAmount] = useState("");
  const [alert, setAlert] = useState({ show: false });
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState(0);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const handleCharge = (e) => {
    setCharge(e.target.value);
  };
  const handleAmount = (e) => {
    setAmount(e.target.valueAsNumber);
  };
  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false });
    }, 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (charge !== "" && amount > 0) {
      if (edit) {
        let newExpenses = expenses.map((item) => {
          return item.id === id ? { ...item, charge, amount } : item;
        });
        setExpenses(newExpenses);
        setEdit(false);
      } else {
        const newExpense = { id: uuid(), charge, amount };
        setExpenses([...expenses, newExpense]);
        handleAlert({ type: "success", text: "아이템 생성" });
      }
      setCharge("");
      setAmount("");
    } else {
      handleAlert({
        type: "danger",
        text: `비용을 입력 해주세요`,
      });
    }
  };

  const handleDelete = (id) => {
    let filterExpenses = expenses.filter((item) => item.id !== id);
    setExpenses(filterExpenses);
    handleAlert({ type: "danger", text: "아이템 삭제" });
  };

  const handleEdit = (id) => {
    let expense = expenses.find((item) => item.id === id);
    let { charge, amount } = expense;
    setCharge(charge);
    setAmount(amount);
    setEdit(true);
    setId(id);
  };

  const handleRemoveClick = () => {
    setExpenses([]);
    localStorage.setItem("expenses", JSON.stringify([]));
  };

  return (
    <main className="main-container">
      <h1 style={{ fontSize: "2rem" }}> 예산 계산기 </h1>
      {alert.show && <Alert type={alert.type} text={alert.text} />}
      <div style={{ width: "100%", backgroundColor: "white", padding: "1rem" }}>
        <ExpenseForm
          handleSubmit={handleSubmit}
          charge={charge}
          handleCharge={handleCharge}
          amount={amount}
          handleAmount={handleAmount}
          edit={edit}
        />
        <Lists
          expenses={expenses}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          handleRemoveClick={handleRemoveClick}
        />
      </div>

      <div
        style={{ display: "flex", justifyContent: "end", marginTop: "1rem" }}
      >
        <p style={{ fontSize: "2rem" }}>
          총 지출:₩{" "}
          {expenses.reduce((acc, curr) => acc + parseInt(curr.amount, 10), 0)}
        </p>
      </div>
    </main>
  );
}

export default App;
