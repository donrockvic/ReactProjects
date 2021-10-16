import moment from 'moment';

import filterReducer from '../../reducers/filters';

test('Should setup default filter values', () => {
    const state = filterReducer(undefined, {type: '@@INT'});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
});

test('Should set sortBy to amount', () => {
    const state = filterReducer(undefined, {type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount')
});



test('should set sortBy to date', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };

    const action = {type: 'SORT_BY_DATE'};
    const state = filterReducer(currentState, action);
    expect(state.sortBy).toBe('date')
});

test('Should set text filter', () => {
    const strs =  'this is my filter';
    const state = filterReducer(undefined, {type: 'SET_TEXT_FILTER', strs});

    expect(state.text).toBe(strs);
});


test('Should set startDate filter', () => {
    const date = moment();
    const state = filterReducer(undefined, {type: 'SET_START_DATE', date});
    expect(state.startDate).toEqual(date);
});


test('Should set endDate filter', () => {
    const date = moment().endOf('month')
    const action = {
        type: 'SET_END_DATE',
        date
    };
    const state = filterReducer(undefined, action);
    expect(state.endDate).toEqual(date);
});
