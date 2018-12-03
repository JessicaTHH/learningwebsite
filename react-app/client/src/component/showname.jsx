import React from 'react';

const ShowName = (props) => (
  <div 
    style={{color: props.selectedColor}} 
    className="showName"
  >
  {props.selectedColorName}
  </div> 
)

export default ShowName;
