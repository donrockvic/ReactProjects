import moment from 'moment';

import expenseReducer from '../../reducers/expences';
import expenses from '../fixtuers/expenses';

test('should set default state', () => {
    const state = expenseReducer(undefined, {type: '@@INT'});
    expect(state).toEqual([]);
});


test('Should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expenseReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});


test('Should not remove expense by id if not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-23'
    };
    const state = expenseReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[1], expenses[2]]);
});

test('should an an expense', () => {
    const expense = {
        id: '109',
        description: 'laptop',
        note: 'my new laptop',
        createdAt: 20000,
        amount: 294400
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense
    };
    const state =  expenseReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);
});

test('Should edit an expense', () => {
    const amount  = 12222220;
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            amount
        }
    };
    const state =  expenseReducer(expenses, action);
    expect(state[1].amount).toBe(amount);
});

test('Should not edit an expense if ID not found', () => {
    const amount  = 12222220;
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            amount
        }
    };
    const state =  expenseReducer(expenses, action);
    expect(state).toEqual(expenses);
});