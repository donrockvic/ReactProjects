import { createStore } from "redux";


const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});


const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});


const setCount = ({count}) => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET',
});


//Reducers
// 1. Reducer are pure functions
// 2. Never change state or actions


const store = createStore( (state = {count: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - 1
            };
        case 'SET':
            return {
                count: action.count
            };
        case 'RESET':
            return {
                count: 0
            };
        default:
            return state;
    }
});

const unsubscribe = store.subscribe( () => {
    console.log(store.getState());
});

// Action - it is an object that gets sent to the store
// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });

store.dispatch(incrementCount({incrementBy: 5}));
store.dispatch(incrementCount());

store.dispatch(decrementCount());

// unsubscribe();
store.dispatch(setCount({count:101}));
store.dispatch(resetCount());


unsubscribe();


