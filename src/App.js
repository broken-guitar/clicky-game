import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
// import components
import ImageCard from "./components/ImageCard";

class App extends Component {
    state = {
        someArray: [],
        someString: ""
    };
    
    // TODO methods to handle game play shuffle and scoring logic

    render () {   
        return (
            <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
                >
                Learn React
                </a>
            </header>
            </div>
        );
    };
}
export default App;
