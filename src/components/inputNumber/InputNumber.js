import React from 'react';
// import './InputNumber.css';
class InputNumber extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            inputType: 'binary',
            input: 0,
        };

        this.handleTypeChange = this.handleTypeChange.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleTypeChange(event) {
        this.setState({
            inputType: event.target.value,
        })
    }

    handleInputChange(event) {
        this.setState({
            input: event.target.value,
        })
    }

    render() {
        return (
            <div>
                <div>
                    <select value = {this.state.inputType} onChange={this.handleTypeChange}>
                        <option value="binary">binary</option>
                        <option value="decimal">decimal</option>
                        <option value="hex"> hexadecimal</option>
                    </select>
                    <input type='text' value={this.state.input} onChange={this.handleInputChange}/>
                </div>

            </div>
        )
    }
}

export default InputNumber;
