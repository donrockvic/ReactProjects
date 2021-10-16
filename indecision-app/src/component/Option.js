import React from 'react';

const Option = (props) => {
    return (
        <div className="option">
            <p className="option__text"> {props.count} . {props.optiontext}</p>
            
            <button 
                className="button button--link"
                onClick={(e) => {
                    props.remove(props.optiontext)
                }}
            >
                Remove
            </button>
        </div>
    );
};


export default Option;