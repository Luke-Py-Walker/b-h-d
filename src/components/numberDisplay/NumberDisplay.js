import React from 'react';
import './NumberDisplay.css';
class NumberDisplay extends React.Component {
    render() {
        return (
            <div>
                <p class="NumberDisplay">{this.props.base}</p>
                <h1 class="NumberDisplay">{this.props.converted}</h1>
            </div>
        )
    }
}

export default NumberDisplay;
