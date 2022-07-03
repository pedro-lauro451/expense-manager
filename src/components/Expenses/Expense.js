import React, { useState } from 'react';
import './Expense.css';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import ExpensesChart from './ExpensesChart';
import Card from '../UI/Card';
import ExpensesList from './ExpensesList';

function Expense(props)
{
    const [inputYear, setInputYear] = useState('2022');

    const addFilterHandler = year => {
       setInputYear(year);
       console.log(year);
    }; 

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === inputYear;
    });

    return(
        <div>
            <Card className="expenses">

            <ExpensesFilter 
                currentYear={inputYear} 
                onSaveFilterData={addFilterHandler}/>
            <ExpensesChart expenses = {filteredExpenses}/>
                <ExpensesList items={filteredExpenses}/>
            </Card>
        </div>   
    );   
}

export default Expense;