import React from 'react';
import ReactDOM from 'react-dom';


let count = 0;

const addOne = () => {
    count++;
    renderCounterApp();
}

const minusOne = () => {
    count--;
    renderCounterApp();
}

const reset = () => {
    count = 0;
    renderCounterApp();
}


const renderCounterApp = () => {
    const template = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}> +1 </button>
            <button onClick={minusOne}> -1 </button>
            <button onClick={reset}> reset </button>
        </div>
    );

    ReactDOM.render(template, document.getElementById('root'));
};


renderCounterApp(); 

