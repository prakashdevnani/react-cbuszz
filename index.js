import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Hello from './App';
import './style.css';
import ClassBasedComponent from './ClassBasedCompnent.js'


class App extends Component { 
    render() 
    { 
        return (<div><h2>Welcome to</h2> 
        <ClassBasedComponent /></div>); 
    } 
} 

ReactDOM.render(<App />, document.getElementById('root'));
  //ReactDOM.render(<Hello />, document.getElementById('mydiv'))


