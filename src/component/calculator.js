import React from 'react';
import Title from './calculatorTitle';
import OutputScreen from './outputScreen';
import Button from './button';
class Calculator extends React.Component{
    constructor(){
        super();
        this.state={question:"",answer:""};
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick=(event)=>{
        const value=event.target.value;
        switch(value){
            case '=':
                if(this.state.question!==""){
                    var ans="";
                    try{
                        ans=eval(this.state.question);
                    }
                    catch(err){
                        this.setState({answer:"math Error"})
                    }
                    if(ans===undefined){
                        this.setState({answer:"Math Error"})
                    }
                    else{
                        this.setState({answer:ans,question:""});
                    } 
                }
                break;
            case "clear":
                this.setState({answer:"",question:""});
                break;
            case "delete":
                var str=this.state.question;
                str=str.substring(0,str.length-1);
                this.setState({question:str});
                break;
            default:
                console.log("hello");
                this.setState({question:this.state.question+=value});
                break;                

        }
    }
    render(){
        return(
            <div className='frame'>
                <Title value={"chetan calculator"}/>
                <div className='mainCalc'>
                    <OutputScreen value1={this.state.question} value2={this.state.answer}/>
                    <div className='button-row'>
                        <Button label="clear" handleClick={this.handleClick}/>
                        <Button label="Delete" handleClick = {this.handleClick}/>
                        <Button label="." handleClick = {this.handleClick}/>
                        <Button label="/" handleClick = {this.handleClick}/>
                    </div>
                    <div className='button-row'>
                    <Button label="7" handleClick = {this.handleClick}/>
                    <Button label="8" handleClick = {this.handleClick}/>
                    <Button label="9" handleClick = {this.handleClick}/>
                    <Button label="*" handleClick = {this.handleClick}/>
                    </div>
                    <div className='button-row'>
                    <Button label="4" handleClick = {this.handleClick}/>
                    <Button label="5" handleClick = {this.handleClick}/>
                    <Button label="6" handleClick = {this.handleClick}/>
                    <Button label="-" handleClick = {this.handleClick}/>
                    </div>
                    <div className='button-row'>
                    <Button label="1" handleClick = {this.handleClick}/>
                    <Button label="2" handleClick = {this.handleClick}/>
                    <Button label="3" handleClick = {this.handleClick}/>
                    <Button label="+" handleClick = {this.handleClick}/>
                    </div>
                    <div className='button-row'>
                    <Button label="0" handleClick = {this.handleClick}/>
                    <Button label="=" handleClick = {this.handleClick}/>
                    </div>
                </div>
            </div>
        )
    }
}
export default Calculator;