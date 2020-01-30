import React, {Component} from 'react';
import './App.css';
import Calculator from './components/Calculator';
import About from './components/layout/About';

class App extends Component {
  
  state = {
    aboutDisplayed: false
  }
  
  render(){
    return (
      <div className="App">
        <div className={this.state.aboutDisplayed === true ? "about-button open" : "about-button"}>
          <span className="icon" onClick={() => {this.setState({aboutDisplayed: !this.state.aboutDisplayed})}}><i className="fas fa-info"></i></span>
          {this.state.aboutDisplayed === true ? <About/> : ""}
        </div>
        <Calculator/>
      </div>
    );
  }
}

export default App;
