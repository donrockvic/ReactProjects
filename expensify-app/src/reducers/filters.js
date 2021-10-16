import moment from "moment";

// filters
const filterReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: moment().startOf ('month'),
    endDate: moment().endOf('month')
};

// const filterReducer = (state = filterReducerDefaultState, action) => {
export default (state = filterReducerDefaultState, action) => {
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