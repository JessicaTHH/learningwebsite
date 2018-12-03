import React from 'react';

const Header = (props) => (
  <h1 style={{backgroundColor: props.selectedColor}}>
    The color {props.selectedColorName}
  </h1> 
)

export default Header;