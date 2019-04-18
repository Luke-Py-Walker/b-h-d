import React from 'react';
// import './InputNumber.css';
class InputNumber extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <select onChange={this.props.onInputTypeChange}>
                        <option value="binary">binary</option>
                        <option value="decimal">decimal</option>
                        <option value="hexadecimal"> hexadecimal</option>
                    </select>
                    <input type='text' onChange={this.props.onInputChange}/>
                </div>

            </div>
        )
    }
}

export default InputNumber;
