import React from 'react';
import ReactDOM from 'react-dom';


class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handelAddOne = this.handelAddOne.bind(this);
        this.handelMinusOne = this.handelMinusOne.bind(this);
        this.handleRest = this.handleRest.bind(this);
        this.state = {
            count:0
        };
    };

    handelAddOne() {
        this.setState((prevState) => {
            return{
                count: prevState.count + 1
            } ;
        });
    }

    handelMinusOne() {
        this.setState((prevState) => {
            return{
                count: prevState.count -1
            } ;
        });

    }

    handleRest() {
        this.setState(() => {
            return{
                count: 0
            } ;
        });

        // this.setState({
        //     count:0
        // });

    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handelAddOne}>+1</button>
                <button onClick={this.handelMinusOne}>-1</button>
                <button onClick={this.handleRest}>reset</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter/>, document.getElementById('root'));