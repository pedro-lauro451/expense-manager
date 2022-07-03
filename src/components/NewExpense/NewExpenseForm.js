import React, { useState } from 'react';
import './NewExpense.css';
import './NewExpenseForm.css';

const NewExpenseForm = (props) => {

    const [inputTitle, setInputTitle] = useState('');
    const [inputAmount, setInputAmount] = useState('');
    const [inputDate, setInputDate] = useState('');
    const [inputToggler, setInputToggler] = useState(false);

    const titleChangeHandler = (event) => {

       setInputTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {

        setInputAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {

        setInputDate(event.target.value);
    };

    const submitHandler = (event) => {
        
        event.preventDefault();

        const expenseData = {
            title: inputTitle,
            amount: +inputAmount,
            date: new Date(inputDate)
        };

        props.onSaveExpenseData(expenseData);

        setInputTitle('');
        setInputAmount('');
        setInputDate('');
    };

    const TogglerHandler = (event) => {
        if(inputToggler === false)
        {
            setInputToggler(true);
        }
        else
        {
            setInputToggler(false);
        }
    };

    if(inputToggler === false)
    {
        return(
        <form onSubmit={submitHandler} className="new-expense">
            <div className="new-expense__actions__alt">
                <button type="submit" onClick={TogglerHandler}>Add New Expense</button>
            </div>
        </form>
        );
    }
    if(inputToggler === true)
        return(
            <form onSubmit={submitHandler} className="new-expense">
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Title</label>
                        <input type="text" value={inputTitle} onChange={titleChangeHandler}/>
                    </div>
                    <div className="new-expense__control">
                        <label>Amount</label>
                        <input type="number" value={inputAmount} onChange={amountChangeHandler} min="0.01" step="0.01"/>
                    </div>
                    <div className="new-expense__control">
                        <label>Date</label>
                        <input type="date" value={inputDate} onChange={dateChangeHandler} min="2022-01-01" max="2022-12-31"/>
                    </div>
                </div>
                <div className="new-expense__actions">
                <button type="submit" onClick={TogglerHandler}>Cancel</button>
                    <button type="submit">Add</button>
                </div>
            </form>
        );
};

export default NewExpenseForm;