import { createStore, combineReducers } from 'redux';
import { v4 as uuidv4 } from 'uuid';

// Actions

// ADD_EXPENSE
const addExpense = (
    { 
        description='', 
        note='', 
        amount=0, 
        createdAt=0 
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuidv4(),
        description,
        note,
        amount,
        createdAt
    }
});


const removeExpense = ({id}) => ({
    type: 'REMOVE_EXPENSE',
    id
});


const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

//filters

const setTextFilter = (strs='') => ({
    type: 'SET_TEXT_FILTER',
    strs
});

const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});

const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

const setStartDate = (date) => ({
    type: 'SET_START_DATE',
    date

});

const setEndDate = (date) => ({
    type: 'SET_END_DATE',
    date

})

//  Expenses Reducers

const expensesReducerDefaultState = [];

const expenseReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            // return state.concat(action.expense);
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return state.filter(({id}) => id != action.id );
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id===action.id) {
                    return {
                        ...expense, ...action.updates
                    };
                }else{
                    return expense;
                }
            });
        default:
            return state;
    }
};

// filters
const filterReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filterReducer = (state = filterReducerDefaultState, action) => {
    switch(action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.strs
            };
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            };
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            };
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.date
            };
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.date
            };
        default:
            return state;
    }
};





// Get visibel expenses
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
         
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if(sortBy === 'date') {
            return a.createdAt<b.createdAt? 1: -1;
        }else if(sortBy === 'amount'){
            return a.amount < b.amount? 1: -1;
        }
    });
};

// Store
const store = createStore(
    combineReducers({
        expenses: expenseReducer,
        filter: filterReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpense = getVisibleExpenses(state.expenses, state.filter)
    console.log(visibleExpense);
});


// All dispatch
// Expense dipatch
const expenseOne = store.dispatch(addExpense({description: 'Rent', amount:100, createdAt: 1000})); 
const expenseTwo = store.dispatch(addExpense({description: 'Cofee', amount:10, createdAt: -100})); 

// store.dispatch(removeExpense({id:expenseOne.expense.id}));

// store.dispatch(editExpense(expenseTwo.expense.id, {amount:500}));

//filter dispatch
// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter(''));

// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

store.dispatch(setStartDate(-125));
// store.dispatch(setStartDate());
store.dispatch(setEndDate(245));


// const demoState = {
//     expenses: [{
//         id: 'asd24rdrfs',
//         description: 'January Rent',
//         note: 'This was the final payment for that address',
//         amount: 54500,
//         createdAt: 0
//     }],

//     filters: {
//         text: 'rent',
//         sortBy: 'amount', //date or amount
//         startDate: undefined,
//         endDate: undefined
//     }
//  };

 