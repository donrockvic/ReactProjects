import moment from 'moment';

import {setStartDate,sortByAmount, setEndDate, setTextFilter, sortByDate} from '../../actions/filters';


test('should generate set start date action objects', () => {
    const action =  setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        date: moment(0)
    });
});

test('should generate set end date action objects', () => {
    const action =  setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        date: moment(0)
    });
});


test('should generate set text filter object with text value ', () => {
    const text = 'sonethig in';
    const action =  setTextFilter(text);
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        strs: text
    });
});


test('should generate set text filter object with default', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        strs: ''
    });
});

test('should generate acton object for sort by date', () => {
    expect(sortByDate()).toEqual({type:'SORT_BY_DATE'});
});

test('should generate acton object for sort by amount', () => {
    expect(sortByAmount()).toEqual({type:'SORT_BY_AMOUNT'});
});