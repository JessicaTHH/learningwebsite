import React from 'react';

const Footer = (props) => (
  <div 
    className="footer" 
    id="score"
  >
    {props.scoreDisplay()}
  </div> 
)

export default Footer;