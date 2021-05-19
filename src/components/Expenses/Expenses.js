import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [year, setYear] = useState("2019");

  const selectHandler = (data) => {
    setYear(data);
  };
  const filteredExpense = props.expense.filter((el) => {
    return el.date.getFullYear().toString() === year;
  });

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter selected={year} onSelect={selectHandler} />
        <ExpensesChart expenses={filteredExpense} />
        <ExpensesList items={filteredExpense} />
      </Card>
    </div>
  );
};

export default Expenses;
