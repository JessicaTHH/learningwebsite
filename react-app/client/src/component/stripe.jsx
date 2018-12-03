import React from 'react';

const Stripe = (props) => (
  <div id="stripe">
  <span id="message">{props.message}</span>
  <br/>
  <button 
    id="next"  
    className="nextButton"
    onClick={props.handleClick}
    >New Color
    </button>
  </div> 
)

export default Stripe;