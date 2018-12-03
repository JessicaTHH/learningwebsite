import axios from 'axios';
import React, { Component } from 'react';
import './Main.css';
import Stripe from'./component/stripe';
import Circle from './component/circle';
import Circle2 from './component/circle2';
import ShowName from './component/showname'
import Footer from'./component/footer';


class PlayGame extends Component {
  constructor() {
  super();
  this.state = {
    answerId: '',
    answerColor: '',
    answerColorName: '',
    questionId:'',
    questionColor:'',
    clicks: 0,
    rightclicks: 0,
    message:'',
  };
    this.handleClick=this.handleClick.bind(this);
    this.handleMessageClick=this.handleMessageClick.bind(this);
    this.handleCircleClick=this.handleCircleClick.bind(this);
    this.getColor=this.getColor.bind(this);
    this.scoreDisplay=this.scoreDisplay.bind(this);
    this.endGame=this.endGame.bind(this);
    this.reset=this.reset.bind(this);
}

componentDidMount() {
  this.getColor();
  console.log('componentDidMount');
}

///////////pick and select///////////////////
handleClick(e){
  e.preventDefault();
  console.log("you clicked");
  this.getColor();
  this.setState((prevState) => ({
           clicks: prevState.clicks + 1,
           message:'',
        }));
  console.log("clicked"+this.state.clicks)
  }
handleMessageClick(e){
  e.preventDefault();
  console.log("Clicked new game");
  this.getColor();
  this.setState({
    clicks: 0,
    rightclicks: 0,
    message:'',
  })
  }
handleCircleClick(e){
  e.preventDefault();
  console.log("Circle is clicked");
  this.getColor();
  this.setState((prevState) => ({
          message:'Bingo!',
          clicks: prevState.clicks + 1,
          rightclicks: prevState.rightclicks + 1
        }));
  console.log("clicked "+this.state.clicks)
  }

getColor() {
  axios.get('/selectColors')
  .then(response => {
    console.log("im here")
    console.log(response)
    this.setState({ 
      answerId: response.data._id,
      answerColor: response.data.color,
      answerColorName: response.data.names,
    });
  })
  axios.get('/selectColors')
  .then(response => {
    console.log(response)
    this.setState({ 
      questionColor: response.data.color,
      questionColorName: response.data.names,
    });
  })
  .catch(error => {
    console.log(error);
  });
  console.log('Axios done');
}

///////////Score Display///////////////////
scoreDisplay(){
    const countRight=this.state.rightclicks;
    const count=this.state.clicks;
      if (countRight===20){ 
        this.endGame();
        }
      if (count>20){
        this.reset();  
        }
    return ('Score:'+countRight+'/'+count);
}

endGame(){
  this.setState({
    clicks: 0,
    rightclicks: 0,
    message:'Great job! You have learn all colors! ',
  })
}

reset(){
  this.setState({
    clicks: 0,
    rightclicks: 0,
    message:'Practice makes perfect, Click New Color to play again! ',
  })
}

///////////render///////////////////
render(){
  return(
    <div>
          <Stripe 
            message={this.state.message}
            handleClick={this.handleMessageClick} />
          <Circle 
            selectedColor={this.state.answerColor}
            handleClick={this.handleCircleClick}
          />
          <Circle2 
            selectedColor={this.state.questionColor}
            handleClick={this.handleClick}
          />
           <ShowName 
            selectedColor={this.state.answerColor}
            selectedColorName={this.state.answerColorName}
          />
         <Footer
            scoreDisplay={this.scoreDisplay}
         />
      </div>
)}
}

export default PlayGame;
