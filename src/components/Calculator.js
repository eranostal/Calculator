import React, { Component } from 'react';
import CalculatorDisplay from './CalculatorDisplay';
import CalculatorButtons from './CalculatorButtons';
import Input from './Input';


export class Calculator extends Component {

    state = {
        calcDisplay: "0",
        lastClicked: "",
        numbers: [],
        math: [],
        total: null,
        lastNum: 0,
        lastMath: "",
        repeatFlag: false
    }

    componentDidMount = () => {

    }


    clear = (e) => {
        //Reset all states.
        this.setState({calcDisplay: "0", lastClicked: null, numbers: [], math: [], total: null, lastNum: 0, lastMath: "", repeatFlag: false});
    }

    input = (e, keyPressed = "") => {

        if(keyPressed !== ""){
            e.target.value = keyPressed
        }

        let value = e.target.value;

        //Check if the state is currently "0", if it is don't add anything.
        if(this.state.calcDisplay.length >= 20){
            console.log("ERROR: display limit reached");
            return;
        } else if(this.state.calcDisplay === "0" && value === "0"){
            console.log("ERROR: Display already 0");
            return;
        } else if(isNaN(value) && isNaN(this.state.lastClicked)){
            //This will happen when you reclick a math value. Remove the last value from the array, then add the new value to the end and then change the display.
            this.setState({math: [...this.state.math.filter(lastValue => this.state.math[this.state.math.length])]}, () => {
                this.setState({math: [...this.state.math, value], calcDisplay: value});
            });
        } else if(value === this.state.lastClicked && (this.state.lastClicked === math.plus || this.state.lastClicked === math.minus || this.state.lastClicked === math.mult || this.state.lastClicked === math.div)) {
            console.log("ERROR: Reused Math");
            return;
        } else if(value === "+" || value === "-" || value === "*" || value === "/") {
            //First save the number, then save the math value and then save calcDisplay.
            this.setState({numbers: [...this.state.numbers, Number(this.state.calcDisplay)], math: [...this.state.math, value], calcDisplay: value});
        } else {
            //Check if calcDisplay is currently set to the one of the following.
            this.setState({calcDisplay: (this.state.calcDisplay === "0" || this.state.calcDisplay === "+" || this.state.calcDisplay === "-" || this.state.calcDisplay === "*" || this.state.calcDisplay === "/") ? value : this.state.calcDisplay += value});
        }

        this.setState({lastClicked: value});

    }

    doMath = async () => {

        //Check if the last clicked is one of the math symbols.
        if(this.state.lastClicked === math.plus || this.state.lastClicked === math.minus || this.state.lastClicked === math.mult || this.state.lastClicked === math.div){
            return;
        }

        if(this.state.numbers.length === 0){
            return;
        } else {
            if(this.state.lastClicked !== "="){
                await this.setState({numbers: [...this.state.numbers, Number(this.state.calcDisplay)]});
            }
        }

        //Running total.
        let currTotal = 0;
        let numbers = this.state.numbers;
        let mathList = (this.state.math.length > 0) ? this.state.math : this.state.lastMath;


        //What happens if the person clicks a math and then equals.
        for(let i = 0; i < numbers.length; i+=2){
            
            let num1 = numbers[i];
            let num2 = (numbers.length > 1) ? numbers[++i] : this.state.lastNum;

            for(let j = 0; j < mathList.length; j++){

                switch(mathList[j]) {
                    case math.plus:
                        currTotal += num1 + num2;
                        break;
                    case math.minus:
                        currTotal += num1 - num2;
                        break;
                    case math.mult:
                        currTotal += num1 * num2;
                        break;
                    case math.div:
                        currTotal += num1 / num2;
                        break;
                }

                console.log("Doing math on: " + num1 + " and " + num2);

            }

        }


        //Save the last number and last math value. Only if the lastClicked wasn't already an equals sign.
        if(this.state.lastClicked !== "="){
            this.setState({lastNum: numbers[numbers.length - 1], lastMath: mathList[mathList.length - 1]});
        }

        //Change states and stuff.
        this.setState({calcDisplay: String(currTotal), lastClicked: "=", numbers: [Number(currTotal)], math: [], total: currTotal});

    }

    render() {
        return (
            <div className="calculator">
                <CalculatorDisplay calcDisplay={this.state.calcDisplay}/>
                <CalculatorButtons input={this.input} clear={this.clear} doMath={this.doMath}/>
                <Input input={this.input} doMath={this.doMath} clear={this.clear}/>
            </div>
        )
    }
}

const math = {
    plus: "+",
    minus: "-",
    mult: "*",
    div: "/"
}

export default Calculator
