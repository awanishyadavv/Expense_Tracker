import React, {useState} from 'react';

import NewExpense from './Components/NewExpenses/NewExpense.js';
import Expenses from './Components/Expenses/Expenses.js';

let Dummy_Expense = [
    { 
        id: 'e1',
        title: 'School Fee',
        amount: 250,
        date: new Date(2021, 5, 12)
    },
];


const App = () => {
    const [expenses, setExpenses] = useState(Dummy_Expense);
    const addExpenseHandler = (expense) =>{
        const updatedExpense = [expense, ...expenses];
        setExpenses(updatedExpense);
    }

    return(
        <div>
            <NewExpense onAddExpense={addExpenseHandler}/>
            <Expenses item={expenses}/>
        </div>
    );
}

export default App;