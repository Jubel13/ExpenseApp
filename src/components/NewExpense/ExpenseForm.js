import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  // const [click, setClick] = useState(false);
  // const [input, setInput] = useState({
  //   enteredTitle: "",
  //   amount: "",
  //   date: "",
  // });
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setInput({
    //   ...input,
    //   enteredTitle: event.target.value,
    // });
    // setInput((prevState) => {
    //   return {
    //     ...prevState,
    //     enteredTitle: event.target.value,
    //   };
    // });
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
    // setInput({
    //   ...input,
    //   amount: event.target.value,
    // });
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
    // setInput({
    //   ...input,
    //   date: event.target.value,
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +amount,
      date: new Date(date),
    };
    props.onSavingData(expenseData);
    setEnteredTitle("");
    setAmount("");
    setDate("");
  };

  // const submitNewHandler = (event) => {
  //   event.preventDefault();
  //   setClick(true);
  // };
  // if (click === false) {
  //   return (
  //     <form onSubmit={submitNewHandler}>
  //       <div>
  //         <button type='submit'>Add New Expenses</button>
  //       </div>
  //     </form>
  //   );
  // }
  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            type='text'
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            value={amount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2023-12-31'
            value={date}
            onChange={dateChangeHandler}
          ></input>
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
