import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpense from '../selectors/expences';

export const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        {props.expenses.length === 0} ? (
            <p> No Expense </p>
        ) : (
            {props.expenses.map((expense)=>{
                return <ExpenseListItem key={expense.id} {...expense}  />
            })}
        )
        
    </div>
);

const mapStateToProps = (state) =>{
    return {
        expenses: selectExpense(state.expenses, state.filter)
    };
};

export default  connect(mapStateToProps)(ExpenseList);


