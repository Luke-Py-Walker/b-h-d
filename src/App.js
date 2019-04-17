import React, { Component } from 'react';
import Logo from './components/logo/Logo';
import NumberDisplay from './components/numberDisplay/NumberDisplay';
import InputNumber from './components/inputNumber/InputNumber';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
        <Logo />
        </header>
        <InputNumber />
        <NumberDisplay base={"Decmial"} converted={123}/>
        <NumberDisplay base={"Two's Complement (Signed) Decimal"} converted={-1245}/>
        <NumberDisplay base={"Hexadecimal"} converted={"0x1809"}/>
      </div>
    );
  }
}

export default App;
