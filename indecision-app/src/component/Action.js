import React from 'react';

// stateless function component
const Action = (props) => {
    return (
        <div>
            <button 
                className="big-button"
                onClick={props.action}
                disabled={!props.hasOptions}
            >
                What should I do?
            </button>
        </div>
    );
};

// class Action extends React.Component {
//     render() {
//         return (
//             <div>
//                 <button 
//                     onClick={this.props.action}
//                     disabled={!this.props.hasOptions}
//                 >
//                     What should I do?
//                 </button>
//             </div>
//         );
//     }
// }



export default Action;