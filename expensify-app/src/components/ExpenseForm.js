import React from 'react';
import moment from 'moment';

import { SingleDatePicker } from 'react-dates';

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            description: props.expense ? props.expense.description: '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount).toString() : 0,
            createdAt: props.expense ? moment(props.expense.createdAt) :moment(),
            calFocused :  false,
            error: ''
        };
    };
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(()=>({description}));
    };

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({note}))
    };

    onAmountChange = (e) => { 
        const amount = e.target.value;
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
            this.setState(() => ({amount}));
        }

    };

    onDateChange = (createdAt) => {
        if(createdAt){
            this.setState(() => ({createdAt}));
        }
    };

    onFocusChange = ({focused}) => {
        this.setState(() => ({calFocused:focused}) )
    };

    onSubmit = (e) => {
        e.preventDefault();
        if(!this.state.description || !this.state.amount){
            // set error to scrren
            this.setState(() => ({error: 'Please provide description and amount'}));
        }else {
            // clear the error
            this.setState(() => ({error:''}));
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10),
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            });
        }
    };

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input 
                        type="text" 
                        placeholder="Description" 
                        value={this.state.description} 
                        onChange={this.onDescriptionChange} 
                        autoFocus  
                     />
                    <input 
                        type="number" 
                        placeholder="Amount" 
                        value = {this.state.amount}
                        onChange = {this.onAmountChange}
                    />
                    <SingleDatePicker
                        date = {this.state.createdAt}
                        onDateChange = {this.onDateChange}
                        focused = {this.state.calFocused}
                        onFocusChange= {this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange = {()=> false}
                    />
                    <textarea 
                    value={this.state.note}
                    onChange={this.onNoteChange}
                    placeholder="Add a note for yout expence (optional)" >

                    </textarea>
                    
                    <button>
                        Submit Expense
                    </button>
                </form>
            </div>
        )
    }
}