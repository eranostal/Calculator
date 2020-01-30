import React, { Component } from 'react'

export class CalculatorDisplay extends Component {
    render() {
        return (
            <div className="calculator-display">
                <input type="text" value={this.props.calcDisplay} readOnly/>
            </div>
        )
    }
}

export default CalculatorDisplay
