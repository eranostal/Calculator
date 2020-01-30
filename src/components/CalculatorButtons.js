import React, { Component } from 'react';
import Input from './Input';

export class CalculatorButtons extends Component {

    state={
        lastClicked: ""
    }

    render() {
        return (
            <React.Fragment>
                <div className="calculator-numbers">
                    <input type="button" value="C" className="clear" onClick={this.props.clear}/>
                    <input type="button" value="1" onClick={this.props.input}/>
                    <input type="button" value="2" onClick={this.props.input}/>
                    <input type="button" value="3" onClick={this.props.input}/>
                    <input type="button" value="4" onClick={this.props.input}/>
                    <input type="button" value="5" onClick={this.props.input}/>
                    <input type="button" value="6" onClick={this.props.input}/>
                    <input type="button" value="7" onClick={this.props.input}/>
                    <input type="button" value="8" onClick={this.props.input}/>
                    <input type="button" value="9" onClick={this.props.input}/>
                    <input type="button" value="0" onClick={this.props.input}/>
                </div>
                <div className="calculator-math">
                    <input type="button" value="+" onClick={this.props.input}/>
                    <input type="button" value="-" onClick={this.props.input}/>
                    <input type="button" value="*" onClick={this.props.input}/>
                    <input type="button" value="=" onClick={this.props.doMath}/>
                </div>
            </React.Fragment>
        )
    }
}

export default CalculatorButtons
