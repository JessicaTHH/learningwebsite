import React from 'react';
import { Link } from 'react-router-dom';

const HomeStripe = (props) => (
  <div id="stripe">
   <Link to="/learncolor">
    <button 
      id="next"  
      className="nextButton"
      >Learn Colors
      </button>
   </Link> ||
   <Link to="/playgame">
    <button 
      id="next"  
      className="nextButton"
     > Play Game
      </button>
    </Link>
  </div> 
);

export default HomeStripe;