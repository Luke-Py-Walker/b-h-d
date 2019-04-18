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
        console.log("RUNNING")
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

  render() {
    return (
      <div className="App">
        <header>
        <Logo />
        </header>
        <InputNumber onInputChange = {this.onInputChange} onInputTypeChange={this.onInputTypeChange}/>
        <NumberDisplay base={"Binary"} converted={this.toDecimal(this.state.input)}/>
        <NumberDisplay base={"Decmial"} converted={this.toDecimal(this.state.input)}/>
        <NumberDisplay base={"Two's Complement (Signed) Decimal"} converted={-1245}/>
        <NumberDisplay base={"Hexadecimal"} converted={"0x1809"}/>
      </div>
    );
  }
}

export default App;
