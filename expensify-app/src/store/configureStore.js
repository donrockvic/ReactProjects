import { createStore, combineReducers } from 'redux';

import expenseReducer from '../reducers/expences';
import filterReducer from '../reducers/filters';

export default () => {
    // Store
    const store = createStore(
        combineReducers({
            expenses: expenseReducer,
            filter: filterReducer
        })
    );

    return store;
};
 