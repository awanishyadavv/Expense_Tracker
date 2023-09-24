import React, {useState} from "react";

import './ExpenseForm.css';

const ExpenseForm = (props) => {

    // useState method to change the data recieved by form and keep it
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");


    // Event Handler to set data in the useState
    const titleChangeHandler = (event) =>{
        setEnteredTitle(event.target.value);
    };

    const amountChangeHandler = (event) =>{
        setEnteredAmount(event.target.value);
    };
    const dateChangeHandler = (event) =>{
        setEnteredDate(event.target.value);
    };

    const submitHandler = (event) =>{

        // prevent page from reloading
        event.preventDefault();

        // creating object for recieved user input
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData);
        // Reset Form value for user
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };


    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Description</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={enteredDate} onChange={dateChangeHandler}/>
                </div>
            <div className="new-expense__action">
                <button type="submit">Add Expenses</button>
            </div>
            </div>
        </form>
    );
}
export default ExpenseForm;