import React from 'react';
import ExpenseForm from './ExpenseForm';

import './NewExpense.css';

const NewExpense = (props) => {

    // Creating function to recieve data from ExpenseForm.js and forwarding that data to the App.js
    const saveExpenseDataHandler = (enteredExpenseData) =>{
        const expenseData = {
            ...enteredExpenseData,
            id:Math.random().toString()
        }
        props.onAddExpense(expenseData);
    };

    return(
        <div className='new-expense'>
            <ExpenseForm  onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    );
}

export default NewExpense;