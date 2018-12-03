import React, { Component } from 'react';
import './Main.css';
import HomeStripe from'./component/homeStripe';


class Home extends Component {
  constructor() {
  super();
    this.handleClick=this.handleClick.bind(this);
    this.toGame=this.toGame.bind(this);
    
}

componentDidMount() {
  console.log('componentDidMount');
}

handleClick(e){
  e.preventDefault();
  console.log("you clicked");
  }

toGame(e){
  e.preventDefault();
  console.log("want to go Play");
  }

///////////render///////////////////
render(){
  return(
    <div>
        <div className="welcome">
          Hello there! Welcome to <span id="message">Happy Learn Colors!</span><br/>
          In <span id="message">LEARN COLORS</span> section, you will be learning 9 colors.<br/>
          Try our <span id="message">PLAY GAME</span> section to know how much you know about colors!<br/>
          No more chit-chats, let's get started!
        </div>
        <HomeStripe 
            toGame={this.toGame}
            handleClick={this.handleClick} />
      </div>
)}
}

export default Home;
