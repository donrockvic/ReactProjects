//javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppRouter from './Routers/AppRouter';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import configureStore from "./store/configureStore";
import getVisibleExpenses from './selectors/expences';


//style
import 'normalize-css/normalize.css';

import './styles/styles.scss';


const store = configureStore();


// All dispatch
const expenseOne = store.dispatch(addExpense({description: 'Rent', amount:100, createdAt: 1000})); 
const expenseTwo = store.dispatch(addExpense({description: 'Cofee', amount:10, createdAt: 200})); 
const expenseThree = store.dispatch(addExpense({description: 'Water', amount:60, createdAt: 1200})); 
// store.dispatch(setTextFilter('rent'));

// setTimeout(() => {
//     store.dispatch(setTextFilter('cofee'))
// }, 3000);


const state = store.getState();
const visibleExpences = getVisibleExpenses(state.expenses, state.filter);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('root'));