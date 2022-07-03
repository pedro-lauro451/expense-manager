import React, { useState } from 'react';
import './NewExpense.css';
import './NewExpenseForm.css';

const NewExpenseForm = () => {
    //document.getElementById('').addEventListener('click', () => {});

    const [inputTitle, setInputTitle] = useState('');
    const [inputAmount, setInputAmount] = useState('');
    const [inputDate, setInputDate] = useState('');

    // const [inputUser, setInputUser] = useState({
    //     inputTitle: '',
    //     inputAmount: '',
    //     inputDate: ''
    // });

    const titleChangeHandler = (event) => {

       setInputTitle(event.target.value);

       //console.log(event.target.value);

        // setInputUser({
        //     ...inputUser,
        //     inputTitle: event.target.value,
        // });
        
        // setInputUser( (prevState) => {
        //     return {
        //         ...prevState,
        //         inputTitle: event.target.value
        //     };
        // } );
    };

    const amountChangeHandler = (event) => {

        setInputAmount(event.target.value);

        // setInputUser({
        //     ...inputUser,
        //     inputAmount: event.target.value,
        // });

        // setInputUser( (prevState) => {
        //     return {
        //         ...prevState,
        //         inputUser: event.target.value
        //     };
        // } );
    };

    const dateChangeHandler = (event) => {

        setInputDate(event.target.value);

        // setInputUser({
        //     ...inputUser,
        //     inputDate: event.target.value,
        // });

        // setInputUser( (prevState) => {
        //     return {
        //         ...prevState,
        //         inputDate: event.target.value
        //     };
        // } );
    };

    const submitHandler = (event) => {
        
        event.preventDefault();

        const expenseData = {
            title: inputTitle,
            amount: inputAmount,
            date: new Date(inputDate)
        };

        console.log(expenseData);

        setInputTitle('');
        setInputAmount('');
        setInputDate('');
    };

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
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default NewExpenseForm;