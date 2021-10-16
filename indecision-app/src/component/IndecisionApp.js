import React from 'react';

import Header from './Header';
import Action from './Action';
import Options from './Options';
import AddOption from './AddOption';
import OptionModel from './optionModel';

class IndecisionApp extends React.Component {
    state = {
        options: ['Thing one', 'Thing three', 'Thing four'],
        selectedOption: undefined
    };

    handleClearSelectedOption = () => {
        this.setState( () => ({
            selectedOption: undefined
        }));
    };

    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }));
    };

    handleDeleteOne = (argoption) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) =>{
                return  option !== argoption;
            })
        }));
    };


    hadleOptionPick = () => {
        const randomNum = Math.floor(Math.random()*this.state.options.length);
        const option = this.state.options[randomNum];
        // alert(option);
        this.setState(()=>({
            selectedOption: option
        }));
    }; 

    handleAddOption = (option) => {
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
    };
    
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
        if(prevState.options.length !== this.state.options.length) {
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
                 <div className="container">
                    <Action hasOptions={this.state.options.length>0} action={this.hadleOptionPick}/>
                    <div className="widget">
                        <Options 
                            options={this.state.options} 
                            handleDeleteOptions={this.handleDeleteOptions} 
                            handleDeleteOne={this.handleDeleteOne} 
                        />
                        <AddOption addOption={this.handleAddOption}/>
                    </div>
                    
                 </div>
                 <OptionModel selectedOption={this.state.selectedOption} handleClearSelectedOption={this.handleClearSelectedOption} />
            </div>
        );
    }
}




export default IndecisionApp ;