import React from 'react';

const Dot = (props) => (
  <div 
    style={{backgroundColor: props.selectedColor}} 
    className="circle" 
    onClick={props.handleClick}
  >
  </div> 
)


export default Dot;