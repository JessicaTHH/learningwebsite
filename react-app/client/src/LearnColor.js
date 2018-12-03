import axios from 'axios';
import React, { Component } from 'react';
import './Main.css';
import Dot from './component/dot';
import ShowName from './component/showname'



class LearnColor extends Component {
  constructor() {
  super();
  this.state = {
    selectedId: '',
    selectedColor: '',
    selectedColorName: '',
  };
    this.handleClick=this.handleClick.bind(this);
    this.getColor=this.getColor.bind(this);
}

componentDidMount() {
  this.getColor();
  console.log('componentDidMount');
}

handleClick(e){
  e.preventDefault();
  console.log("you clicked");
  this.getColor();
  }

getColor() {
  axios.get('/color')
  .then(response => {
    console.log("im here")
    console.log(response)
    this.setState({ 
      selectedId: response.data._id,
      selectedColor: response.data.color,
      selectedColorName: response.data.names,
    });
  })
  .catch(error => {
    console.log(error);
  });
  console.log('Axios done');
}

render(){
  return(
    <div>
          <Dot 
            selectedColor={this.state.selectedColor}
            handleClick={this.handleClick}
          />
          <ShowName 
            selectedColor={this.state.selectedColor}
            selectedColorName={this.state.selectedColorName}
          />

      </div>
)}
}

export default LearnColor;
