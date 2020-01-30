import React, { Component } from 'react';


export class Input extends Component {
    
    componentDidMount = () => {

        document.onkeypress = (e) => {
            e = e || window.event;

            //This isn't needed because e.keyCode has differences for shift vs. non-shift
            let shifted = e.shiftKey;

            let keyPushed = e.keyCode;

            console.log(keyPushed);

            switch(keyPushed){
                case 48:
                    this.props.input(e, "0");
                    break;
                case 49:
                    this.props.input(e, "1");
                    break;
                case 50:
                    this.props.input(e, "2");
                    break;
                case 51:
                    this.props.input(e, "3");
                    break;
                case 52:
                    this.props.input(e, "4");
                    break;
                case 53:
                    this.props.input(e, "5");
                    break;
                case 54:
                    this.props.input(e, "6");
                    break;
                case 55:
                    this.props.input(e, "7");
                    break;
                case 56:
                    this.props.input(e, "8");
                    break;
                case 57:
                    this.props.input(e, "9");
                    break;
                case 43:
                    this.props.input(e, "+");
                    break;
                case 45:
                    this.props.input(e, "-");
                    break;
                case 13:
                    this.props.doMath();
                    break;
                case 61:
                    this.props.doMath();

            }

        }

        document.onkeyup = (e) => {
            e = e || window.event;

            let keyPushed = e.keyCode;

            //If backspace is pushed
            if(keyPushed === 8){
                this.props.clear();
            }

        }

    }

    
    
    render() {
        return (
            false
        )
    }
}

export default Input
