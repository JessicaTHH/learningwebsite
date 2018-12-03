import React from 'react';

const Circle2 = (props) => (
  <div 
    style={{backgroundColor: props.selectedColor}} 
    className="square" 
    id="square_2"
    onClick={props.handleClick}
  >
  </div> 
)


export default Circle2;
