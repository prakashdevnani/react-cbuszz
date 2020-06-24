import React, { Component } from 'react';

export default class ClassBasedComponent extends Component{
  componentDidMount(){
    document.title="Learning React from CTE";
  }
  render(){
    return(
      <React.Fragment>
      <div>
      <h1>Learn Demo for Class Based Component</h1>
      <p>Otherwise knwo as container or stateful component </p>
      <button onClick={this.changeTitle}>Change Title</button>
      </div>
      </React.Fragment>
    );//can't send more than one element so enclosed under div

    
  }
  //predefined element/ component available after 16 react 
    changeTitle =() =>{
      document.body.innerText="Expecting a logical break";
      }
}