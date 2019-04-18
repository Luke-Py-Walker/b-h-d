import React from 'react';
import './NumberDisplay.css';
class NumberDisplay extends React.Component {
    render() {
        return (
            <div>
                <p className="NumberDisplay">{this.props.base}</p>
                <h1 className="NumberDisplay f3 link dim black underline pa3 pointer">{this.props.converted}</h1>
            </div>
        )
    }
}

export default NumberDisplay;
