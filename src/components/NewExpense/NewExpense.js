import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [click, setClick] = useState(false);
  const savingDataHandler = (data) => {
    const expenseData = {
      ...data,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
    setClick(false);
  };
  const startEditHandler = () => {
    setClick(true);
  };

  const stopEditHandler = () => {
    setClick(false);
  };
  return (
    <div className='new-expense'>
      {!click && <button onClick={startEditHandler}>Add New Expense</button>}
      {click && (
        <ExpenseForm
          onSavingData={savingDataHandler}
          onCancel={stopEditHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
