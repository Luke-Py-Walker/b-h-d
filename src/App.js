import React, { Component } from 'react';
import Logo from './components/logo/Logo';
import NumberDisplay from './components/numberDisplay/NumberDisplay';
import InputNumber from './components/inputNumber/InputNumber';

import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputType: 'binary',
            input: 0,
        }
    }

    onInputChange = (event) => {
        this.setState({
            input: event.target.value,
        })
    }

    onInputTypeChange = (event) => {
        this.setState({
            inputType: event.target.value,
        })
    }

    toBinary (input) {
        if(this.state.inputType === "decimal") {
            return "0b" + parseInt(input).toString(2);
        } else if (this.state.inputType === "hexadecimal") {
            return "0b" + parseInt(input).toString(16)
        } else {
            return "0b" + input;
        }
    }

    toDecimal (input) {
        if(this.state.inputType === "binary") {
            return parseInt(input,2);
        } else if (this.state.inputType === "hexadecimal") {
            return parseInt(input, 16);
        } else {
            return input;
        }
    }

    toHexadecimal (input) {
        if(this.state.inputType === "binary") {
            return "0x" + parseInt(input,2).toString(16);
        } else if (this.state.inputType === "decimal") {
            return "0x" + parseInt(input).toString(16);
        } else {
            return "0x" + input;
        }
    }


  render() {
    return (
      <div className="App">
        <header>
        <Logo />
        </header>
        <InputNumber onInputChange = {this.onInputChange} onInputTypeChange={this.onInputTypeChange}/>
        <NumberDisplay base={"Binary"} converted={this.toBinary(this.state.input)}/>
        <NumberDisplay base={"Decmial"} converted={this.toDecimal(this.state.input)}/>
        <NumberDisplay base={"Hexadecimal"} converted={this.toHexadecimal(this.state.input)}/>
        <NumberDisplay base={"Two's Complement (Signed) Decimal"} converted={this.state.input}/>
      </div>
    );
  }
}

export default App;
