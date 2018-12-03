import React from 'react';

const Circle = (props) => (
  <div 
    style={{backgroundColor: props.selectedColor}} 
    className="square" 
    id="square_1"
    onClick={props.handleClick}
  >
  </div> 
)


export default Circle;
