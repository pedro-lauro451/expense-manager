import React from "react";
import NewExpenseForm from "./NewExpenseForm";

const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
           ...enteredExpenseData,
           id: Math.random().toString()
        };
        props.onSaveExpenseData(expenseData);
    };

    return(
        <NewExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    );
};

export default NewExpense;