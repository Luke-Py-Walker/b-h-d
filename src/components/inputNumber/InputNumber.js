import React from 'react';
// import './InputNumber.css';
class InputNumber extends React.Component {

    render() {
        return (
            <div>
                <div>
                    <select>
                        <option value="binary">binary</option>
                        <option value="decimal">decimal</option>
                        <option value="hex"> hexadecimal</option>
                    </select>
                    <input placeholder="ex. 101001"/>
                </div>

            </div>
        )
    }
}

export default  InputNumber;
