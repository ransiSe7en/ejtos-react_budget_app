import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, setBudget, currency  } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    console.log("Context budget:", budget);

    // Update newBudget when context budget changes
    useEffect(() => {
        setNewBudget(budget);
    }, [budget]);

    const handleBudgetChange = (event) => {
        const newBudgetValue = parseInt(event.target.value);
        const totalExpenses = expenses.reduce((total, item) => total + item.cost, 0);
        
        if (newBudgetValue >= totalExpenses) {
            setNewBudget(newBudgetValue);
            setBudget(newBudgetValue);
        } else {
            alert("Budget cannot be lower than total expenses.");
        }
    };
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input type="number" step="10"  value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
};

export default Budget;
