import React from 'react';

import Header from '../component/Header';
import Action from '../component/Action';
import Options from '../component/Options';
import AddOption from '../component/AddOption';


class IndecisionApp extends React.Component {
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.hadleOptionPick = this.hadleOptionPick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOne = this.handleDeleteOne.bind(this);
        this.state = {
           options: ['Thing one', 'Thing three', 'Thing four']
        };
    }

    // handleDeleteOptions() {
    //     this.setState(() => {
    //         return {
    //             options: []
    //         };
    //     });
    // }

    handleDeleteOptions() {
        this.setState(() => ({ options: [] }));
    }

    handleDeleteOne(argoption){
        this.setState((prevState) => ({
            options: prevState.options.filter((option) =>{
                return  option !== argoption;
            })
        }));
    }


    hadleOptionPick() {
        const randomNum = Math.floor(Math.random()*this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }

    handleAddOption(option) {
        if(!option) {
            return 'Enter valid value to add item';
        }else if(this.state.options.indexOf(option) > -1){
            return 'This option alredy exist';
        }


        this.setState((prevState) => {
            return {
                options: prevState.options.concat([option])
            };
        });
    }
    // lifecycle methods
    componentDidMount(){
        try{
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if(options) {
                this.setState(() =>({options}));
            }

        } catch(e) {

        }
        
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length != this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    componentWillUnmount(){
        console.log('Component upmounted');
    }

    render() {
        const subtitle = 'Put your life in the hands of a computer';

        // const options = ['Thing one', 'Thing two', 'Thing four'];

        return (
            <div>
                 <Header subtitle={subtitle}/>
                 <Action hasOptions={this.state.options.length>0} action={this.hadleOptionPick}/>
                 <Options 
                    options={this.state.options} 
                    handleDeleteOptions={this.handleDeleteOptions} 
                    handleDeleteOne={this.handleDeleteOne} 
                />
                 <AddOption addOption={this.handleAddOption}/>
            </div>
        );
    }
}


export default IndecisionApp ;