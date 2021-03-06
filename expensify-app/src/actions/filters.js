
//filters

export const setTextFilter = (strs='') => ({
    type: 'SET_TEXT_FILTER',
    strs
});

export const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});

export const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

export const setStartDate = (date) => ({
    type: 'SET_START_DATE',
    date

});

export const setEndDate = (date) => ({
    type: 'SET_END_DATE',
    date

})